class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  delete() {
    if (this.isEmpty()) return 0;
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
      if (this.heap[parentIndex] < this.heap[currentIndex]) break;
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

      // 자식이 하나도 없을 경우 break
      if (leftIndex >= this.heap.length) break;

      // 오른쪽 자식이 더 작으면 smallIndex 갱신
      if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[leftIndex]) {
        smallIndex = rightIndex;
      }

      // 자식 노드가 현재 노드보다 크면 종료
      if (this.heap[smallIndex] >= this.heap[currentIndex]) break;

      this._swap(currentIndex, smallIndex);
      currentIndex = smallIndex;
    }
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function solution(N, input) {
  const heap = new MinHeap(); // 최소힙 인스턴스 생성

  // 연산을 수행하면서 다음 조건에 맞는 분기 처리를 한다.
  //   1. 자연수 X가 0이 아니라면, X를 최소힙 자료구조에 삽입한다.
  //   2. 자연수 X가 0이라면, 가장 작은 노드를 가져온다.
  let answer = "";
  input.forEach((value, idx) => {
    if (value !== 0) {
      heap.insert(value);
    } else {
      answer += heap.delete() + "\n";
    }
  });

  return answer.trim();
}

const [N, ...input] = require("fs").readFileSync("index.txt").toString().trim().split("\n").map(Number);
console.log(solution(N, input));
