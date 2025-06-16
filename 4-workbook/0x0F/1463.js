function solution(N) {
  if (N === 2 || N === 3) return 1;

  const dp = new Array(N + 1).fill(0); // DP 테이블 정의

  // DP 테이블 초기식 성립
  dp[2] = 1;
  dp[3] = 1;

  // DP 점화식
  // DP[i] = min(DP[i - 1] + 1, DP[i / 2] + 1, DP[i / 3] + 1);
  for (let i = 4; i < N + 1; i++) {
    dp[i] = dp[i - 1] + 1; // 비교를 하기 위해 먼저 1을 빼서 1을 만든 회수를 저장한다.

    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1);
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1);
  }

  return dp[N];
}

const N = Number(require("fs").readFileSync("index.txt").toString().trim());
console.log(solution(N));
