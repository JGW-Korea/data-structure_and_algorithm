function solution(n, options) {
  let shortKeys = []; // 단축키 정보를 저장하는 배열
  let answer = "";

  // 모든 옵션에 대한 단축키 확인
  for (const option of options) {
    let currentOption = option.split(" "); // 현재 옵션의 단어가 2개 이상일 경우
    let flag = false;

    // 1. 하나의 옵션에 대해 첫 글자가 단축키로 지정되어 있지 않을 경우
    for (let i = 0; i < currentOption.length; i++) {
      if (!shortKeys.includes(currentOption[i][0].toLowerCase())) {
        shortKeys.push(currentOption[i][0].toLowerCase());
        answer += `${currentOption.slice(0, i).join(" ")} [${currentOption[i][0]}]${currentOption[i].slice(
          1
        )} ${currentOption.slice(i + 1).join(" ")}`.trim();
        flag = true;
        break;
      }
    }

    // 2번 조건 -> 왼쪽에서부터 차례대로 단축키로 지정 안 된 것이 있다면 단축키로 지정
    if (!flag) {
      outer: for (let i = 0; i < currentOption.length; i++) {
        for (let j = 1; j < currentOption[i].length; j++) {
          if (!shortKeys.includes(currentOption[i][j].toLowerCase())) {
            shortKeys.push(currentOption[i][j].toLowerCase());
            answer += `${currentOption.slice(0, i).join(" ")} ${currentOption[i].slice(0, j)}[${
              currentOption[i][j]
            }]${currentOption[i].slice(j + 1)} ${currentOption.slice(i + 1).join(" ")}`.trim();
            flag = true;
            break outer;
          }
        }
      }
    }

    // 3번 조건 -> 1, 2번 조건이 모두 안맞을 경우
    if (!flag) answer += currentOption.join(" ");

    answer += "\n";
  }

  return answer;
}

const fs = require("fs");
const [N, ...options] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(solution(Number(N), options));
