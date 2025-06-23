class MinHeap {
  constructor() {
    this.heap = [null];
  }

  enqueue(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  dequeue() {
    if (this._isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    this._heapifyDown();
    return returnValue;
  }

  _heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 1) {
      let parentIndex = Math.floor(currentIndex / 2);
      if (this.heap[parentIndex].cost <= this.heap[currentIndex]) break;
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

      if (rightIndex < this.heap.length && this.heap[rightIndex].cost < this.heap[leftIndex]) {
        smallIndex = rightIndex;
      }

      if (leftIndex >= this.heap.length || this.heap[leftIndex].cost >= this.heap[currentIndex]) break;

      this._swap(currentIndex, smallIndex);
      currentIndex = smallIndex;
    }
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  _isEmpty() {
    return this.heap.length === 1;
  }
}

function solution(V, E, start, graph) {
  const dist = new Array(V + 1).fill(Infinity); // 시작 노드부터 각 정점까지의 거리를 계산하는 1차원 배열을 생성(초기값 = Infinity + 배열의 크기 = V)
  dist[start] = 0; // 시작 정점은 0으로 초기화

  // 다익스트라 알고리즘을 위한 우선순위 큐 자료구조 생성
  const heap = new MinHeap();
  heap.enqueue({ node: start, cost: 0 });

  // 다익스트라 알고리즘 수행
  while (!heap._isEmpty()) {
    const { node: currentNode, cost: currentCost } = heap.dequeue();

    for (const [nextNode, nextCost] of graph[currentNode]) {
      const shortPath = currentCost + nextCost;

      if (shortPath < dist[nextNode]) {
        heap.enqueue({ node: nextNode, cost: shortPath });
        dist[nextNode] = shortPath;
      }
    }
  }

  let answer = "";
  for (let i = 1; i < dist.length; i++) {
    if (dist[i] !== Infinity) answer += dist[i] + "\n";
    else {
      answer += "INF" + "\n";
    }
  }

  return answer;
}
