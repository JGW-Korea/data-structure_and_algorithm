![큐 배경 이미지](/assets/images/data_structor/queue/queue_thumbnail.webp)

> 스택(Stack), 큐(Queue), 데크(Dequeue) 자료구조는 기본적으로 특정 위치의 원소를 제외하고, 탐색, 삽입, 삭제가 기본적으로 이루어지면 안된다. 이로 인해 스택(Stack), 큐(Queue), 데크(Dequeue)를 묶어서 **제한된 자료구조(Restricted Structures)**라고 부르기도 한다.

큐(Queue)이란 **먼저 삽입된 원소가 첫 번째로 삭제되는 구조**를 가지는 자료구조를 말한다. (FIFO, First In First Out)

- 실생활의 예시로 대기줄을 생각하면 된다.

### 큐(Queue) 종류

- 선형 큐(Linear Queue) : 단반향으로 이어진 큐(Queue) 자료구조
- 원형 큐(Circular Queue) : Front와 Rear가 이어진 큐(Queue) 자료구조 _원형 연결 리스트(Circular Queue)로 구현_

#### 큐(Queue) 특징

##### 큐(Queue) 동작 원리

![스택 동작 원리](/assets/images/data_structor/queue/queue_thumbnail.webp)

1. 아무런 데이터가 저장되지 않은 큐(Queue)을 생성한다.
2. 원소를 삽입하면 큐(Queue) 가장 마지막 위치에 원소가 삽입된다.
3. 원소를 삭제하면 스택(Stack) 가장 첫 번째 위치에 있는 원소가 삭제된다.

<br />

##### 큐(Queue) 주요 연산 및 시간 복잡도

|                         | 시간 복잡도 | 설명                                 |
| ----------------------- | ----------- | ------------------------------------ |
| 추가(Push)              | $O(1)$      | 큐에 원소를 **삽입**하는 연산        |
| 삭제(Pop)               | $O(1)$      | 큐에 원소를 **삭제**하는 연산        |
| 최상위 원소 조회(Front) | $O(1)$      | 큐의 **최상위 원소**를 확인하는 연산 |
| 마지막 원소 조회(Rear)  | $O(1)$      | 큐의 **마지막 원소**를 확인하는 연산 |

#### 큐(Queue) 표현 방법

##### 1. 배열(Array)

![배열을 이용한 큐 자료구조](/assets/images/data_structor/queue/queue_array.webp)

- 배열로 큐(Queue) 구현 시 발생하는 문제점

  - 배열(Array)는 고정된 크기를 가지기 때문에 큐(Queue) 자료구조에 데이터가 가득 차게 되면 원소를 추가할 수 없게 된다.
  - 큐(Queue) 자료구조에서 데이터를 삭제하면 Front 위치가 1씩 증가하며, 기존 Front 위치는 비워진다.

    - 따라서, 데이터를 제거할 때마다 배열의 앞 부분에 빈 공간이 생기며, 이 공간은 재사용할 수 없다.

  - 결국, 원소의 삽입과 제거를 반복하면 배열의 전체 공간이 사용되기 때문에 큐(Queue) 자료구조가 죽게 된다.

- 동적 크기를 가지는 배열을 사용할 경우 _(예: JS, Python, Java: ArrayList 등)_
  - 배열(Array)의 크기를 지정할 필요가 없으며, 원소를 삽입 및 삭제가 될 때마다 자동으로 크기가 조절된다.
  - 하지만, 무한정으로 커질 수 있으며, 원소를 삭제할 경우 빈 공간을 채우는 작업이 $O(N)$ 시간이 소모된다.

<br />

##### 2. 연결 리스트(Linked List)

![연결 리스트를 이용한 큐 자료구조](/assets/images/data_structor/queue/queue_linked_list.webp)

- 연결 리스트를 사용하면 배열로 구현된 큐 자료구조에서 발생하는 문제점들을 해결할 수 있다.

  - 연결 리스트의 데이터는 메모리 상에서 연속적으로 배치되지 않고, 크기를 지정할 필요가 없기 때문

- 연결 리스트 노드 구조
  1. 헤드 노드(Head Node)가 Front가 된다.
  1. 꼬리 노드(Tail Node)가 Rear가 된다.

## 큐(Queue) 기능 구현

### I. 원소 삽입(Enqueue)

#### 1. 배열(Array)을 이용한 방식

```jsx
queue.push(10); // Array 객체에서 제공하는 인스턴스 메서드 push() 사용
```

#### 2. 연결 리스트(Linked List)를 이용한 방식

```jsx
push(value) {
  const newNode = new Node(value);

  // 연결 리스트에 데이터가 없을 경우
  if(this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length += 1;
}
```

### II. 원소 삭제(Dequeue)

#### 1. 배열(Array)을 이용한 방식

```jsx
queue.shift(); // Array 객체에서 제공하는 인스턴스 메서드 shift() 사용
```

#### 2. 연결 리스트(Linked List)를 이용한 방식

```jsx
dequeue() {
  if(this.empty()) return;

  const returnValue = this.head.value;
  this.head = this.head.next;
  this.length -= 1;
  return returnValue;
}
```

### III. 최상위 원소 확인(Peek)

#### 1. 배열(Array)을 이용한 방식

```jsx
queue[0]; // index로 최상위 원소 접근
queue.at(0); // Array 객체에서 제공하는 인스턴스 메서드 at() 사용
```

#### 2. 연결 리스트(Linked List)를 이용한 방식

```jsx
peek() {
  return this.head.value;
}
```

### IV. 큐 자료구조 크기 반환(Size)

#### 1. 배열(Array)을 이용한 방식

```jsx
queue.length;
```

#### 2. 연결 리스트(Linked List)를 이용한 방식

```jsx
size() {
  return this.length;
}
```

### V. 큐 자료구조 비어있는지 여부 반환(Empty)

#### 1. 배열(Array)을 이용한 방식

```jsx
queue.length ? true : false;
```

#### 2. 연결 리스트(Linked List)를 이용한 방식

```jsx
size() {
  return this.length;
}
```

```jsx
empty() {
  return this.length === 0;
}
```

### VI. 큐(Queue) 전체 코드

<details>
<summary>배열(Array)을 이용한 방식</summary>

```jsx
const queue = []; // 큐 생성

// 1. 큐 원소 삽입(Enqueue)
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

// 2. 큐 최상위 원소 확인(Front)
console.log(queue[queue.length - 1]);

// 3. 큐 크기 반환(Size)
console.log(queue.lenght);

// 4. 큐 비어있는지 여부 확인(Empty)
queue.length ? console.log(false) : console.log(true);

// 4. 큐 원소 삭제(Dequeue)
console.log("큐(Queue) 원소 삭제 이전:", queue);
const value = queue.pop();
console.log("큐(Queue) 원소 삭제 이후:", queue, "삭제한 원소:", value);
```

</details>

<br />

<details>
<summary>연결 리스트(Linked List)을 이용한 방식</summary>

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.lenght = 0;
  }

  // 큐 원소 삽입
  enqueue(value) {
    if (this.isEmpty()) return; // 예외 처리

    const newNode = newNode(value); // 새로운 노드 생성

    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.length += 1;
  }

  // 큐 원소 삭제
  dequeue() {
    if (this.isEmpty()) return;

    const returnValue = this.front.value;
    this.front = this.front.next;
    this.length -= 1;
    return returnValue;
  }

  // 큐 최상위 원소 확인
  peek() {
    return this.front.value;
  }

  // 큐 크기 반환
  size() {
    return this.length;
  }

  // 큐가 비어있는지 여부
  isEmpty() {
    return this.length === 0;
  }
}
```

</details>

## 원형 큐(Circuler Queue)

![원형 큐 배경 이미지](/assets/images/data_structor/queue/circuler_queue.webp)

- 배열로 구현된 큐에서는 Front 위치의 원소를 삭제하면 해당 위치를 비우게 된다.
- 이로 인해, Front와 Rear을 연결하여 한정된 크기의 큐에서 비워진 공간을 재활용하기 위해 고안되었다.
