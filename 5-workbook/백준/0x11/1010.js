function combination(n, r) {
  if (r === n) return 1;

  let numerator = 1; // 분자 (m! 부분)
  let denominator = 1; // 분모 ((m-n)! * n! 부분)

  for (let i = 0; i < r; i++) {
    numerator *= n - i;
    denominator *= i + 1;
  }

  return Math.round(numerator / denominator);
}

function solution(n, m) {
  if (n === 0) return 0;
  return combination(m, n);
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input[0]);
let idx = 1;
let answer = "";

for (let testCase = 0; testCase < T; testCase++) {
  const [n, m] = input[idx++].split(" ").map(Number);
  answer += solution(n, m) + "\n";
}

console.log(answer);
