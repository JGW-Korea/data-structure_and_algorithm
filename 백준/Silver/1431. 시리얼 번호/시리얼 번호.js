function solution(serial) {
  serial.sort((a, b) => {
    if (a.length !== b.length) { // 1. 길이로 비교
      return a.length - b.length;
    } else { // 2. 길이가 같을 경우
      const sumDigits = (str) => {
        return str.split('').reduce((sum, char) => {
          return isNaN(char) ? sum : sum + Number(char);
        }, 0);
      };

      const sumA = sumDigits(a);
      const sumB = sumDigits(b);

      if (sumA !== sumB) { // 3. 숫자의 합으로 비교
        return sumA - sumB;
      } else { // 4. 사전순 비교
        return a.localeCompare(b);
      }
    }
  });

  return serial.join('\n');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const serialNumbers = input.slice(1);

console.log(solution(serialNumbers));
