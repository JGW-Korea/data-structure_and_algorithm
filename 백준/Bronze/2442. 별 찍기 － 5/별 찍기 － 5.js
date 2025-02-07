const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const number = Number(input);
let result = '';

// i는 줄 바꿈을 위해 사용한다.
for(let i = 0; i < number; i++) {

  // j는 공백을 위해 사용한다.
  for(let j = number; j > i + 1; j--) {
    result += ' ';
  }

  // 오른쪽 기준으로 별을 찍어준다.
  result += '*'.repeat(i + 1);

  // 피라미드 모양을 만들기 위한 별을 찍어준다.
  for(let k = 0; k < i; k++) {
    result += '*';
  }

  result += '\n';
}

console.log(result);