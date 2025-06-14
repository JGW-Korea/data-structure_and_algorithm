function solution(n, k) {
  const numbers = Array.from({ length: n }, (_, idx) => idx + 1); // 원을 두르고 앉아있는 사람들

  const answer = [];

  // 1 2 3 4 5 6 7 -> 3 (3)
  // 1 2 4 5 6 7 -> 6 (6)
  // 1 2 4 5 7 -> 2 (9)
  // 1 4 5 7 -> 7 (12)
  // 1 4 5 -> 5 (15)
  // 1 4 -> 1 (18)
  // 4 -> 4 (21)
  while (answer.length !== n) {
    let count = 1;
    while (count !== k) {
      numbers.push(numbers.shift());
      count += 1;
    }

    answer.push(numbers.shift());
  }

  return `<${answer.join(", ")}>`;
}

const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(solution(N, K));
