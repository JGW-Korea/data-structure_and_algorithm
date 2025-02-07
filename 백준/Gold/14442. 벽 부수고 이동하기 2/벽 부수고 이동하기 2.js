class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    
    if(this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length += 1;
  }

  dequeue() {
    const returnValue = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return returnValue;
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, K] = input.shift().split(' ').map(Number);
const map = input.map(element => element.split('').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// 방문처리를 위한 배열을 N x M x K 크기인 3차원 배열로 만든다.
// N -> 배열의 가로 길이
// M -> 배열의 세로 길이
// K -> index: 벽을 뿌순 횟수, value: A 에서 B 까지의 거리
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => Array(K + 1).fill(0)));

// 큐 자료구조를 배열이 아닌 연결 리스트를 사용한다.
const queue = new LinkedQueue();

visited[0][0][0] = 1;
queue.enqueue([0, 0, 0, 1]);

let answer = Number.MAX_SAFE_INTEGER;

// BFS 탐색 로직
while(queue.length) {
  const [currentX, currentY, count, dist] = queue.dequeue();

  // (N, M) 위치에 도달할 경우에는 answer 값을 수정한다.
  if(currentX === N - 1 && currentY === M - 1) answer = Math.min(answer, dist);

  for(let i = 0; i < 4; i++) {
    const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

    if(nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;

    // 다음 경로에 벽이 있으면서 아직 벽을 K개 만큼 부수지 않은 경우
    if(map[nextX][nextY] && !visited[nextX][nextY][count + 1] && count < K) {
      visited[nextX][nextY][count + 1] = 1;
      queue.enqueue([nextX, nextY, count + 1, dist + 1]);
    }

    // 다음 경로에 벽이 없는 경우
    else if(!map[nextX][nextY] && !visited[nextX][nextY][count]) {
      visited[nextX][nextY][count] = 1;
      queue.enqueue([nextX, nextY, count, dist + 1]);
    }
  }
}

// answer가 Number의 최대 표현 범위와 같을 경우 -1 출력 아닐 경우 answer 출력
answer === Number.MAX_SAFE_INTEGER ? console.log(-1) : console.log(answer);