function solution(n, loss) {
  let answer = 0;

  loss.sort((a, b) => a > b ? 1 : -1);
  
  if(loss.length % 2 === 1) {
    answer = loss.pop();
    n -= 1;
  }

  for(let i = 0; i < Math.floor(n / 2); i++) {
    const sum = loss[i] + loss[(loss.length - 1) - i];
    answer = sum > answer ? sum : answer;
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const loss = input.shift().split(' ').map(BigInt);

console.log(solution(n, loss).toString());