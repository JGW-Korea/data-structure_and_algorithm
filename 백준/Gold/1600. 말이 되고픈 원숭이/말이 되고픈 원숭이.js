function solution(K, W, H, graph) {
  function rangeCheck(x, y) {
    return x < 0 || y < 0 || x >= H || y >= W;
  }
  
  const visited = Array.from({length: H}, () => 
    Array.from({length: W}, () => Array(K + 1).fill(false))
  );
  visited[0][0][0] = true;

  const queue = [[0, 0, 0, 0]]; // x, y, 나이트 이동 횟수, 총 이동 횟수

  const knightMoves = [
    [-1, -2], [-2, -1], [-2, 1], [-1, 2],
    [1, -2], [2, -1], [1, 2], [2, 1]
  ]; 
  
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while(queue.length) {
    const [currentX, currentY, knightMovesUsed, totalMoves] = queue.shift();

    if(currentX === H - 1 && currentY === W - 1) {
      return totalMoves;
    }

    if(knightMovesUsed < K) {
      for(const [dxK, dyK] of knightMoves) {
        const nextX = currentX + dxK;
        const nextY = currentY + dyK;
        if(rangeCheck(nextX, nextY) || graph[nextX][nextY] === 1 || visited[nextX][nextY][knightMovesUsed + 1]) continue;
        visited[nextX][nextY][knightMovesUsed + 1] = true;
        queue.push([nextX, nextY, knightMovesUsed + 1, totalMoves + 1]);
      }
    }

    for(let i = 0; i < 4; i++) {
      const nextX = currentX + dx[i];
      const nextY = currentY + dy[i];
      if(rangeCheck(nextX, nextY) || graph[nextX][nextY] === 1 || visited[nextX][nextY][knightMovesUsed]) continue;
      visited[nextX][nextY][knightMovesUsed] = true;
      queue.push([nextX, nextY, knightMovesUsed, totalMoves + 1]);
    }
  }
  
  return -1;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const K = Number(input[0]);
const [W, H] = input[1].split(' ').map(Number);
const graph = input.slice(2).map(element => element.split(' ').map(Number));

console.log(solution(K, W, H, graph));
