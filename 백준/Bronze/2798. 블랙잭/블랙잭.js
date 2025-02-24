function solution(N, M, cards) {
  let answer = 0; // M에 가까운 최대값

  // 3중 반복문에서 i < j < k 조건을 보장
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        let sum = cards[i] + cards[j] + cards[k];

        if (sum <= M) {
          answer = Math.max(answer, sum);
        }
      }
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

console.log(solution(N, M, cards));
