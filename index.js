const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, numbers) {
  let maxSum = numbers[0];
  let currentSum = numbers[0];

  for (let i = 1; i < N; i++) {
    currentSum = Math.max(numbers[i], currentSum + numbers[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
console.log(solution(N, numbers));
