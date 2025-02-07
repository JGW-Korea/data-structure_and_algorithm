function solution(parentheses) {
  const stack = [];

  let stick = 0; // 현재 막대기의 수
  let answer = 0; // 쇠막대기 조각의 총 개수

  for(const bracket of parentheses) {
    if(bracket === '(') {
      stick += 1;
      stack.push(bracket);
    } else {
      // 스택의 Top이 '('이고, bracket이 ')'이면 괄호의 쌍이 성립된다. (레이저)
      if(stack[stack.length - 1] === '(') {
        stick -= 1;
        stack.push(bracket);
        answer += stick;
      } else { // 스택의 Top이 '(' 아닐 경우, 막대기의 끝을 알리는 ')' 닫는 괄호다.
        stick -= 1; 
        stack.push(bracket);
        answer += 1;
      }
      
    }
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(input));