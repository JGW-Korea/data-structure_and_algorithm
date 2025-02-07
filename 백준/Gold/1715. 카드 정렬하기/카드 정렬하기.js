class MinHeap {

  constructor() {
    this.heap = [ -Infinity ];
  }

  insert(value) {

    this.heap.push(value);
    this.percolateUp(this.heap.length - 1);
    
  }

  percolateUp(pos) {

    let temp = this.heap[pos];

    while(temp < this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }

    this.heap[pos] = temp;
    
  }

  deleteMax() {
    if (this.heap.length - 1 < 1) return 0;
      
    if(this.heap.length === 2) return this.heap.pop();

    let res = this.heap[1];

    this.heap[1] = this.heap.pop();
    this.percolateDown(1, this.heap.length - 1);
    
    return res;
    
  }

  percolateDown(pos, len) {

    let temp = this.heap[pos];
    let child = 0;

    while(pos <= parseInt(len / 2)) {

      child = pos * 2;
      if(child < len && this.heap[child] > this.heap[child + 1]) child++;
      if(temp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
      
    }

    this.heap[pos] = temp;
    
  }

  isEmpty() {
    return this.heap.length === 1 ? true : false;
  }
  
  size() {
    return this.heap.length - 1;
  }

  print() {
    console.log(this.heap);
  }
  
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0])
let list = []

let heap = new MinHeap();

for(let i=1;i<input.length;i++) {
  heap.insert(Number(input[i]));
}

let count = 0;

for (let i = 1; i < n; i++) {
    let card1 = heap.deleteMax();
    let card2 = heap.deleteMax();

    let sum = card1 + card2;
    count += sum;

    heap.insert(sum);
}
console.log(count);