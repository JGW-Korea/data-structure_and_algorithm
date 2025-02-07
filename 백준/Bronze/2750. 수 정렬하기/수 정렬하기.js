function solution(N, data) {
  data.sort((a, b) => a - b);

  return data.join('\n');
}

const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(solution(N, input));