const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(n, states, student, change) {
  states.unshift(0);

  // 매개변수로 전달받은 참조 자료형 내부의 값을 바꾸면 불변성을 위반해서 안좋은 코드로 분류될 수 있지만,
  // 프로젝트를 다루는 코드가 아니다 보니 바꿔도 별다른 부수효과(Side-Effect)가 발생하지 않아서 괜찮다.
  for (const [gender, btnNumber] of change) {
    // 현재 학생의 성별이 남자일 경우 -> 스위치 스왑(Swap)
    if (gender === 1) {
      for (let i = btnNumber; i < states.length; i += btnNumber) {
        states[i] = states[i] === 0 ? 1 : 0;
      }
    }

    // 학생의 성별이 여자일 경우 -> 스위치 좌우 대칭일 경우 스왑, 아닐 경우 현재 번호만 바꿈
    else {
      let left = btnNumber - 1;
      let right = btnNumber + 1;

      // 좌우가 배열의 범위를 벗어나지 않으면서 일치할 경우에만 좌우를 늘리거나 좁혀 나간다.
      while (left >= 1 && right < states.length && states[left] === states[right]) {
        left -= 1;
        right += 1;
      }

      for (let i = left + 1; i <= right - 1; i++) {
        states[i] = states[i] === 0 ? 1 : 0;
      }
    }
  }

  states.shift();

  // 스위치 출력은 한 줄에 20개씩만 출력한다.
  let answer = "";
  for (let i = 0; i < states.length; i++) {
    answer += states[i] + " ";
    if (!((i + 1) % 20)) {
      answer += "\n";
    }
  }

  return answer;
}

// 스위치의 상태는 1과 0으로 표시한다.
// -> 1은 켜져 있는 상태를, 0은 꺼져 있는 상태를 나타낸다.
const N = Number(input[0]); // 스위치 수
const switchStates = input[1].split(" ").map(Number);

// 학생 몇 명을 뽑아서, 스위치를 조작하게 된다.
// - 남학생: 스위치 번호가 자기가 받은 수의 배수이면, 그 스위치의 상태를 바꾼다. -> 즉, 스위치가 켜져 있으면 끄고, 꺼져 있으면 켠다.
// - 여학생: 자기가 받은 수와 같은 번호가 붙은 스위치를 중심으로 좌우가 대칭이면서 가장 많은 스위치를 포함하는 구간을 찾아서, 그 구간에 속한 스위치의 상태를 모두 바꾼다.
//    -> 좌우 대칭이 같으면 스위치를 모두 바꾸고, 대칭이 같지 않으면 자기가 받은 수의 번호의 스위치만 상태를 변경한다.
const student = Number(input[2]);
const changeSwitchState = input.slice(3).map((element) => element.split(" ").map(Number));

console.log(solution(N, switchStates, student, changeSwitchState));
