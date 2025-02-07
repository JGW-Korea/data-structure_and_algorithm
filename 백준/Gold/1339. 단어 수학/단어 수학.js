function solution(n, list) {

  let hashMap = new Map();
  let count = 0;
  let answer = 0;
  let current = 9;

  for(let i=0;i<n;i++) {

    for(let j=0;j<list[i].length;j++) {
      count = Math.pow(10, list[i].length - (j + 1));
      hashMap.set(list[i][j], (hashMap.get(list[i][j]) || 0) + count)
    }
    
  }

  const sortMap = new Map([...hashMap.entries()].sort((a, b) => b[1] - a[1]))

  for(let [_, alphabetValue] of sortMap) {
    answer += current * alphabetValue;
    current -= 1;
  }

  console.log(answer)
  
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let list = input.slice(1);

solution(n, list);