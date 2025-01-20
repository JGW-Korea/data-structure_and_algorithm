![스택 배경 이미지](/assets/images/data_structor/stack/stack_thumbnail.webp)

> 스택(Stack), 큐(Queue), 데크(Dequeue) 자료구조는 기본적으로 특정 위치의 원소를 제외하고, 탐색, 삽입, 삭제가 기본적으로 이루어지면 안된다. 이로 인해 스택(Stack), 큐(Queue), 데크(Dequeue)를 묶어서 **제한된 자료구조(Restricted Structures)**라고 부르기도 한다.

스택(Stack)이란 **마지막에 삽입된 원소가 첫 번째로 삭제되는 구조**를 가지는 자료구조를 말한다. (LIFO, Last In First Out)

- 실생활의 예시로 프링글스 통을 생각하면 된다.

#### 스택(Stack) 특징

##### 스택(Stack) 동작 원리

![스택 동작 원리](/assets/images/data_structor/stack/stack_works.webp)

1. 아무런 데이터가 저장되지 않은 스택(Stack)을 생성한다.
2. 원소를 삽입하면 스택(Stack) 가장 위에 원소가 삽입된다.
3. 원소를 삭제하면 스택(Stack) 가장 위에 있는 원소가 삭제된다.

##### 스택(Stack) 주요 연산 및 시간 복잡도

|                             | 시간 복잡도 | 설명                                   |
| --------------------------- | ----------- | -------------------------------------- |
| 추가(Push)                  | $O(1)$      | 스택에 원소를 **삽입**하는 연산        |
| 삭제(Pop)                   | $O(1)$      | 스택에 원소를 **삭제**하는 연산        |
| 최상위 원소 조회(Top)       | $O(1)$      | 스택의 **최상위 원소**를 확인하는 연산 |
| 비어있는지 여부 확인(Empty) | $O(1)$      | 스택이 **비어 있는지** 확인하는 연산   |

#### 스택(Stack) 표현 방법

##### 1. 배열(Array)

<img src="/assets/images/data_structor/stack/stack_array.webp" alt="스택 배열 표현" width="248px" />

- JavaScript 배열 이용 장점
  - JavaScript의 배열 크기는 동적이기 때문에 배열의 크기를 지정하지 않아도 된다.
  - Array 객체의 인스턴스 메서드로 각 기능을 제공해준다.

<br />

##### 2. 연결 리스트(Linked List)

![연결 리스트를 이용한 방법](/assets/images/data_structor/stack/stack_linked_list.webp)

1. 헤드 노드(Head Node)가 최상위 원소(Top)가 된다.
2. 헤드 노드(Head Node)부터 다음 원소가 가리키는 위치(주소)의 데이터가 최상위 원소 아래에 쌓인 데이터를 의미한다.

## 스택(Stack) 기능 구현

### I. 원소 삽입(Push)

1. 배열(Array)을 이용한 방식

```jsx
stack.push(10); // Array 객체에서 제공하는 인스턴스 메서드 push() 사용
```

2. 연결 리스트(Linked List)를 이용한 방식

```jsx
push(value) {
  const newNode = newNode(value);
  newNode.prev = this.top;
  this.top = newNode;
  this.length += 1;
}
```

### II. 원소 삭제(Pop)

1. 배열(Array)을 이용한 방식

```jsx
stack.pop(); // Array 객체에서 제공하는 인스턴스 메서드 pop() 사용
```

2. 연결 리스트(Linked List)를 이용한 방식

```jsx
pop() {
  if(this.empty()) return;

  const returnNode = this.top; // 헤드 노드(Head Node)의 노드 정보를 할당한다.

  this.top = this.top.prev;
  this.length -= 1;

  return returnNode;
}
```

### III. 최상위 원소 확인(Top)

1. 배열(Array)을 이용한 방식

```jsx
stack[stack.length - 1]; // index로 최상위 원소 접근
stack.at(-1); // Array 객체에서 제공하는 인스턴스 메서드 at() 사용
```

2. 연결 리스트(Linked List)를 이용한 방식

```jsx

```

### IV. 스택 비어있는지 여부 확인(Empty)

1. 배열(Array)을 이용한 방식

```jsx

```

2. 연결 리스트(Linked List)를 이용한 방식

```jsx

```

### V. 스택(Stack) 전체 코드

<details>
<summary>배열(Array)을 이용한 방식</summary>

```jsx
const stack = []; // 스택 생성

// 1. 스택 원소 삽입(Push)
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

// 2. 스택 최상위 원소 확인(Top)
console.log(stack[stack.length - 1]);

// 3. 스택 비어있는지 여부 확인(Empty)
stack.length ? console.log(false) : console.log(true);

// 4. 스택 원소 삭제(Pop)
console.log("스택(Stack) 원소 삭제 이전:", stack);
const value = stack.pop();
console.log("스택(Stack) 원소 삭제 이후:", stack, "삭제한 원소:", value);
```

</details>

<br />

<details>
<summary>연결 리스트(Linked List)을 이용한 방식</summary>

```jsx
const a = 10;
```

</details>
