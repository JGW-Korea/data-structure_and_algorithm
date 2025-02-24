function solution(K, N) {
  const dp = Array.from({ length: K + 1 }, () => new Array(N + 1).fill(0));

  // 초기식 확립
  for (let person = 1; person < N + 1; person++) {
    dp[0][person] = person;
  }

  for (let i = 1; i < K + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[K][N];
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const tc = Number(input[0]);

let result = "";
let idx = 1;

for (let i = 0; i < tc; i++) {
  const [K, N] = input.slice(idx, (idx += 2)).map(Number);
  result += solution(K, N) + "\n";
}

console.log(result);
