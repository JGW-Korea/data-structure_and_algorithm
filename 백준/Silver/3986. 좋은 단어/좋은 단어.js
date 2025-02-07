function solution(words) {
  const stack = [];
  
  for(const word of words) {
    // 스택에 값이 비어있거나, 스택 Top과 값이 일치하지 않으면, 단어를 추가한다.
    if(stack.length === 0 || stack[stack.length - 1] !== word) stack.push(word);
    else { // 스택에 값이 비어있지 않거나, 스택 Top과 값이 일치하면, 스택에 원소를 삭제한다.
      stack.pop();
    }
  }

  // 스택에 원소가 남아있지 않으면, 1을 반환한다.
  return stack.length ? 0 : 1;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let count = 0;

for(let i = 1; i <= n; i++) {
  count += solution(input[i]);
}

console.log(count);