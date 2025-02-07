const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

function solution(n, m) {
  const answer = [];

  for(let i=1;i<=m;i++) {
    for(let j=0;j<i;j++) {
      answer.push(i);
    }
  }

  return answer
    .slice(n-1, m)
    .reduce((prev, curr) => prev + curr);
}

console.log(solution(n, m));