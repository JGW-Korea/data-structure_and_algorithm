function solution(x) {
  if (x < 100) return x; // 100 이하의 수는 그 수만으로도 한 수에 속한다.

  let answer = 99; // 100 이하의 수는 자체만으로 한수이기 때문에 answer의 기본값을 99로 초기화한다.

  // 한수 구하기 로직(100 이상의 수들의 차이가 일정한지만 구한다.)
  for (let i = 100; i < x + 1; i++) {
    const numbers = i.toString();

    if (Number(numbers[0]) - Number(numbers[1]) === Number(numbers[1]) - Number(numbers[2])) {
      answer += 1;
    }
  }

  return answer;
}

const fs = require("fs");
const x = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(solution(x));
