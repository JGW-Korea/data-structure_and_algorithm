const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  delete() {
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
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 1) {
      let parentIndex = Math.floor(currentIndex / 2);

      if (this.heap[parentIndex].cost < this.heap[currentIndex].cost) break;
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  _heapifyDown() {
    let currentIndex = 1;

    while (true) {
      let leftIndex = currentIndex * 2;
      let rightIndex = currentIndex * 2 + 1;
      let smallIndex = leftIndex;

      if (rightIndex < this.heap.length && this.heap[rightIndex].cost < this.heap[leftIndex].cost)
        smallIndex = rightIndex;
      if (leftIndex >= this.heap.length || this.heap[leftIndex].cost >= this.heap[currentIndex].cost) break;

      this._swap(currentIndex, smallIndex);
      currentIndex = smallIndex;
    }
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[a], this.heap[b]];
  }
}

function solution(N, _, graph, start, end) {
  const dist = new Array(N + 1).fill(Infinity); // 각 정점까지의 최단 거리를 표시하는 1차원 배열
  dist[start] = 0;

  // 가장 짧은 거리를 선택하기 위한 최소힙 구성
  const heap = new MinHeap();
  heap.insert({ node: start, cost: 0 });

  // 다익스트라 알고리즘 수행
  while (!heap.isEmpty()) {
    const { node: currentNode, cost: currentCost } = heap.delete();

    for (const [nextNode, nextCost] of graph[currentNode]) {
      const shortPath = currentCost + nextCost;

      if (shortPath < dist[nextNode]) {
        dist[nextNode] = shortPath;
        heap.insert({ node: nextNode, cost: shortPath });
      }
    }
  }

  return dist[end];
}

const N = Number(input[0]);
const M = Number(input[1]);

// 방향 그래프 구성
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 2; i < M + 2; i++) {
  const [from, to, cost] = input[i].split(" ").map(Number);

  graph[from].push([to, cost]);
}

const [start, end] = input.at(-1).split(" ").map(Number);

console.log(solution(N, M, graph, start, end));
