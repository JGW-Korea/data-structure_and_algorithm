function solution(n, candidates) {
  // 매수해야 하는 사람의 최솟값
  let count = 0;

  while(true) {

    let maxIdx = 1;
    
    for(let i = maxIdx + 1; i < candidates.length; i++) {
      if(candidates[maxIdx] < candidates[i]) {
        maxIdx = i;
      }
    }

    if(candidates[0] <= candidates[maxIdx]) {
      candidates[maxIdx] -= 1;
      candidates[0] += 1;
      count += 1;
    }

    const max = candidates.filter((element) => element === Math.max(...candidates));

    if(max.length === 1 && max[0] === candidates[0]) {
      return count;
    }
    
  }
  
}

const fs = require('fs');
const [n, ...candidates] = 
  fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(solution(n, candidates));