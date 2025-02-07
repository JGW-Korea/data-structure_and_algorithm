function solution(n, ropes) {
  ropes.sort((a, b) => a - b); // 주어진 로프를 오름차순 정렬을 시킨다.

  let maxWidth = 0;

  // 주어진 로프 개수 만큼 순회하며 rope[i] * (n - 1) 중 최대값을 찾는다.
  for(let i = 0; i < n; i++) {
    maxWidth = Math.max(maxWidth, ropes[i] * (n - i));
  }

  return maxWidth;
}

const fs = require('fs');
const [n, ...ropes] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(solution(n, ropes));