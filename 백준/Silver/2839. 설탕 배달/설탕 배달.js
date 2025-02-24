function solution(N) {
  let answer = 0;

  while (N >= 0) {
    if (N % 5 === 0) {
      answer += Math.floor(N / 5);
      N %= 5;

      break;
    }

    N -= 3;
    answer += 1;
  }

  // 설탕 봉지가 딱 0으로 나눠질 경우 나눌 수 있는 설탕 봉지 개수를 반환 아닐 경우 -1를 반환
  return N === 0 ? answer : -1;
}

const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString());

console.log(solution(N));
