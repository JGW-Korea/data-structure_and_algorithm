function solution(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const count = new Array(alphabet.length).fill(0);

  // 가장 많이 사용된 알파벳 카운팅
  for(const word of str) {
    count[alphabet.indexOf(word)] += 1;
  }

  // 가장 많이 사용된 알파벳 개수
  const max = Math.max(...count);
  const result = [];

  // 여러 개 존재하는 경우
  for(let i = 0; i < count.length; i++) {
    if(count[i] === max) {
      result.push(i);
    }
  }

  return result.length >= 2 ? '?' : alphabet[result[0]].toUpperCase();
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(input.toLowerCase()));