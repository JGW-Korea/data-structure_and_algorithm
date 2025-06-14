const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(N, K, str) {
  const visited = new Array(N).fill(0); // 한 번 먹은 햄버거는 두 번은 못 먹음
  let answer = 0;

  // 총 N 길이만큼 순회한다.
  for (let i = 0; i < N; i++) {
    if (str[i] === "H") continue; // 현재 값의 위치의 값이 '햄버거'일 경우에는 다음 반복으로 넘어간다.

    // 현재 값의 위치의 값이 사람일 경우
    let flag = false;

    // 사람 이전 거리에 따른 햄버거 위치
    for (let prev = i - K; prev < i; prev++) {
      if (prev < 0) continue;
      if (str[prev] === "H" && !visited[prev]) {
        visited[prev] = 1;
        answer += 1;
        flag = true;
        break;
      }
    }

    // 사람 이후 거리에 따른 햄버거 위치
    if (!flag) {
      for (let next = i + 1; next <= i + K; next++) {
        if (next >= N) continue;
        if (str[next] === "H" && !visited[next]) {
          visited[next] = 1;
          answer += 1;
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
