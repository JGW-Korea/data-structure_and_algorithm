function solution(target, broken, brokenBtn) {
  if (target === 100) return 0; // 시작 채널이 목표 채널이면 0

  // 현재 누른 번호에 부서진 번호가 포함되었는지 여부 반환
  const isBroken = (num) => {
    return num
      .toString()
      .split("")
      .some((digit) => brokenBtn.includes(Number(digit)));
  };

  let answer = Math.abs(target - 100); // 100번에서 +, - 버튼만으로 이동하는 경우

  // 0 ~ 999999 까지 모든 채널을 탐색 (최대 6자리 숫자)
  for (let i = 0; i <= 999999; i++) {
    if (!isBroken(i)) {
      // 해당 번호를 숫자 버튼으로 누를 수 있는 경우
      const count = i.toString().length + Math.abs(i - target);
      answer = Math.min(answer, count);
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const target = Number(input[0]);
const broken = Number(input[1]);
const brokenBtn = broken === 0 ? [] : input[2].split(" ").map(Number);

console.log(solution(target, broken, brokenBtn));
