const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(N, K, str) {
  let answer = 0;

  // N 길이만큼 순회
  for (let i = 0; i < N; i++) {
    if (str[i] === "P") {
      // 현재 위치의 값이 사람일 경우
      const start = i - K;
      const end = i + K;

      // 현재 위치의 K 이하인 거리를 구한 뒤 이를 반복문으로 표현
      for (let j = start; j <= end; j++) {
        if (j !== i && str[j] === "H") {
          // K 이하의 거리의 값의 위치가 햄버거일 경우
          answer += 1;
          str[j] = 0;
          break;
        }
      }
    }
  }

  return answer;
}

const [N, K] = input[0].split(" ").map(Number);
const str = input[1].split("");

console.log(solution(N, K, str));
