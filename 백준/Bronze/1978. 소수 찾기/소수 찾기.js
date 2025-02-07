const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.split(' ').map(Number).filter((item) => item !== 1);

function solution(arr) {
  let answer = 0;
  
  for(let i=0;i<arr.length;i++) {
    const prime = [];

    for(let j=1;j<=arr[i];j++) {
      if(arr[i] % j === 0) prime.push(j);
    }
    
    prime.length === 2 ? answer++ : null
  }

  return answer;
}

console.log(solution(arr));