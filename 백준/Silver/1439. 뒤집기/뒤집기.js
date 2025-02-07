// str: 주어진 문자열 / reverseNumber: 뒤집을 숫자 0 또는 1
function reverseCount(str, reverseNumber) {
  let count = 0;

  for(let i = 0; i < str.length; i++) {
    if(str[i] === reverseNumber) {
      if(str[i + 1] !== reverseNumber) {
        count += 1;
      }
    }
  }
  
  return count;
}

function solution(str) {
  let zeroCount = reverseCount(str, '0');
  let oneCount = reverseCount(str, '1');

  return Math.min(zeroCount, oneCount);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(input));