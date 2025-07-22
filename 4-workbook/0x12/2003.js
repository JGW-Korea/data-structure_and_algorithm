const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, M, numbers) {
  let answer = 0;

  // 투 포인터 알고리즘을 위한 두 개의 포인터 정립
  let [p1, p2] = [0, 0];

  // 투포인터 알고리즘 수행
  let sum = 0;
  while (p1 <= p2) {
    if (sum <= M) {
      if (sum === M) answer += 1;
      sum += numbers[p2];
      p2 += 1;
    } else {
      sum -= numbers[p1];
      p1 += 1;
    }
  }

  return answer;
}

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
console.log(solution(N, M, numbers));
