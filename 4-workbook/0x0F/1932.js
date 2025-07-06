const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, triangle) {
  const dp = Array.from({ length: N }, () => new Array(N).fill(0)); // DP 테이블을 생성한다.

  // DP 테이블 초기값 적용
  dp[0][0] = triangle[0][0];

  // 점화식 수립
  // - dp[i + 1][j] = dp[i][j] + triangle[i + 1][j]
  // - dp[i + 1][j + 1] = dp[i][j] + triangle[i + 1][j + 1]
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < i + 1; j++) {
      dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j] + triangle[i + 1][j]);
      dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i][j] + triangle[i + 1][j + 1]);
    }
  }

  return Math.max(...dp[N - 1]);
}

const N = Number(input[0]);
const triangle = input.slice(1).map((el) => el.split(" ").map(Number));
console.log(solution(N, triangle));
