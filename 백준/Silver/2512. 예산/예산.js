function solution(n, budget, total) {
  let left = 1;
  let right = Math.max(...budget);
  let answer = 0;
  
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;

    for(const x of budget) {
      sum += Math.min(mid, x);
    }

    if(sum <= total){
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const budget = input[1].split(' ').map(Number);
const total = Number(input[2]);

console.log(solution(n, budget, total));