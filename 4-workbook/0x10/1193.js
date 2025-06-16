function solution(X) {
  let limit = 1;
  let n = 1;

  while (limit < X) {
    limit += n++ + 1;
  }

  const a = n - (limit - X);

  if (n % 2) {
    // n이 홀수일 경우
    return `${n - a + 1}/${a}`;
  }

  // N이 짝수일 경우
  return `${a}/${n - a + 1}`;
}

const fs = require("fs");
const X = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(solution(X));
