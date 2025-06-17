const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(N, scores) {
  const M = Math.max(...scores); // 세준이가 이번 기말고사에서 받은 가장 높은 점수

  // 세준이가 받은 점수를 모두 조작 후 평균 계산 후 반환
  return scores.reduce((sum, score) => (sum += (score / M) * 100), 0) / N;
}

const N = Number(input[0]);
const scores = input[1].split(" ").map(Number);

console.log(solution(N, scores));
