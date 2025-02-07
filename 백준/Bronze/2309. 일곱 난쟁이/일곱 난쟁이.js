function solution(arr) {

  const sum = arr.reduce((prev, curr) => prev + curr);
  let answer;
  
  for(let i=0;i<arr.length;i++) {
    for(let j=i+1;j<arr.length;j++) {
      if(sum - (arr[i] + arr[j]) === 100) {
        answer = arr
          .filter((item) => item !== arr[i] && item !== arr[j])
          .sort((a, b) => a - b);
      }
    }
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.map(Number);

console.log((solution(arr)).join('\n'))