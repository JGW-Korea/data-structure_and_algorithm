function solution(n, triangle) {
  const dp = Array.from({length: n}, () => new Array(n).fill(0));

  // dp 테이블의 초기값
  dp[0][0] = triangle[0][0];

  for(let i = 0; i < n - 1; i++) {
    for(let j = 0; j < triangle[i].length; j++) {
      dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j] + triangle[i + 1][j]);
      dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i][j] + triangle[i + 1][j + 1]);
    }
  }

  return Math.max(...dp[n - 1]);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const triangle = [];

for(let i = 1; i <= n; i++) {
  triangle.push(input[i].split(' ').map(Number));
}

console.log(solution(n, triangle));