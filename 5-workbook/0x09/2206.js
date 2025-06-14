const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 일반 배열로 풀게 되면 시간 초과가 나기 때문에 삭제와 추가가 O(1) 시간이 걸리는 연결 리스트 방식 큐를 사용
class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 연결 리스트 큐 삽입 메서드
  enqueue(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  // 연결 리스트 큐 삭제 메서드
  dequeue() {
    if (this.isEmpty()) return;

    const returnValue = this.head.value;

    this.head = this.head.next;
    this.length -= 1;

    return returnValue;
  }

  isEmpty() {
    return this.length === 0;
  }
}

function solution(n, m, graph) {
  // N x (M x 2) 크기의 3차원 배열을 생성한다.
  // -> 3차원 배열로 만드는 이유 : [0, 0]의 각 index를 벽을 부순 회수로 동작하기 위해서
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => [0, 0]));
  visited[0][0][0] = visited[0][0][1] = 1; // 방문 처리를 시도한다.

  const queue = new QueueLinkedList();
  queue.enqueue([0, 0, 0]); // 큐 자료구조에 현재 위치 + 벽을 부순 횟수를 저장한다.

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // BFS 탐색 로직
  while (!queue.isEmpty()) {
    const [currentX, currentY, state] = queue.dequeue();

    // (N, M) 위치에 도달하면 맵을 탈출한다.
    if (currentX === n - 1 && currentY === m - 1) return visited[currentX][currentY][state];

    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

      if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue; // 다음 이동 경로가 주어진 지도 범위를 이탈할 경우 생략

      // 다음 이동 경로가 벽이 아니면서 아직 이동하지 않았을 경우
      if (!graph[nextX][nextY] && !visited[nextX][nextY][state]) {
        visited[nextX][nextY][state] = visited[currentX][currentY][state] + 1;
        queue.enqueue([nextX, nextY, state]);
      }

      // 다음 이동 경로가 벽이면서 벽을 부술 수 있는 경우
      if (!state && !visited[nextX][nextY][state] && graph[nextX][nextY] === 1) {
        visited[nextX][nextY][1] = visited[currentX][currentY][state] + 1;
        queue.enqueue([nextX, nextY, 1]);
      }
    }
  }

  return -1;
}

const [N, M] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((element) => element.split("").map(Number));

console.log(solution(N, M, graph));
