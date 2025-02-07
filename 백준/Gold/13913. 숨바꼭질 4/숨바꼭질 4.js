function solution(N, K) {
  const path = new Array(100001).fill(0); // Valu에 N부터 K 까지의 이동할 수 있는 모든 이동 경로를 담는다.
  const visited = new Array(100001).fill(0); // index 위치의 방문 처리를 나타낸다.

  function bfs() {
    const queue = [[N, 0]]; // 큐에 현재 좌표와 시간(거리)을 담는다.

    // BFS 탐색 로직
    while(queue.length) {
      const [current, cost] = queue.shift();

      if(current === K) return cost;

      for(const [next, nextCost] of [
        [current - 1, cost + 1], // X - 1 까지의 좌표와 시간
        [current + 1, cost + 1], // X + 1 까지의 좌표와 시간
        [2 * current, cost + 1], // 2 * X 까지의 좌표와 시간
      ]) {

        // 이동할 수 있는 좌표가 배열을 벗어나는지 확인한다.
        if(next < 0 || next >= 100001) continue;
        if(!visited[next]) {
          path[next] = current; // 이동 가능한 다음 위치에 어디에서 이동했는지를 담는다.
          visited[next] = 1;
          queue.push([next, nextCost]); // 큐에 이동 가능한 좌표와 시간을 담는다.
        }
        
      }
    }
  }

  const time = bfs(); // 최단 시간이 얼마인지 반환받는다.
  const order = []; // N부터 K 까지의 최단 경로를 저장한다.
  order.push(K);
  
  let prev = path[K]; // K 정점에 저장된 이전 주소를 가져온다.

  for(let i = 0; i < time; i++) {
    order.push(prev); // 이전 주소를 최단 경로를 저장하는 배열에 삽입한다.
    prev = path[prev]; // 이전 주소를 갱신한다.
  }

  // 결과를 반환한다.
  return time + "\n" + order.reverse().join(' ');
}

const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(solution(N, K));