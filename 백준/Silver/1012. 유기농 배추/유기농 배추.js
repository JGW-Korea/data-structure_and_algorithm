function solution(m, n, graph) {
  // 배추 영역을 위한 방문 처리
  const visited = Array.from({length: n}, () => new Array(m).fill(0));
  let worms = 0; // 최소 지렁이 마리 수

  function dfs(x, y) {
    const dx = [1, 0, -1, 0]; // 열 이동 가능 경로
    const dy = [0, -1, 0, 1]; // 행 이동 가능 경로

    // 현재 좌표에 방문처리를 해준다.
    visited[x][y] = 1;

    for(let i = 0; i < 4; i++) {
      const [nextX, nextY] = [x + dx[i], y + dy[i]];

      // 이동 가능한 좌표가 배열 범위를 벗어나면 생략한다.
      if(nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue;
      if(graph[nextX][nextY] === 1 && !visited[nextX][nextY]) {
        dfs(nextX, nextY);
      }
    }
  }
  
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(graph[i][j] === 1 && !visited[i][j]) { // 배추 영역이자, 방문하지 않은 곳을 찾는다.
        dfs(i, j); // dfs를 통해 모든 배추 영역을 방문 시킨다.
        worms += 1; // dfs에서 탈출하면, 지렁이를 1마리 증가시킨다.
      }
    }
  }
  
  return worms;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input.shift());
let result = '';

for(let i = 1; i <= tc; i++) {
  const [m, n, k] = input.shift().split(' ').map(Number);
  const graph = Array.from({length: n}, () => new Array(m).fill(0));

  for(let j = 0; j < k; j++) {
    const [x, y] = input.shift().split(' ');
    graph[y][x] = 1;
  }

  result += solution(m, n, graph) + '\n';
}

console.log(result);