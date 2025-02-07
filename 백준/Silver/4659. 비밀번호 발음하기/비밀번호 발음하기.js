function solution(string) {
  // 각 조건 check 여부
  let check1 = false;
  let check2 = true;
  let check3 = true;

  // 모음, 자음 3개 연속 여부 카운팅
  let vowelCount = 0;
  let consonantCount = 0;

  // 모음
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  
  for(let i = 0; i < string.length; i++) {

    // 1. 모음 포함 여부
    if(vowel.includes(string[i])) {
      check1 = true;
    }

    // 2. 모음, 자음 3개 연속으로 오는지 파악
    if(vowel.includes(string[i])) {
      vowelCount += 1;
      consonantCount = 0;
    } else {
      vowelCount = 0;
      consonantCount += 1;
    }

    if(vowelCount === 3 || consonantCount === 3) {
      check2 = false;
    }

    // 3. 같은 글자가 연속적으로 2번 오는지 파악 여부 ( 단, ee / oo는 가능 )
    if(string[i] === string[i + 1]) {
      if(string[i] === 'e' || string[i] === 'o') continue;
      check3 = false;
    }
    
  }

  // 조건 3개 모두 true 일 경우 비밀번호 높은 품질 조건 통과
  if(check1 && check2 && check3) {
    return 'is acceptable.';
  } else { // 하나라도 false일 경우 조건 위배
    return 'is not acceptable.';
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length - 1; i++) {
  console.log(`<${input[i]}>`, solution(input[i]));
}