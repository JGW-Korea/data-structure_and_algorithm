function solution(statements) {
  const dequeue = []; // N이 1만 밖에 되지 않기 때문에 배열로 생성한다.
  let result = '';

  // 주어진 실행문을 반복한다.
  statements.forEach((statement) => {
    switch(statement[0]) {
      case 'push_front': // 덱의 앞에 요소를 추가한다.
        dequeue.unshift(Number(statement[1]));
        break;
       
      case 'push_back': // 덱의 뒤에 요소를 추가한다.
        dequeue.push(Number(statement[1]));
        break;
      
      case 'pop_front': // 덱의 앞 요소를 삭제한다.
        result += (dequeue.shift() || -1) + '\n';
        break;
      
      case 'pop_back': // 덱의  요소를 추가한다.
        result += (dequeue.pop() || -1) + '\n';
        break;
      
      case 'size': // 덱의 길이를 반환한다.
        result += dequeue.length + '\n';
        break;
      
      case 'empty': // 덱이 비어있는지 체크한다.
        result += (dequeue.length ? 0 : 1) + '\n';
        break;
      
      case 'front': // 덱의 앞 요소를 확인한다.
        result += (dequeue[0] || -1) + '\n';
        break;
      
      default: // 덱의 뒤 요소를 추가한다.
        result += (dequeue[dequeue.length - 1] || -1) + '\n';
    }
  });

  return result;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const statements = [];

for(let i = 1; i <= n; i++) {
  statements[i - 1] = input[i].split(' ');
}

console.log(solution(statements));