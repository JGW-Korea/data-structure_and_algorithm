function solution(x) {
  if (x < 10) return x; // 1 ~ 9까지는 그 수 자체만으로 한수이다.

  let answer = 9; // 1 ~ 9까지는 그 수 자체만으로 한수이기 때문에 answer의 기본값을 9로 초기화한다.

  // 한 수 구하기
  for (let i = 10; i < x + 1; i++) {
    let numbers = i.toString().split("").map(Number);

    let flag = false;
    let prev = numbers[0] - numbers[1]; // 일의 자리와 십의 자리의 차이를 먼저 구한다.

    // 십의 자리부터 뒤의 자리까지의 차이를 구한다.
    for (let j = 1; j < numbers.length - 1; j++) {
      const current = numbers[j] - numbers[j + 1];

      // 이전 차이와 현재 차이의 값이 동일하지 않으면 차이가 일정한 수열이 아니라는 의미
      if (prev !== current) {
        flag = true;
        break;
      }
    }

    // 차이가 일정할 경우 한수의 개수를 1씩 증가한다.
    if (!flag) {
      answer += 1;
    }
  }

  return answer;
}

const fs = require("fs");
const x = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(solution(x));
