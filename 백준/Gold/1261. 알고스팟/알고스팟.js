const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((element) => element.split("").map(Number));

function solution(N, M, graph) {
  const deque = [];
  deque.push([0, 0, 0]);
  
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );
  visited[0][0] = true;
  
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  
  while (deque.length) {
    const [currentX, currentY, currentCost] = deque.shift();
    
    if (currentX === N - 1 && currentY === M - 1) return currentCost;
    
    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];
      
      if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
      if (visited[nextX][nextY]) continue;
      
      visited[nextX][nextY] = true;
      
      if (graph[nextX][nextY] === 1) {
        deque.push([nextX, nextY, currentCost + 1]);
      } else {
        deque.unshift([nextX, nextY, currentCost]);
      }
    }
  }
}

console.log(solution(N, M, graph));
