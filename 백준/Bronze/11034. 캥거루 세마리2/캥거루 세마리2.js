function solution([A, B, C]) {
  const AB = B - A - 1;
  const BC = C - B - 1;

  return Math.max(AB, BC);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length; i++) {
  console.log(solution(input[i].split(' ').map(Number)));
}