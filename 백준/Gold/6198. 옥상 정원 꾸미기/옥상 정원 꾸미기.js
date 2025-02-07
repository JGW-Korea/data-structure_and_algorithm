function solution(N, heights) {
  let answer = 0;
  let idx = 0;
  let stack = [];

  while(N--) {
    let currentHeight = heights[idx++];
    
    while(stack.length && stack[stack.length - 1] <= currentHeight) {
      stack.pop();
    }

    answer += stack.length;
    stack.push(currentHeight);
  }

  return answer;
}

const fs = require('fs');
const [N, ...heights] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(solution(N, heights));