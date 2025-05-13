function solution(n) {
  if (n === 0) return "1 0";
  if (n === 1) return "0 1";

  // DP 테이블 초기화
  // i ===> 0 ~ N 까지의 0, 1이 출력된 횟수 누적
  // j = 0 ===> 0이 출력된 횟수
  // j = 1 ===> 1이 출력된 횟수
  const dp = Array.from({ length: n + 1 }, () => [0, 0]);

  dp[0][0] = 1;
  dp[1][1] = 1;
  dp[2][0] = dp[2][1] = 1;

  // 점화식
  // dp[i][0] => dp[i - 1][0] + dp[i - 2][0]
  // dp[i][1] => dp[i - 1][1] + dp[i - 2][1]
  for (let i = 3; i < n + 1; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
    dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
  }

  return dp[n].join(" ");
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [_, ...N] = input.map(Number);

// 각 Test Case에 맞는 결과 누적
let answer = "";
for (const n of N) {
  answer += solution(n) + "\n";
}

console.group(answer);
