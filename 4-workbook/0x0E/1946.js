const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, scores) {
  scores.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let minValue = 100001;

  for (const [x, y] of scores) {
    if (y < minValue) {
      minValue = y;
      count += 1;
    }
  }

  return count;
}

const TC = Number(input[0]);

let answer = "";
let idx = 1;
for (let t = 0; t < TC; t++) {
  const N = Number(input[idx++]);
  const scores = [];

  for (let i = 0; i < N; i++) {
    scores.push(input[idx++].split(" ").map(Number));
  }

  answer += solution(N, scores) + "\n";
}

console.log(answer.trim());
