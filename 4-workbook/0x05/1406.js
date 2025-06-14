const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(N, M, commands) {
  const stackLeft = N.split(""); // 커서 왼쪽편에 있는 문자열
  const stackRight = []; // 커서 오른쪽에 있는 문자열

  // 모든 명령어를 수행
  for (let i = 0; i < M; i++) {
    switch (commands[i][0]) {
      case "L": // 커서를 왼쪽으로 한 칸 옮김
        if (stackLeft.length) stackRight.push(stackLeft.pop());
        break;
      case "D": // 커서를 오른쪽으로 한 칸 옮김
        if (stackRight.length) stackLeft.push(stackRight.pop());
        break;
      case "B": // 커서 왼쪽에 있는 문자를 삭제
        if (stackLeft.length) stackLeft.pop();
        break;
      case "P": // $라는 문자를 커서 왼쪽에 추가
        stackLeft.push(commands[i][1]);
        break;
    }
  }

  // 커서 왼쪽 + 커서 오른쪽 편에 있는 문자열을 합친 후 반환
  return stackLeft.join("") + stackRight.reverse().join("");
}

const N = input[0];
const [M, ...commands] = [Number(input[1]), ...input.slice(2).map((el) => el.split(" "))];

console.log(solution(N, M, commands));
