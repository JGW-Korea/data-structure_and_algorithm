const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = Number(input[0]);
  dijkstra(input, N);
  process.exit();
});

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      this._swap(parentIndex, currentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] &&
        this.heap[currentIndex].cost > this.heap[rightIndex].cost)
    ) {
      if (this.heap[leftIndex] === undefined) {
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[rightIndex] === undefined) {
        this._swap(leftIndex, currentIndex);
      } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
        this._swap(leftIndex, currentIndex);
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function dijkstra(input, N) {
  const [start, end] = input[input.length - 1].split(" ").map(Number);
  const heap = new MinHeap();
  const dist = Array(N + 1).fill(Infinity);
  const graph = Array.from(Array(N + 1), () => new Object());

  heap.push({ node: start, cost: 0 });
  dist[start] = 0;

  //그래프 생성
  for (let i = 2; i < input.length - 1; i++) {
    const [src, dest, cost] = input[i].split(" ").map(Number);
    if (graph[src][dest] === undefined) {
      graph[src][dest] = cost;
    } else {
      if (graph[src][dest] > cost) {
        graph[src][dest] = cost;
      }
    }
  }

  while (!heap.isEmpty()) {
    const { node: current, cost: currentCost } = heap.pop();
    if (currentCost > dist[current]) continue;
    for (const dest in graph[current]) {
      if (currentCost > dist[dest]) continue;
      const cost = graph[current][dest];
      const nextCost = cost + currentCost;
      if (nextCost < dist[dest]) {
        dist[dest] = nextCost;
        heap.push({ node: dest, cost: nextCost });
      }
    }
  }

  console.log(dist[end]);
}