class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while(parentIndex !== 0 && Math.abs(this.heap[parentIndex]) > Math.abs(value) || 
          (Math.abs(this.heap[parentIndex]) === Math.abs(value) && this.heap[parentIndex] > value)) {
        this._swap(parentIndex, currentIndex);

        currentIndex = parentIndex;
        parentIndex = Math.floor(currentIndex / 2);
    }
  }

  remove() {
  if(this.heap.length === 1) return 0; // 힙에 원소가 없을 경우
  if(this.heap.length === 2) return this.heap.pop(); // 힙에 원소가 1개 밖에 없을 경우

  const returnValue = this.heap[1];
  this.heap[1] = this.heap.pop();

  let currentIndex = 1;
  
  let leftIndex = currentIndex * 2;
  let rightIndex = (currentIndex * 2) + 1;

  while(
    (this.heap[leftIndex] && (Math.abs(this.heap[leftIndex]) < Math.abs(this.heap[currentIndex]) || 
    (Math.abs(this.heap[leftIndex]) === Math.abs(this.heap[currentIndex]) && this.heap[leftIndex] < this.heap[currentIndex]))) ||
    (this.heap[rightIndex] && (Math.abs(this.heap[rightIndex]) < Math.abs(this.heap[currentIndex]) || 
    (Math.abs(this.heap[rightIndex]) === Math.abs(this.heap[currentIndex]) && this.heap[rightIndex] < this.heap[currentIndex])))
  ) {
    if(this.heap[rightIndex] === undefined) {
      this._swap(currentIndex, leftIndex);
      currentIndex = leftIndex;
    } else if(this.heap[leftIndex] === undefined) {
      this._swap(currentIndex, rightIndex);
      currentIndex = rightIndex;
    } else if(Math.abs(this.heap[leftIndex]) < Math.abs(this.heap[rightIndex]) || 
    (Math.abs(this.heap[leftIndex]) === Math.abs(this.heap[rightIndex]) && this.heap[leftIndex] < this.heap[rightIndex])) {
      this._swap(currentIndex, leftIndex);
      currentIndex = leftIndex;
    } else {
      this._swap(currentIndex, rightIndex);
      currentIndex = rightIndex;
    }

    leftIndex = currentIndex * 2;
    rightIndex = currentIndex * 2 + 1;
  }
  
  return returnValue;
}


  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function solution(N, numbers) {
  const heap = new MinHeap();

  let result = '';
  
  for(let i = 0; i < N; i++) {
    if(numbers[i] === 0) result += heap.remove() + '\n';
    else {
      heap.insert(numbers[i]);
    }
  }

  return result;
}

const fs = require('fs');
const [N, ...numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(solution(N, numbers));