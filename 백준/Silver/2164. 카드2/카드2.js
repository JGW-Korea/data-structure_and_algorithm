class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return value;
  }

  front() {
    return this.head.value;
  }
  
  size() {
    return this.length;
  }
}

function solution(number) {
  const cards = new QueueLinkedList();

  for(let i = 1; i <= number; i++) {
    cards.enqueue(i);
  }

  while(cards.size() > 1) {
    cards.dequeue();
    cards.enqueue(cards.dequeue());
  }

  return cards.front();
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(Number(input)));