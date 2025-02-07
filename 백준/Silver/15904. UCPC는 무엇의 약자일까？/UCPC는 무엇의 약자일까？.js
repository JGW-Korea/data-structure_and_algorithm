function solution(string) {
  const queue = ['U', 'C', 'P', 'C'];

  for(const word of string) {
    if(word === queue[0]) {
      queue.shift();
    }
  }

  return queue.length ? 'I hate UCPC' : 'I love UCPC';
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(input));