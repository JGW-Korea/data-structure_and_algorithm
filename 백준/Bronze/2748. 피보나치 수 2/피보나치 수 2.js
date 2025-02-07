function solution(x) {
  const dp = new Array(x + 1).fill(BigInt(0));

  dp[1] = BigInt(1);
  dp[2] = BigInt(1);

  for(let i = 3; i <= x; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[x].toString();
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(Number(input)));