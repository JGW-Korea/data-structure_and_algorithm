function solution(L, R, C, graph) {
  const visited = Array.from({ length: L }, () =>
    Array.from({ length: R }, () => new Array(C).fill(0))
  );

  const queue = [];

  // 시작 위치는 주어지지 않기 때문에 3중 반복문을 통해 찾아야 한다.
  // 하지만, 시작 위치는 단 하나이기 때문에 시작 위치를 찾으면 바로 반복문을 중단시켜야 한다.
  // 이를 위해 라벨(Label) 문법을 이용하면 찾고 바로 최상단 반복문을 중단시킬 수 있다.
  outer: for (let i = 0; i < L; i++) {
    for (let j = 0; j < R; j++) {
      for (let k = 0; k < C; k++) {
        if (graph[i][j][k] === "S") {
          visited[i][j][k] = 1;
          queue.push([i, j, k]);
          break outer;
        }
      }
    }
  }

  // 이동 가능한 위치는 (동, 서, 남, 북, 상, 하)
  const move = [
    [0, -1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, -1],
    [-1, 0, 0],
    [1, 0, 0],
  ];

  while (queue.length) {
    const [currentZ, currentX, currentY] = queue.shift();

    // 출구 지점으로 도착한 경우
    if (graph[currentZ][currentX][currentY] === "E") {
        return `Escaped in ${visited[currentZ][currentX][currentY] - 1} minute(s).`;
    }

    for (const [z, x, y] of move) {
      const [nextZ, nextX, nextY] = [currentZ + z, currentX + x, currentY + y];

      if (nextZ < 0 || nextX < 0 || nextY < 0 || nextZ >= L || nextX >= R ||nextY >= C) continue;
      if (!visited[nextZ][nextX][nextY] && [".", "E"].includes(graph[nextZ][nextX][nextY])) {
        visited[nextZ][nextX][nextY] = visited[currentZ][currentX][currentY] + 1;
        queue.push([nextZ, nextX, nextY]);
      }
    }
  }

  return "Trapped!";
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";
let idx = 0;

// 배열의 shift() 연산자는 큐가 아닌 배열의 앞의 원소를 빼오는 작업이기 때문에
// 뒤에 있는 원소들을 계속 앞으로 당겨오는 작업을 수행해야 한다.
// 이로 인해, 인덱스 접근을 통한 시간으로 최소화 시켜야 한다.
while (true) {
  const [L, R, C] = input[idx++].split(" ").map(Number);
  const graph = [];

  let temp = [];

  for (let i = 0; i < L + R * L; i++) {
    if (input[idx] === "") {
      graph.push(temp);
      idx++;
      temp = [];
      continue;
    }
    temp.push(input[idx++].split(""));
  }

  answer += solution(L, R, C, graph) + "\n";
  if (input[idx] === "0 0 0") break;
}

console.log(answer);
