function solution(money) {
  let answer = 0;

  // 잔돈이 남아 있는 경우만 반복
  while (money >= 0) {
    // 5원짜리 동전으로 동전이 모두 나눠질 경우
    if (money % 5 === 0) {
      answer += Math.floor(money / 5);
      money %= 5;
      break;
    }

    money -= 2;
    answer += 1;
  }

  return money === 0 ? answer : -1;
}

const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(solution(N));
