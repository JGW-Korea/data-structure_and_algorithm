function check(current, goal) {
  for (let i = 0; i < 4; i++) {
    console.log(current[i], goal[i]);
    if (current[i] !== goal[i]) return false;
  }

  return true;
}

function solution(S, P, pwd, targetCount) {
  const currentCount = [0, 0, 0, 0]; // 현재 부분 문자열의 패스워드 개수

  let answer = 0;
  let start = 0; // 윈도우의 시작 구간
  let end = P - 1; // 윈도우의 마지막 구간

  // 렉시컬 스코프 개념을 이용하여 상위 스코프의 비밀번호와 부분 문자열의 패스워드 개수를 저장하는 변수에 접근할 수 있게 만듬
  function compare(start, end) {
    for (let i = start; i < end; i++) {
      switch (pwd[i]) {
        case "A":
          currentCount[0] += 1;
          break;
        case "C":
          currentCount[1] += 1;
          break;
        case "G":
          currentCount[2] += 1;
          break;
        case "T":
          currentCount[3] += 1;
          break;
      }
    }
  }

  // 첫 번째 비교
  compare(start, end);
  if (check(currentCount, targetCount)) answer += 1;

  while (end < S) {}
}

const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const [S, P] = input[0].split(" ").map(Number);
const pwd = input[1].split("");
const counted = input[2].split(" ").map(Number);

console.log(solution(S, P, pwd, counted));
