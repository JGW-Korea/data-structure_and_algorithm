class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  dequeue() {
    if(this.empty()) return;
    
    const returnValue = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return returnValue;
  }

  empty() {
    return this.length ? false : true;
  }
}

function solution(n, m, graph) {
  // 방문 표시를 위한 배열을 생성한다. 단, 3차원 배열로 생성한다.
  // 왜냐하면, 2차원까지는 N * M 크기를 나타내고 3차원의 index는 벽을 부순 개수, value는 시작 지점부터 이동한 거리를 나타낸다.
  const visited = Array.from({length: n}, () => Array.from({length: m}, () => new Array(2).fill(0)));
  visited[0][0][0] = visited[0][0][1] = 1; // 시작 지점에 1로 방문처리

  const queue = new QueueLinkedList();
  queue.enqueue([0, 0, 0]); // 시작 지점과 벽을 부수지 않은 상태를 나타내기 위해 [0, 0, 0]를 시작 지점으로 나타낸다.

  const dx = [1, 0, -1, 0]; 
  const dy = [0, -1, 0, 1];
  
  while(!queue.empty()) {
    const [currentX, currentY, broken] = queue.dequeue();

    // 도착 지점에 도달하면, 해당 도착 지점의 값을 반환하고 함수를 종료
    if(currentX === n - 1 && currentY === m - 1) return visited[currentX][currentY][broken];
    
    for(let i = 0; i < 4; i++) {
      const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];
      
      if(nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue; // 주어진 크기의 범위를 이탈하면 생략
      // 지도의 다음 지점이 벽이 아니면서, 방문하지 않았으면 해당 지점에서 거리 갱신
      if(graph[nextX][nextY] === 0 && visited[nextX][nextY][broken] === 0) {
        visited[nextX][nextY][broken] = visited[currentX][currentY][broken] + 1;
        queue.enqueue([nextX, nextY, broken]); // 현재 벽을 부순 개수와 이동 가능한 거리를 큐에 삽입한다.
      }

      // 벽을 만났지만, 아직 어떠한 벽을 부수지 않은 상태이면서 갈 수 있으면 거리 갱신
      if(!broken && graph[nextX][nextY] === 1 && visited[nextX][nextY][1] === 0) {
        visited[nextX][nextY][1] = visited[currentX][currentY][broken] + 1;
        queue.enqueue([nextX, nextY, 1]); // 이동 가능 구간과 벽을 부순 개수를 큐에 삽입한다.
      }
    }
  }

  return -1; // BFS 도착 지점 도달 조건에 도달하지 못하면, 도착 지점에 못 간걸로 간주하고 -1를 반환
} 

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from({length: n}, () => []);

for(let i = 1; i <= n; i++) {
  graph[i - 1] = input[i].split('').map(Number);
}

console.log(solution(n, m, graph));