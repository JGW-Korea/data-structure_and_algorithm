const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  enqueue(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  dequeue() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    this._heapifyDown();
    return returnValue;
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  _heapifyUp() {
    let currentIdx = this.heap.length - 1;

    while (currentIdx > 1) {
      let parentIdx = Math.floor(currentIdx / 2);
      if (this.heap[parentIdx].cost < this.heap[currentIdx].cost) break;
      this._swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
    }
  }

  _heapifyDown() {
    let currentIdx = 1;

    while (true) {
      let leftIdx = currentIdx * 2;
      let rightIdx = currentIdx * 2 + 1;
      let smallIdx = leftIdx;

      // 오른쪽 자식 값이 왼쪽 자식보다 작을 경우
      if (rightIdx < this.heap.length && this.heap[rightIdx].cost < this.heap[leftIdx].cost) {
        smallIdx = rightIdx;
      }

      // 왼쪽 자식이 현재 값보다 큰 경우
      if (leftIdx >= this.heap.length || this.heap[leftIdx].cost >= this.heap[currentIdx]) break;

      this._swap(currentIdx, smallIdx);
      currentIdx = smallIdx;
    }
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function solution(N, E, graph, U, V) {
  function shortPath(startNode) {
    // 다익스트라 알고리즘을 위한 최소 Heap 구성
    const heap = new MinHeap();
    heap.enqueue({ node: startNode, cost: 0 });

    const dist = new Array(N + 1).fill(Infinity); // 각 정점의 거리는 무한대로 설정
    dist[startNode] = 0;

    // 다익스트라 알고리즘 수행
    while (!heap.isEmpty()) {
      const { node: currentNode, cost: currentCost } = heap.dequeue();

      for (const [nextNode, nextCost] of graph[currentNode]) {
        const path = currentCost + nextCost;

        // 다음 거리가 짧은 경우에만 거리 갱신
        if (path < dist[nextNode]) {
          dist[nextNode] = path;
          heap.enqueue({ node: nextNode, cost: path });
        }
      }
    }

    return dist;
  }

  const shortPathStart = shortPath(1); // 세준이가 1번 정점부터 N번 정점까지 이동한 최단 경로

  // 임의로 주어진 U, V 정점부터 이동한 최단 경로
  const shortPathX = shortPath(U);
  const shortPathY = shortPath(V);

  const planA = shortPathStart[U] + shortPathX[V] + shortPathY[N];
  const planB = shortPathStart[V] + shortPathY[U] + shortPathX[N];

  if (planA + planB === Infinity) return -1;
  return Math.min(planA, planB);
}

const [N, E] = input[0].split(" ").map(Number);

// 무방향 그래프 구성
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < E + 1; i++) {
  const [a, b, cost] = input[i].split(" ").map(Number);

  graph[a].push([b, cost]);
  graph[b].push([a, cost]);
}

const [U, V] = input.at(-1).split(" ").map(Number);

console.log(solution(N, E, graph, U, V));
