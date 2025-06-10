const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(n, prices) {
  let a = 0;
  let b = 0;

  // 1. 영식 요금제: 30초마다 10원씩 청구 (1~29초 사이는 10원 청구, 30~59초 사이는 20원 청구)
  // 2. 민식 요금제: 60초마다 15원씩 청구 (1~59초 사이는 15원 청구, 60~119초 사이는 30원 청구)
  for (const price of prices) {
    a += Math.floor(price / 30 + 1) * 10;
    b += Math.floor(price / 60 + 1) * 15;
  }

  if (a === b) return `Y M ${a}`;
  else if (a < b) return `Y ${a}`;
  else {
    return `M ${b}`;
  }
}

const N = Number(input[0]); // N -> 통화 시간 목록
const prices = input[1].split(" ").map(Number); // 0 ... N -> 통화 시간

console.log(solution(N, prices));
