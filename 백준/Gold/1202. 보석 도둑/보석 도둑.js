class MaxHeap{

  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);

    while(this.heap[parent] < value) {

      this.swap(parent, idx);
      idx = parent;
      parent = Math.floor((idx-1) / 2);
      
    }
    
  }

  pop() {
    const lastIdx = this.heap.length - 1;
    let idx = 0;
    this.swap(0, lastIdx);
    let value = this.heap.pop();

    while(idx < lastIdx) {

      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;

      if(leftChildIdx >= lastIdx) {
        break;
      } 
      
      else if(rightChildIdx >= lastIdx) {
        if(this.heap[idx] < this.heap[leftChildIdx]) {
          this.swap(idx, leftChildIdx);
          idx = leftChildIdx;
        } 
        
        else {
          break;
        }
      }

      else {

        if(this.heap[leftChildIdx] > this.heap[idx] && this.heap[rightChildIdx] > this.heap[idx]) {

          if(this.heap[leftChildIdx] > this.heap[rightChildIdx]) {
            this.swap(idx, leftChildIdx);
            idx = leftChildIdx;
          } else {
            this.swap(idx, rightChildIdx);
            idx = rightChildIdx;
          }
          
        }

        else if(this.heap[leftChildIdx] > this.heap[idx]) {
          this.swap(leftChildIdx, idx);
          idx = leftChildIdx;
        } 
        
        else if(this.heap[rightChildIdx] > this.heap[idx]) {
          this.swap(rightChildIdx, idx);
          idx = rightChildIdx
        }

        else {
          break;
        }
        
      }
      
    }
    
    return value;
  }

  isEmpty() {
    return this.heap.length === 0 ? true : false
  }
  
  print() {
    console.log(this.heap)
  }
  
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((value) => value.split(' ').map(Number));

let [n, k] = input.shift();

let jewel = input.splice(0, n).sort((a, b) => a[0] - b[0]);
let bag = input.map(v => v[0]).sort((a, b) => a - b);

let answer = 0;
let heap = new MaxHeap();

let j = 0;

for(let i=0;i<k;i++) {

  while(j < n && jewel[j][0] <= bag[i]) {
    heap.insert(jewel[j][1]);
    j++;
  }

  if(heap.size()) {
    answer += heap.pop();
  }
  
}

console.log(answer)