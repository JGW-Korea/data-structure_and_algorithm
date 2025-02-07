function solution(x) {
  const dp = new Array(x + 1).fill(0);

  dp[1] = 1;
  dp[2] = 1;

  for(let i = 3; i <= x; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[x];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(Number(input)));