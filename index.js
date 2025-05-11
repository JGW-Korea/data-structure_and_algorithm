const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(n, prices) {
  const dp = Array.from({ length: n }, () => [0, 0, 0]); // DP 테이블 초기화

  // DP 테이블 초기식 정립
  dp[0][0] = prices[0][0];
  dp[0][1] = prices[0][1];
  dp[0][2] = prices[0][2];

  // 점화식 -> dp[i][0] = p[i][0] + min(dp[i - 1][1], dp[i - 1][2])
  // 점화식 -> dp[i][1] = p[i][1] + min(dp[i - 1][0], dp[i - 1][2])
  // 점화식 -> dp[i][2] = p[i][2] + min(dp[i - 1][0], dp[i - 1][1])
  for (let i = 1; i < n; i++) {
    dp[i][0] = prices[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = prices[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = prices[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  return Math.min(...dp[n - 1]);
}

const N = Number(input[0]);
const prices = input.slice(1).map((element) => element.split(" ").map(Number));

console.log(solution(N, prices));
