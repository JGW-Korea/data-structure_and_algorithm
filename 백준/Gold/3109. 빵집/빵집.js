function solution(R, C, graph) {
  let visited = Array.from({ length: R }, () => new Array(C).fill(0));
  let answer = 0;

  // 이동 경로
  // x + (-1), y + 1 => 오른쪽 위 대각선
  // x + 0, y + 1 => 오른쪽
  // x + 1, y + 1 => 오른쪽 아래 대각선
  const move = [
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  function dfs(x, y) {
    visited[x][y] = 1;

    if (y === C - 1) return true; // 빵집까지 도달했다는 뜻

    // 총 3번을 이동할 수 있음
    for (let i = 0; i < 3; i++) {
      const [nextX, nextY] = [x + move[i][0], y + move[i][1]];

      if (nextX < 0 || nextY < 0 || nextX >= R || nextY >= C) continue;
      if (!visited[nextX][nextY] && graph[nextX][nextY] !== "x") {
        if (dfs(nextX, nextY)) return true; // 마지막까지 true를 전달해줘야 됨
      }
    }

    return false; // 빵집까지 도달하지 못했다는 뜻
  }

  // 가스관과 빵집을 연결하는 모든 파이프라인은 (x, 0)에서 시작
  for (let x = 0; x < R; x++) {
    if (dfs(x, 0)) {
      answer += 1;
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((element) => element.split(""));

console.log(solution(R, C, graph));
