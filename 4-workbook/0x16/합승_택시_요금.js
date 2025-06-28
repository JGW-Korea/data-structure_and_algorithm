class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);
    this._heapfiyUp();
  }

  delete() {
    if (this.heap.length === 1) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnNodes = this.heap[1];
    this.heap[1] = this.heap.pop();
    this._heapfiyDown();
    return returnNodes;
  }

  _heapfiyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 1) {
      let parentIndex = Math.floor(currentIndex / 2);
      if (this.heap[parentIndex].cost <= this.heap[currentIndex].cost) break;
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  _heapfiyDown() {
    let currentIndex = 1;

    while (true) {
      let leftIndex = currentIndex * 2;
      let rightIndex = currentIndex * 2 + 1;
      let smallIndex = leftIndex;

      if (rightIndex < this.heap.length && this.heap[rightIndex].cost < this.heap[leftIndex].cost) {
        smallIndex = rightIndex;
      }

      if (leftIndex >= this.heap.length || this.heap[leftIndex].cost >= this.heap[currentIndex].cost) break;

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

// n -> 노드의 개수, s -> 출발 지점, a -> A의 집, b -> B의 집, fares 간선의 집합
function solution(n, s, a, b, fares) {
  // 양방향 그래프 자료구조 구성
  const graph = Array.from({ length: n + 1 }, () => []);
  fares.forEach(([from, to, cost]) => {
    graph[from].push([to, cost]);
    graph[to].push([from, cost]);
  });

  // 다익스트라 알고리즘을 통해 시작 지점부터 모든 거리의 최소 거리를 구함
  const dijkstra = (start) => {
    const dist = new Array(n + 1).fill(Infinity); // 각 노드 간의 최소 거리를 저장하는 1차원 배열
    dist[start] = 0;

    const heap = new MinHeap();
    heap.insert({ node: start, cost: 0 });

    // 다익스트라 알고리즘 수행
    while (!heap._isEmpty()) {
      const { node: currentNode, cost: currentCost } = heap.delete();

      for (const [nextNode, nextCost] of graph[currentNode]) {
        const shortPath = currentCost + nextCost;

        if (shortPath < dist[nextNode]) {
          dist[nextNode] = shortPath;
          heap.insert({ node: nextNode, cost: shortPath });
        }
      }
    }

    return dist;
  };

  const distS = dijkstra(s); // s -> 에서 모든 거리 최단 경로 구함
  const distA = dijkstra(a); // a -> 에서 모든 거리 최단 경로 구함
  const distB = dijkstra(b); // b -> 에서 모든 거리 최단 경로 구함

  // 최저 예상 택시 요금 계산
  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < n + 1; i++) {
    if (distS[i] === Infinity || distA[i] === Infinity || distB[i] === Infinity) continue;

    answer = Math.min(answer, distS[i] + distA[i] + distB[i]);
  }

  return answer;
}
