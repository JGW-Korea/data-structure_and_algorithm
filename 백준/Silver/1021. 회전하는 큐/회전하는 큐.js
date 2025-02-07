function solution(n, m, deleteNumber) {
  const queue = Array.from({length: n}, (_, idx) => idx + 1);

  let count = 0;

  for(let i = 0; i < m; i++) {
    while(queue[0] !== deleteNumber[i]) {

      if(queue.indexOf(deleteNumber[i]) <= Math.floor(queue.length / 2)) queue.push(queue.shift());
      else {
        queue.unshift(queue.pop());
      }
      
      count += 1;
    }

    queue.shift();
  }

  return count;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number); // 큐의 크기와 뽑아내려고 하는 수의 개수
const deleteNumber = input[1].split(' ').map(Number); // 지민이가 뽑아내려고 하는 수의 위치

console.log(solution(n, m, deleteNumber));