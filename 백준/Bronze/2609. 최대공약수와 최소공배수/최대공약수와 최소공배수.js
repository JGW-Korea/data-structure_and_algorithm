function solution(x, y) {
  let i = x;

  // 최대 공약수
  let j = y;

  while(i % j !== 0) {
    let n = i % j;

    if(n !== 0) {
      i = j;
      j = n;
    }
  }

  // 최대 공약수 & 최대 공배수 반환
  return [j, (x * y) / j].join('\n');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [x, y] = input.map(Number);

console.log(solution(x, y));