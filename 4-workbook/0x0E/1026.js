const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a); // A 배열은 내림차순으로 정렬
const B = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); // B 배열은 오름차순으로 정렬

// S = A[0] * B[0] + ... + A[N - 1] * B[N - 1];
let answer = 0;
for (let i = 0; i < N; i++) {
  answer += A[i] * B[i];
}

console.log(answer);
