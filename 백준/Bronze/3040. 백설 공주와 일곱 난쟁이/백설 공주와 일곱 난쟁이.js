function solution(heights) {
  const sum = heights.reduce((prev, curr) => prev + curr);

  for(let i = 0; i < heights.length; i++) {
    for(let j = 1; j < heights.length; j++) {
      if(sum - (heights[i] + heights[j]) === 100) {
        return heights
          .filter(element => element !== heights[i] && element !== heights[j])
          .join('\n');
      }
    }
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(solution(input));