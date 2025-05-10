function solution(target, broken, brokenBtn) {
  if (target === 100) return 0; // 이동하고 싶은 채널이 현재 채널일 경우

  function isBroken(num) {
    return num
      .toString()
      .split("")
      .some((btnNumber) => brokenBtn.includes(Number(btnNumber)));
  }

  let answer = Math.abs(100 - target); // +, - 기호만 눌러서 도달한 값

  // 0 ~ 999,999 까지 모든 번호에 대해서 최소값을 구함
  for (let pressBtn = 0; pressBtn <= 999999; pressBtn++) {
    if (!isBroken(pressBtn)) {
      const press = pressBtn.toString().length + Math.abs(pressBtn - target);
      answer = Math.min(answer, press);
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const target = Number(input[0]);
const broken = Number(input[1]);
// 부서진 버튼이 있을 수도 있고 없을 수도 있음
const brokenBtn = broken === 0 ? [] : input[2].split(" ").map(Number);

console.log(solution(target, broken, brokenBtn));
