function solution(n, phoneBook) {
  phoneBook.sort();

  for(let i = 1; i < n; i++) {
    const prev = phoneBook[i - 1];
    const curr = phoneBook[i];

    if(curr.startsWith(prev)) return 'NO';
  }

  return 'YES';
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input[0]);

let result = '';
let idx = 1;

for(let i = 0; i < tc; i++) {
  const n = input[idx++];
  const phoneBook = [];

  for(let j = 0; j < n; j++) {
    phoneBook.push(input[idx++]);
  }

  result += solution(n, phoneBook) + '\n';
}

console.log(result);