const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(_, words) {
  const alpha = new Array(26).fill(0); // 알파벳 크기만큼 생성한 일차원 배열

  // 주어진 N개 단어의 문자들이 각 자릿수에 몇 번 나왔는지 표시한다.
  words.forEach((word) => {
    let size = 1; // 자릿수 초기화

    // words[i]번째의 문자열을 뒤에서부터 시작한다. -> 자릿수의 가치가 왼쪽으로 갈수록 커지기 때문
    for (let i = word.length - 1; i >= 0; i--) {
      // 해당 문자가 각 자릿수에 몇 번 나왔는지 표기
      alpha[word[i].charCodeAt() - 65] = (alpha[word[i].charCodeAt() - 65] || 0) + size;
      size *= 10;
    }
  });

  const sortedArr = alpha.filter((el) => el > 0).sort((a, b) => b - a); // 자릿수의 가치가 큰 순으로 내림차순 정렬

  let number = 9; // 숫자로 치환할 수 있는 값은 0 ~ 9까지
  let sum = 0;

  // 자릿수의 가치가 큰 알파벳 문자부터 숫자로 치환할 수 있는 가장 큰 값이랑 곱한 결과를 누적한다.
  for (let i = 0; i < sortedArr.length; i++) {
    sum += sortedArr[i] * number--;
  }

  return sum;
}

const [N, ...words] = [Number(input[0]), ...input.slice(1)];
console.log(solution(N, words));
