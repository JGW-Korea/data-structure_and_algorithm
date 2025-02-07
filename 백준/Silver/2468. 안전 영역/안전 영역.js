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
    if(this.length === 0) return;

    const retrunValue = this.head.value;
    
    this.head = this.head.next;
    this.length -= 1;

    return retrunValue;
  }

  isEmpty() {
    return this.length === 0;
  }
}

function solution(n, map) {
  let lainMaxNumber = 0; // 장마철에 내릴 수 있는 최대 비의 양
  
  map.forEach((element) => lainMaxNumber = Math.max(lainMaxNumber, ...element));

  let answer = 0; // 장마철에 물에 잠기지 않는 안전한 영역의 최대 크기

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for(let lain = 0; lain <= lainMaxNumber; lain++) { // 비가 잠기는 영역 구하기
    const visited = Array.from({length: n}, () => new Array(n).fill(0));
    let width = 0; // 영역 크기

    // 영역 구하기
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        if(!visited[i][j] && map[i][j] > lain) { // 아직 방문하지 않았으면서 현재 비의 양보다 높은 곳일 경우
          const queue = new QueueLinkedList();
          queue.enqueue([i, j]); // 현재 위치을 큐에 삽입한다.
          
          visited[i][j] = 1; // 현재 위치을 방문처리 한다.
          width += 1; // 영역을 1 증가한다.
          
          while(!queue.isEmpty()) {
            const [currentX, currentY] = queue.dequeue();

            for(let i = 0; i < 4; i++) {
              const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

              if(nextX < 0 || nextY < 0 || nextX >= n || nextY >= n) continue;
              if(!visited[nextX][nextY] && map[nextX][nextY] > lain) {
                visited[nextX][nextY] = 1;
                queue.enqueue([nextX, nextY]);
              }
            }
          }
        }
      }
    }

    answer = Math.max(answer, width);
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const graph = Array.from({ length: n }, () => []);

for(let i = 1; i < n + 1; i++) {
  graph[i - 1] = input[i].split(' ').map(Number);
}

console.log(solution(n, graph));