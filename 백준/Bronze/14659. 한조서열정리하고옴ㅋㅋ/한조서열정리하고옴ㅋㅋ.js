function solution(N, peaks) {
  let answer = 0;
  
  for(let i = 0; i < N; i++) {
    let count = 0;

    for(let j = i + 1; j < N; j++) {
      if(peaks[i] > peaks[j]) {
        count += 1;
      } else {
        break;
      }
    }

    answer = Math.max(answer, count);
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const peaks = input.shift().split(' ').map(Number);

console.log(solution(N, peaks));