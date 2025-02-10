// 우선순위 큐 알고리즘 정의
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value); // 가장 마지막 위치에 원소를 삽입한다.

    // 이진 트리는 계산을 통해 부모 정점의 위치를 알 수 있다.
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    // heapify-up 로직
    while (
      parentIndex < this.heap.length &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  remove() {
    if (this.heap.length - 1 === 0) return; // 예외 처리 -> 이진 트링에 정점이 없을 경우 아무것도 반환하지 않고 메서드 종료
    if (this.heap.length - 1 === 1) return this.heap.pop(); // 이진 트리에 정점이 하나밖에 없을 경우

    const returnValue = this.heap[1]; // 반환 값으로 루트 노드의 정보를 가져온다.
    this.heap[1] = this.heap.pop(); // 루트 노드에 가장 마지막 높이의 리프 노드를 배치시킨다. (임시적)

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    // heapify-down 로직
    while (
      (leftIndex < this.heap.length &&
        this.heap[leftIndex] < this.heap[currentIndex]) ||
      (rightIndex < this.heap.length &&
        this.heap[rightIndex] < this.heap[currentIndex])
    ) {
      // 왼쪽 자식 노드의 값이 오른쪽 자식 노드의 값보다 작을 경우
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        [this.heap[currentIndex], this.heap[leftIndex]] = [
          this.heap[leftIndex],
          this.heap[currentIndex],
        ];
        currentIndex = leftIndex;
      }

      // 오른쪽 자식 노드의 값이 왼쪽 자식 노드의 값보다 작을 경우
      else {
        [this.heap[currentIndex], this.heap[rightIndex]] = [
          this.heap[rightIndex],
          this.heap[currentIndex],
        ];
        currentIndex = rightIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue; // 루트 노드의 정보를 반환한다.
  }

  isEmpty() {
    return this.heap.length - 1 === 0;
  }
}

function solution(node, startNode, graph) {
  const dist = new Array(node + 1).fill(Infinity);
  dist[startNode] = 0;

  const pq = new MinHeap();
  pq.insert({ node: startNode, cost: 0 });

  // 다익스트라 알고리즘
  while (!pq.isEmpty()) {
    const { node: currentNode, cost: currentCost } = pq.remove(); // 가장 간선의 합이 낮은 정점과 간선의 합을 가지고 온다.

    for (const [nextNode, nextDist] of graph[currentNode]) {
      const nextCost = currentCost + nextDist; // 현재 거리와 다음 정점까지의 거리를 계산한다.

      if (nextCost < dist[nextNode]) {
        dist[nextNode] = nextCost;
        pq.insert({ node: nextNode, cost: nextCost });
      }
    }
  }

  // 결과 출력
  let answer = "";

  for (let i = 1; i <= node; i++) {
    if (dist[i] !== Infinity) answer += dist[i] + "\n";
    else answer += "INF";
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const [V, E] = input[0].split(" ").map(Number);
const K = input[1].split(" ").map(Number);
const graph = Array.from({ length: V + 1 }, () => []);

for (let i = 2; i < E + 2; i++) {
  const [from, to, cost] = input[i].split(" ").map(Number);
  graph[from].push([to, cost]);
}

console.log(solution(V, K, graph));
