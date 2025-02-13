function solution(N, M, trees) {
  let left = 0;
  let right = Math.max(...trees);
  let answer = 0;

  while (left <= right) {
    let total = 0; // 절단기로 자른 나무의 총합
    let mid = Math.floor((left + right) / 2);

    // 나무를 현재 절단기로 자름
    for (let i = 0; i < N; i++) {
      if (trees[i] > mid) {
        total += trees[i] - mid; // 자른 나무의 길이를 저장함
      }
    }

    if (total >= M) {
      answer = Math.max(answer, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

console.log(solution(N, M, trees));
