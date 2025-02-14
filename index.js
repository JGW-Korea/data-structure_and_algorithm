function solution(N, K, coins) {
  let answer = 0; // 최소 거스름돈 개수

  // 가장 큰 단위의 동전부터 거스름돈을 계산한다.
  for (let i = 0; i < N; i++) {
    if (K >= coins[i]) {
      answer += Math.floor(K / coins[i]);
      K %= coins[i];
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

// 가장 큰 단위의 동전부터 계산하기 위해 내림차순으로 정렬한다.
const coins = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

console.log(solution(N, K, coins));
