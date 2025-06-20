class MinHeap {
  constructor() {
    this.heap = [null];
  }

  enqueue(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 1) return 0;
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

      if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[leftIndex]) smallIndex = rightIndex;
      if (leftIndex >= this.heap.length || this.heap[smallIndex] >= this.heap[currentIndex]) break;

      this._swap(currentIndex, smallIndex);
      currentIndex = smallIndex;
    }
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function solution(N, cards) {
  const heap = new MinHeap();

  // N개의 모든 카드들을 힙 자료구조에 삽입한다.
  for (const card of cards) {
    heap.enqueue(card);
  }

  // A, B 두 묶음을 합친다.
  let answer = 0;
  for (let i = 0; i < N - 1; i++) {
    let sum = heap.dequeue() + heap.dequeue();
    answer += sum;
    heap.enqueue(sum);
  }

  return answer;
}

const [N, ...cards] = require("fs").readFileSync("index.txt").toString().trim().split("\n").map(Number);
console.log(solution(N, cards));
