function solution(N) {
  const dp = new Array(N + 1).fill(0); // DP 배열 크기 지정

  // 초기식 지정
  dp[2] = 1;
  dp[3] = 1;

  // 점화식 DP[i] = Math.min(DP[i / 3], DP[i / 2], DP[i - 1])
  for (let i = 4; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1);
  }

  return dp[N];
}

const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString());

console.log(solution(N));
