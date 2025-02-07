function solution(N, M, maze) {
  const visited = Array.from({length: N}, () => new Array(M).fill(0));

  function bfs(x, y) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const queue = [[x, y]];
    visited[x][y] = 1;

    while(queue.length) {
      const [currX, currY] = queue.shift();

      for(let i = 0; i < 4; i++) {
        const [nextX, nextY] = [currX + dx[i], currY + dy[i]];

        if(nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
        if(maze[nextX][nextY] && !visited[nextX][nextY]) {
          queue.push([nextX, nextY]);
          visited[nextX][nextY] = visited[currX][currY] + 1;
        }
      }
    }
  }

  bfs(0, 0);

  return visited[N - 1][M - 1];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const maze = [];

for(let i=1;i<=N;i++) {
  maze.push(input[i].split('').map(Number));
}

console.log(solution(N, M, maze));