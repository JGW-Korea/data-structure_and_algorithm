function solution(n, k) {
  let answer = [];

  for(let i=1;i<=n;i++) {
    if(n % i === 0) answer.push(i);
  }
  
  return answer[k-1] || 0;
}

const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(item => Number(item));

console.log(solution(n, k));