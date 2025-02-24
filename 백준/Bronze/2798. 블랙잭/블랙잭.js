function solution(N, M, cards) {
  let answer = 0; // M에 가까운 최대값

  // 총 3장의 카드를 선택할 수 있음 (동일한 카드는 불가)
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue;

      for (let k = 0; k < N; k++) {
        if (k === i || k === j) continue;

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
