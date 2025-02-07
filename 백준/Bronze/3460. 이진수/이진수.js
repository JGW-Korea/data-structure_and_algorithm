function solution(arr) {
  for(num of arr) {
    const binary = num.toString(2).split('').reverse().join('');
    let result = [];
    
    for(let j=0;j<binary.length;j++) {
      if(binary[j] === '1') result.push(j);
    }

    console.log(result.join(' '));
  }
}

const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(item => Number(item));

solution(input);