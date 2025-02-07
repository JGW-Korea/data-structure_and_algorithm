function solution(N, startPos, endPos) {
  // 체스판
  const visited = Array.from({length: N}, () => new Array(N).fill(0))  
  
  // 체스 나이트 이동 가능 경로
  const moves = [
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
  ];

  // BFS를 위한 큐 첫 인덱스는 시작 위치
  const queue = [[...startPos]];
  // 시작 위치 방문처리
  visited[startPos[0]][startPos[1]] = 1;

  while(queue.length) {
    // 현재 위치
    const [currentCol, currentRow] = queue.shift();

    // 이동 가능 경로만큼 반복
    for(const move of moves) {
      const [nextCol, nextRow] = [currentCol + move[0], currentRow + move[1]];

      // 체스판 범위를 넘어서면 생략
      if(nextCol < 0 || nextRow < 0 || nextCol >= N || nextRow >= N) continue;
      if(!visited[nextCol][nextRow]) { // 나이트 이동 가능 경로 파악
        queue.push([nextCol, nextRow]);
        visited[nextCol][nextRow] = visited[currentCol][currentRow] + 1;
      }
    }
  }

  // 시작 위치를 1로 표시했기 때문에 도착 지점 - 1
  return visited[endPos[0]][endPos[1]] - 1;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input.shift());

for(let i = 0; i < tc; i++) {
  const N = Number(input.shift());
  const start = input.shift().split(' ').map(Number);
  const end = input.shift().split(' ').map(Number);

  console.log(solution(N, start, end));
}