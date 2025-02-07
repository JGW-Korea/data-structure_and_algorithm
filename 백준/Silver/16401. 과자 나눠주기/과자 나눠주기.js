function solution(M, N, sticks) {
  let answer = 0; // 조카들에게 나눠준 과자의 최대길이

  let sum = sticks.reduce((prev, curr) => prev + curr);
  let left = 0;
  let right = Math.max(...sticks);

  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    for(let i = 0; i < N; i++) {
      count += Math.floor(sticks[i] / mid);
    }
    
    if(count >= M) {
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

const [M, N] = input[0].split(' ').map(Number);
const sticks = input[1].split(' ').map(Number);

console.log(solution(M, N, sticks));