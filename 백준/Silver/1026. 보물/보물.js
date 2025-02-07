function solution(n, A, B) {
  A.sort((a, b) => a - b); // A 배열을 오름차순으로 정렬한다.
  B.sort((a, b) => b - a); // B 배열을 내림차순으로 정렬한다.
  // 원래 B 배열은 재배열 하면 안되지만, 사실 이 문제는 주어진 A 배열의 작은 값 기준으로 B 배열에서 큰 값 순으로 계산해야 된다.
  // 그렇기 때문에, A 배열은 오름차순으로, B 배열은 내림차순으로 해서 N만큼 반복해서 계산해주면 된다.
  
  let sum = 0;

  for(let i = 0; i < n; i++) {
    sum += A[i] * B[i];
  }

  return sum;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const A = input[1].split(' ').map(Number); 
const B = input[2].split(' ').map(Number);

console.log(solution(n, A, B));