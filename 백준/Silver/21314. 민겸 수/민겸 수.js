function findMaxValue(string) {
  // 민겸 숫자 문자 담을 배열
  let stack = [];
  let number = '';

  for(let i = 0; i < string.length; i++) {
    const item = string[i];

    // item이 M이면 배열에 담기만 한다.
    if(item === 'M') {
      stack.push(item);
      continue;
    }

    if(item === 'K') {
      // item이 K 이면서, stack에 요소가 있다면, 5 * (10 ** N)에 해당하는 숫자
      if(stack.length) {
        number += '5';
        for(let i = 0; i < stack.length; i++) {
          number += '0';
        }
      } else { // stack에 요소가 없다면, 5만 추가한다.
        number += '5';
      }
    }

    // ~ K 까지 계산이 끝났으면, 민겸 숫자 표기법에 따라 K로 시작하는 수는 없기 때문에 배열 초기화
    stack = [];
  }

  // 반복문이 끝나고, 요소가 남아있으면, 모두 M이기 때문에 각각 1로 처리한다.
  if(stack.length) {
    stack.forEach(() => number += '1');
  }

  return number;
}

function findMinValue(string) {
  // 민겸 숫자 문자 담을 배열
  let stack = [];
  let number = '';

  for(let i = 0; i < string.length; i++) {
    const item = string[i];

    // item이 M이면 배열에 담기만 한다.
    if(item === 'M') {
      stack.push(item);
      continue;
    }

    if(item === 'K') {
      // stack에 요소가 있다면, M을 모두 1로 처리하는 것보다 10 ** N으로 처리하는 것이 더 작은 수에 해당한다.
      if(stack.length) {
        number += '1';

        for(let i = 1; i < stack.length; i++) {
          number += '0';
        }

        // stack에 있는 M 표기법을 모두 처리했으면, 현재 가리키고 있는 문자 K 표기법 처리
        number += '5';
      } else { // stack에 요소가 없다면, 5만 추가한다.
        number += '5';
      }
    }

    // ~ K 까지 계산이 끝났으면, 민겸 숫자 표기법에 따라 K로 시작하는 수는 없기 때문에 배열 초기화
    stack = [];
  }

  // 반복문이 끝나고, 요소가 남아있으면, 모두 M 이다. 하지만, 최소 값을 구하기 위해서는 각각 1로 처리하는 것보다
  // 10 ^ N 으로 처리하는 것이 더 작은 수
  if(stack.length) {
    number += '1';

    for(let i = 1; i < stack.length; i++) {
      number += '0';
    }
  }

  return number;
}

function solution(string) {
  const splited = string.split('');
  const maxValue = findMaxValue(splited);
  const minValue = findMinValue(splited);

  return [maxValue, minValue].join('\n');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(input));