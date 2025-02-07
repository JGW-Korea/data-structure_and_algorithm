function solution(n, numbers) {
  const stack = [];
  
  let number = 1;
  let answer = '';
  
  for(let i = 0; i < n; i++) {

    // number가 현재 주어진 수보다 작으면, stack에 number을 추가한다.
    while(number <= numbers[i]) {
      stack.push(number++);
      answer += '+' + '\n';
    }

    // stack의 최상단 원소가 주어진 수와 같으면, pop을 실행한다.
    if(stack[stack.length - 1] === numbers[i]) {
      stack.pop();
      answer += '-' + '\n';
    } else { 
      return 'NO' // 같지 않으면, 함수를 종료 시킨다.
    }
    
  }

  return answer;
}

const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(solution(N, input))