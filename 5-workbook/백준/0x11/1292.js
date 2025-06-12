const fs = require("fs");
const [A, B] = fs.readFileSync("index.txt").toString().trim().split(" ").map(Number);

function solution(a, b) {
  const numbers = [];

  // 1~N 까지 일정한 수열을 배치한다.
  for (let i = 1; i < b + 1; i++) {
    for (let j = 0; j < i; j++) {
      numbers.push(i);
    }
  }

  // A부터 B까지 구간으로 자른 뒤 해당 값을 모두 더한 값을 반환한다.
  return numbers.slice(a - 1, b).reduce((curr, next) => curr + next, 0);
}

console.log(solution(A, B));
