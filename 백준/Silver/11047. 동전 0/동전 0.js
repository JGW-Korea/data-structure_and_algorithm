function solution(N, K, coins) {
  let answer = 0; // 최소 거스름돈 개수

  // 가장 큰 단위의 동전부터 거스름돈을 계산한다.
  for (let i = N - 1; i >= 0; i--) {
    if (K >= coins[i]) {
      answer += Math.floor(K / coins[i]);
      K %= coins[i];
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number)
console.log(solution(N, K, coins));
