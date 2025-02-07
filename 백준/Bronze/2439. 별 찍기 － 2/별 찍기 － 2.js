const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const number = Number(input);
let result = '';

// i는 줄 바꿈으로 사용한다.
for(let i = 0; i < number; i++) {
  // j는 공백을 추가하는데 사용한다.
  for(let j = number - 1; j > i; j--) {
    result += ' ';
  }

  // String 객체 인스턴스 메서드 repeat를 사용해서 별을 찍는다.
  result += '*'.repeat(i + 1) + '\n';
}

console.log(result);