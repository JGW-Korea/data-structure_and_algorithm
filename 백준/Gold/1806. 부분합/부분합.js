function solution(n, s, numbers) {
  let partialSum = 0;
  let [p1, p2] = [0, 0];
  let answer = Number.MAX_SAFE_INTEGER;
  
  while(p2 < n) {
    partialSum += numbers[p2];

    while(partialSum >= s) {
      partialSum -= numbers[p1];
      answer = Math.min(answer, p2 - p1 + 1);
      p1 += 1;
    }

    p2 += 1;
  }

  return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

console.log(solution(n, s, numbers));