function solution(password) {
  const splitedPassword = password.split('');
  
  const stack1 = [];
  const stack2 = [];

  for(const input of splitedPassword) {
    if(input === '<' && stack1.length) stack2.push(stack1.pop());
    else if(input === '>' && stack2.length) stack1.push(stack2.pop());
    else if(input === '-' && stack1.length) stack1.pop();
    else if(!(['<', '>', '-'].includes(input))) stack1.push(input);
  }
  
  return stack1.join('') + stack2.reverse().join('');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input.shift());
const passwords = input;

for(let i = 0; i < tc; i++) {
  console.log(solution(passwords[i]));
}