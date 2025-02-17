const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = Number(input);

let answer = 0;

for(let i=1;i<=num;i++) {
  let sum = 0;
  
  const candidateValue = i;
  const stringValue = candidateValue.toString();
  
  for(const value of stringValue) {
    sum += Number(value);
  }

  sum += candidateValue;
  
  if(sum === num) {
    answer = candidateValue;
    break;
  }
}

console.log(answer);