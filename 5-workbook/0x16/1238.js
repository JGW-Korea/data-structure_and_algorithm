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
    if (this.size() === 1) return this.heap.pop();

    const returnValue = this.heap[1];

    this.heap[1] = this.heap.pop();
    this._heapifyDown();
    return returnValue;
  }

  _heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 1) {
      const parentIndex = Math.floor(currentIndex / 2);
      if (this.heap[parentIndex].cost <= this.heap[currentIndex].cost) break;
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

      if (rightIndex < this.size() && this.heap[rightIndex].cost < this.heap[leftIndex].cost) {
        smallIndex = rightIndex;
      }

      if (leftIndex >= this.size() || this.heap[currentIndex].cost <= this.heap[leftIndex].cost) {
        break;
      }

      this._swap(currentIndex, smallIndex);
      currentIndex = smallIndex;
    }
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  size() {
    return this.heap.length - 1;
  }
}

function solution(n, m, x, graph) {
  const heap = new MinHeap();
  const dist = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(Infinity));

  // 1 ~ N 명의 학생들이 갈 수 있는 모든 거리의 최단 경로를 구한다.
  for (let i = 1; i <= n; i++) {
    heap.enqueue({ node: i, cost: 0 });
    dist[i][i] = 0;

    // 힙 자료구조에 원소가 있을 경우에만
    while (!heap.isEmpty()) {
      const { node: currentNode, cost: currentCost } = heap.dequeue();

      for (const [nextNode, nextCost] of graph[currentNode]) {
        const nextDist = currentCost + nextCost; // 현재 노드에서 다음 노드까지 가는 거리 계산

        // i번 노드에서 다음 노드까지 가는 거리가 계산한 거리가 긴 경우 더 짧은 값으로 대체한다.
        if (dist[i][nextNode] > nextDist) {
          dist[i][nextNode] = nextDist;
          heap.enqueue({ node: nextNode, cost: nextDist });
        }
      }
    }
  }

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i === x) continue; // x번 마을에 사는 학생은 계산할 필요가 없음
    answer = Math.max(answer, dist[i][x] + dist[x][i]);
  }

  return answer;
}

const [N, M, X] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

// 단반향 그래프 표현
for (let i = 1; i < input.length; i++) {
  const [from, to, cost] = input[i].split(" ").map(Number);
  graph[from].push([to, cost]);
}

console.log(solution(N, M, X, graph));
