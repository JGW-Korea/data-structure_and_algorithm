function solution(switchBtnStatus, students, studentsInfo) {
  switchBtnStatus.unshift(0); // 편의를 위해 앞에 값을 추가한다.

  for (const [gender, btnNumber] of studentsInfo) {
    if (gender === 1) {
      // 성별이 남자일 경우
      for (let btn = btnNumber; btn < switchBtnStatus.length; btn += btnNumber) {
        switchBtnStatus[btn] = switchBtnStatus[btn] === 1 ? 0 : 1;
      }
    } else {
      // 성별이 여자일 경우
      let left = btnNumber;
      let right = btnNumber;

      while (left >= 1 && right < switchBtnStatus.length && switchBtnStatus[left] === switchBtnStatus[right]) {
        left -= 1;
        right += 1;
      }

      left += 1;
      right -= 1;

      for (let i = left; i <= right; i++) {
        switchBtnStatus[i] = switchBtnStatus[i] === 1 ? 0 : 1;
      }
    }
  }

  switchBtnStatus.shift(); // 편의를 위해 값을 추가한 값을 삭제한다.

  let result = "";
  for (let i = 0; i < switchBtnStatus.length; i++) {
    result += switchBtnStatus[i] + " ";
    if ((i + 1) % 20 === 0) {
      result += "\n";
    }
  }

  return result.trim(); // 스위치 상태를 반환한다.
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const switchBtnNumber = Number(input.shift());
const switchBtnStatus = input.shift().split(" ").map(Number);

const students = Number(input.shift());
const studentsInfo = input.map((element) => element.split(" ").map(Number));

console.log(solution(switchBtnStatus, students, studentsInfo));
