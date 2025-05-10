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

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

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
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => [0, 0]));
  visited[0][0][0] = visited[0][0][1] = 1;

  const queue = new QueueLinkedList();
  queue.enqueue([0, 0, 0]);

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (!queue.isEmpty()) {
    const [currentX, currentY, state] = queue.dequeue();

    if (currentX === N - 1 && currentY === M - 1) return visited[currentX][currentY][state];

    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

      if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue;

      // 벽이 아니면서, 아직 방문하지 않은 경우
      if (graph[nextX][nextY] === 0 && !visited[nextX][nextY][state]) {
        visited[nextX][nextY][state] = visited[currentX][currentY][state] + 1;
        queue.enqueue([nextX, nextY, state]);
      }

      // 벽임과 동시에, 아직 방문하지 않고, 벽을 부술 수 있는 경우
      if (!state && graph[nextX][nextY] === 1 && !visited[nextX][nextY][state]) {
        visited[nextX][nextY][1] = visited[currentX][currentY][state] + 1;
        queue.enqueue([nextX, nextY, 1]);
      }
    }
  }

  return -1;
}

const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = [];

for (let i = 1; i < input.length; i++) {
  graph.push(input[i].split("").map(Number));
}

graph.forEach((element) => console.log(element.join(" ")));

console.log(solution(N, M, graph));
