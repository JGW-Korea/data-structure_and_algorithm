function solution(N, K, items) {
  const dp = new Array(K + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const [weight, price] = items[i];

    for (let j = K; j >= weight; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight] + price);
    }
  }

  return dp[K];
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const items = input.slice(1).map((element) => element.split(" ").map(Number));

console.log(solution(N, K, items));
