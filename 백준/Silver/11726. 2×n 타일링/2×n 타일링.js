function solution(N) {
  const dp = new Array(N + 1).fill(0n);

  dp[1] = 1n;
  dp[2] = 2n;

  for (let i = 3; i < N + 1; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 10007n;
  }

  return dp[N].toString();
}

const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString());

console.log(solution(N));
