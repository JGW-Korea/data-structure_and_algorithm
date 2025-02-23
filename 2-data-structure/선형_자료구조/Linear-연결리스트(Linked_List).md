![연결리스트 배경 이미지](/assets/images/data_structor/linked_list/linked_list_thumbnail.webp)

> ⚠️ 원소의 조회가 반복적으로 발생하는 로직에서는 연결 리스트 사용이 비효율적이므로 권장되지 않음

연결 리스트(Linked List)란 **각 원소를 포인터로 연결하여 관리하는 선형 자료구조**이다.

- 포인터로 연결하여 관리: 각 원소는 자신의 데이터와 함께 다음 원소의 위치(주소)를 포함한다. 이를 통해 원소들이 논리적으로 연결된다.

**연결 리스트(Linked List) 용어**

- 노드(Node): 각 원소를 의미하며, 데이터 영역(원소가 저장하는 실제 데이터)과 포인터 영역(다음 노드의 위치)으로 구성된다.
- 헤드 노드(Head Node): 연결 리스트 원소 중 첫 번째 원소를 가리키는 용어
- 꼬리 노드(Tail Node): 연결 리스트 원소 중 마지막 원소를 가리키는 용어

**연결 리스트(Linked List) 특징 - _배열의 특징과 정반대_**

- 메모리가 허용하는 한 원소를 제한 없이 추가할 수 있다.
- 연결 리스트의 탐색 과정은 $O(N)$ 시간 복잡도가 소요된다.
- 연결 리스트의 원소 삽입과 삭제는 해당 위치를 알고 있는 경우 $O(1)$ 시간 복잡도가 소요된다.

**연결 리스트(Linked List) 주의사항**

- 연결 리스트는 노드의 추가와 삭제가 $O(1)$의 시간 복잡도를 가지는 것으로 알려져 있다.
- 하지만, 주의해야 할 점은 추가 또는 삭제하고자 하는 위치의 노드에 대한 위치(주소)를 이미 알고 있는 경우에만 $O(1)$ 시간 복잡도를 보장한다는 것이다.
- 특정 위치를 찾기 위해 노드를 탐색해야 할 경우, 연결 리스트는 일반적으로 순차 탐색을 수행하므로 탐색 과정이 포함되면 시간 복잡도는 $O(N)$이 된다.
- 따라서, 연결 리스트의 추가 및 삭제가 항상 $O(1)$이라고 생각하면 안되며, 상황에 따라 탐색 시간 $O(N)$이 포함될 수 있음을 고려해야 한다.

**연결 리스트(Linked List) 사용 대표 사례 - 텍스트 에디터**

1. 텍스트 에디터는 커서의 위치에 문자를 작성한다.
2. 하지만, 문자를 작성하는 과정을 배열로 작성하게 되면 다음과 같은 문제점이 생긴다.

- 에디터 마지막 위치에 글자 입력 / 삭제하는 과정은 $O(1)$ 시간 복잡도를 가진다.
- 에디터 특정 위치에 글자를 입력 / 삭제하는 과정은 $O(N)$ 시간 복잡도를 가진다.
  - 에디터에 작성된 입력 데이터는 최소로 잡아도 10만 글자 이상이다.
  - 이로 인해, 특정 위치에 계속 문자를 입력하게 되면, 결국 컴퓨터가 버티지 못하게 된다.

3.  이로 인해, 텍스트 에디터와 같은 특정 추가와 삭제가 반복적으로 발생하는 로직에는 연결 리스트(Linked List)를 사용하게 된다.

## 연결 리스트(Linked List) 종류

**1. 단일 연결 리스트(Single Linked List)**

- 헤드 노드(Head Node)에서 꼬리 노드(Tail Node)까지 단방향으로 이어지는 연결 리스트
- 가장 단순한 형태를 가진 연결 리스트

<br />

**2. 이중 연결 리스트(Double Linked List)**
![이중 연결 리스트](/assets/images/data_structor/linked_list/DoublyLinkedList.png)

- 각 노드(Node)가 두 개의 포인터 영역(Pointer)을 가지며, 이전 노드와 다음 노드의 주소를 저장하는 형태를 가진 연결 리스트
- 양방향으로 연결되어 있어, 탐색 방향이 자유롭다.
- 단일 연결 리스트보다 자료구조의 크기가 조금 더 크다.

<br />

**3. 원형 연결 리스트(Circuler Linked List)**
![원형 연결 리스트](/assets/images/data_structor/linked_list/circuler_linked_list.png)

- 꼬리 노드(Tail Node)가 헤드 노드(Head Node)로 연결되는 형태를 가진 연결 리스트
- 메모리를 효율적으로 사용할 수 있으며, _원형 큐_ 등의 자료구조에서 활용된다.
- 단일 혹은 이중 연결 리스트에서 모두 적용 가능:
  - 단일 원형 연결 리스트(Single Circuler Linked List): 기존 원형 연결 리스트 방식 _꼬리 노드(Tail Node)에서 헤드 노드(Head Node)로 연결_
  - 이중 원형 연결 리스트(Double Circuler Linked List): 이중 연결 리스트 특성을 유지하면서, 꼬리 노드(Tail Node)에서 헤드 노드(Head Node)로 연결되어 있다.

## 연결 리스트와 배열의 차이점

**1. 시간 복잡도**
||배열|연결 리스트|
|--|--|--|
|탐색|$O(1)$|$O(N)$|
|추가|$O(N)$|$O(1)$|
|삭제|$O(N)$|$O(1)$|

- 추가와 삭제가 반복되는 로직일 경우 → 연결 리스트(Linked List) 사용 권장
- 조회가 반복되는 로직일 경우 → 배열(Array) 사용 권장

**2. 메모리**
![배열 연결 리스트 메모리 관점](/assets/images/data_structor/linked_list/different_array_linked_list_memory.webp)

- 배열(Array): 순차적인 데이터 저장 (메모리를 연속적으로 할당)
- 연결 리스트(Linked List): 비순차적인 데이터 저장 (메모리를 연속적으로 할당하지 않음)

## 연결 리스트(Linked List) 기능 구현

### I. 노드 탐색 및 변경(Read & Update)

```jsx
// 노드 탐색
get(idx) {
  if(this.lenght === 0 || idx > this.length || idx === 0) return; // 예외 처리
  if(this.length === 1 || idx === 1) return this.head; // 헤드 노드(Head Node) 반환

  let currentNode = this.head;
  let currentIdx = 1;

  while(currentIdx !== idx) {
    currentNode = currentNode.next;
    currentIdx += 1;
  }

  return currentNode;
}

// 노드 데이터 변경
set(idx, value) {
  const updatedNode = this.get(idx);

  if(!updatedNode) return; // 존재하지 인덱스 노드에 접근할 경우 예외 처리
  updatedNode.value = value; // 존재하는 노드일 경우 데이터 영역 값 수정
}
```

- 연결 리스트(Linked List)는 노드의 위치가 메모리에 직접 저장된 형태가 아니다.
- 대신, 각 노드는 다음 노드의 위치(주소)를 가리키는 링크를 저장하고 있다.
- 따라서 특정 노드를 찾기 위해서는 헤드 노드(Head Node)부터 시작해서 찾고자 하는 노드를 찾을 때까지 계속 포인터를 통해 이동해야 한다.
- 이로 인해, 최선의 경우(Best Case) $O(1)$ 시간 복잡도를 가지지만, 최악의 경우(Worst Case) $O(N)$ 시간 복잡도를 가지게 된다.

#### 연결 리스트 탐색(Read) 동작 원리 _(찾고자 하는 수: 4)_

![연결 리스트 탐색(Read) 동작 원리](/assets/images/data_structor/linked_list/linked_list_read.webp)

1. 헤드 노드(Head Node)부터 시작한다.
2. 각 노드(Node)의 데이터 영역과 찾고자 하는 수가 다르면 포인터를 통해 다음 노드로 이동한다.
3. 찾고자 하는 수를 찾을 때까지 2번 과정을 반복한다.

### II. 노드 삭제(Delete)

#### 1. 마지막 원소 삭제

```jsx
pop() {
  if(this.length === 0) return; // 예외 처리: 연결 리스트에 저장된 원소가 없을 경우

  let returnNode;

  // 연결 리스트에 저장된 원소가 하나일 경우
  if(this.length === 1) {
    returnNode = this.head;
    this.head = null;
    this.tail = null;

  } else { // 연결 리스트에 저장된 원소가 2개 이상일 경우
    let currentNode = this.head;

    // 현재 노드의 포인터 영역 주소가 null을 가리키는 노드를 찾을 때까지 순회한다.
    while(currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    returnNode = currentNode.next;
    this.tail = currentNode;
    this.tail.next = null;
  }

  this.length -= 1;
  return returnNode;
}
```

#### 2. 특정 위치 노드 삭제

```jsx
remove(idx) {
  if(idx === 0 || this.length === 0 || idx > this.length) return; // 예외 처리

  let returnNode;

  // 연결 리스트에 저장된 원소가 하나일 경우
  if(this.length === 1) {
    returnNode = this.head;
    this.head = null;
    this.tail = null;
  } else { // 연결 리스트에 저장된 원소가 2개 이상일 경우
    let currentNode = this.head;
    let currentIdx = 1;

    // 삭제하고 싶은 위치 이전 노드까지 방문한다.
    while(currentIdx !== idx - 1) {
      currentNode = currentNode.next;
      currentIdx += 1;
    }

    returnNode = currentNode.next;
    currentNode.next = currentNode.next.next;

    // 삭제한 위치의 노드가 꼬리 노드(Tail Node)인 경우
    if(currentNode.next === null) {
      this.tail = currentNode;
    }

  }

  this.length -= 1;
  return returnNode;
}
```

#### 3. 첫 번째 원소 삭제

```jsx
shift() {
  if(this.length === 0) return; // 예외 처리: 연결 리스트에 저장된 원소가 없을 경우

  let returnNode = this.head;

  if(this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }

  this.length -= 1;
  return returnNode;
}
```

#### 연결 리스트(Linked List) 노드 삭제 동작 원리

![linked_list_delete_step_1](/assets/images/data_structor/linked_list/linked_list_delete_step_1.webp)
![linked_list_delete_step_2](/assets/images/data_structor/linked_list/linked_list_delete_step_3.webp)
![linked_list_delete_step_3](/assets/images/data_structor/linked_list/linked_list_delete_step_2.webp)

1. 삭제할 노드의 이전 노드의 포인터를 삭제할 노드의 다음 노드로 변경한다.
2. 삭제할 노드와 다음 노드의 연결을 끊는다.
3. 삭제된 노드는 가비지 컬렉터에 의해 메모리에서 제거된다.

### III. 연결 리스트(Linked List) 노드 삽입(Insert)

#### 1. 마지막에 노드 추가

```jsx
push(value) {
  const newNode = new Node(value); // 새로운 노드를 생성한다.

  // 연결 리스트에 저장된 원소가 없을 경우
  if(this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else { // 연결 리스트에 저장된 원소가 1개 이상일 경우
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length += 1;
}
```

#### 2. 특정 위치에 노드 추가

```jsx
insert(value, idx) {
  if(idx > this.length || idx === 0) return; // 예외 처리

  // 특정 위치의 번호가 첫 번째 위치이면서 연결 리스트에 저장된 원소가 없을 경우
  if(idx === 1 && this.empty()) {
    push(value);
  }

  const newNode = new Node(value); // 새로운 노드를 생성한다.

  // 추가할 위치의 번호가 헤드 노드(Head Node)일 경우
  if(idx === 1) {
    newNode.next = this.head;
    this.head = newNode;

    if(newNode.next === null) {
      this.tail = newNode;
    }
  }

  // 추가할 위치의 번호가 꼬리 노드(Tail Node)일 경우
  else if(idx === this.length) {
    this.tail.next = newNode;
    this.tail = newNode;
  }

  // 추가할 위치의 번호가 N일 경우
  else {
    let currentNode = this.head;
    let currentIdx = 1;

    while(currentIdx !== idx) {
      currentNode = currentNode.next;
      currentIdx += 1;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
}
```

#### 3. 첫 번째 위치에 노드 추가

```jsx
unshift(value) {
  if(this.empty()) push(value); // 연결 리스트에 저장된 원소가 없을 경우

  // 연결 리스트에 저장된 원소가 1개 이상일 경우
  const newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
  this.length += 1;
}
```

#### 연결 리스트(Linked List) 노드 삽입 동작 원리

![linked_list_insert_step_1](/assets/images/data_structor/linked_list/linked_list_insert_step_1.webp)
![linked_list_insert_step_2](/assets/images/data_structor/linked_list/linked_list_insert_step_3.webp)
![linked_list_insert_step_3](/assets/images/data_structor/linked_list/linked_list_insert_step_2.webp)

1. 새로운 노드를 생성한다.
2. 추가하려는 위치의 노드가 가리키고 있는 포인터를 새로운 노드의 포인터에게 넘겨준다.
3. 추가하려는 위치의 노드의 포인터를 새로운 노드를 가리키게 만든다.

### IV. 연결 리스트(Linked List) 전체 코드

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 원소 삽입 (첫 번째 위치)
  unshift(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  // 원소 삽입 (마지막 위치)
  push(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  // 원소 삽입 (특정 위치)
  insert(value, idx) {
    if (idx > this.length || idx === 0) return; // 예외 처리

    // 특정 위치의 번호가 첫 번째 위치이면서 연결 리스트에 저장된 원소가 없을 경우
    if (idx === 1 && this.empty()) {
      push(value);
    }

    const newNode = new Node(value); // 새로운 노드를 생성한다.

    // 추가할 위치의 번호가 헤드 노드(Head Node)일 경우
    if (idx === 1) {
      newNode.next = this.head;
      this.head = newNode;

      if (newNode.next === null) {
        this.tail = newNode;
      }
    }

    // 추가할 위치의 번호가 꼬리 노드(Tail Node)일 경우
    else if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // 추가할 위치의 번호가 N일 경우
    else {
      let currentNode = this.head;
      let currentIdx = 1;

      while (currentIdx !== idx) {
        currentNode = currentNode.next;
        currentIdx += 1;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  // 원소 삭제 (첫 번째 위치)
  shift() {
    if (this.length === 0) return; // 예외 처리: 연결 리스트에 저장된 원소가 없을 경우

    let returnNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length -= 1;
    return returnNode;
  }

  // 원소 삭제 (마지막 위치)
  pop() {
    if (this.length === 0) return; // 예외 처리: 연결 리스트에 저장된 원소가 없을 경우

    let returnNode;

    // 연결 리스트에 저장된 원소가 하나일 경우
    if (this.length === 1) {
      returnNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      // 연결 리스트에 저장된 원소가 2개 이상일 경우
      let currentNode = this.head;

      // 현재 노드의 포인터 영역 주소가 null을 가리키는 노드를 찾을 때까지 순회한다.
      while (currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }

      returnNode = currentNode.next;
      this.tail = currentNode;
      this.tail.next = null;
    }

    this.length -= 1;
    return returnNode;
  }

  // 원소 삭제 (특정 위치)
  remove(idx) {
    if (idx === 0 || this.length === 0 || idx > this.length) return; // 예외 처리

    let returnNode;

    // 연결 리스트에 저장된 원소가 하나일 경우
    if (this.length === 1) {
      returnNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      // 연결 리스트에 저장된 원소가 2개 이상일 경우
      let currentNode = this.head;
      let currentIdx = 1;

      // 삭제하고 싶은 위치 이전 노드까지 방문한다.
      while (currentIdx !== idx - 1) {
        currentNode = currentNode.next;
        currentIdx += 1;
      }

      returnNode = currentNode.next;
      currentNode.next = currentNode.next.next;

      // 삭제한 위치의 노드가 꼬리 노드(Tail Node)인 경우
      if (currentNode.next === null) {
        this.tail = currentNode;
      }
    }

    this.length -= 1;
    return returnNode;
  }

  // 특정 위치 노드 정보 반환
  get(idx) {
    if (this.lenght === 0 || idx > this.length || idx === 0) return; // 예외 처리
    if (this.length === 1 || idx === 1) return this.head; // 헤드 노드(Head Node) 반환

    let currentNode = this.head;
    let currentIdx = 1;

    while (currentIdx !== idx) {
      currentNode = currentNode.next;
      currentIdx += 1;
    }

    return currentNode;
  }

  // 특정 위치 노드 데이터 변경
  set(idx, value) {
    const updatedNode = this.get(idx);

    if (!updatedNode) return; // 존재하지 인덱스 노드에 접근할 경우 예외 처리
    updatedNode.value = value; // 존재하는 노드일 경우 데이터 영역 값 수정
  }

  // 연결 리스트 길이 반환
  length() {
    return this.length;
  }

  // 연결 리스트 비어있는지 여부 확인
  isEmpty() {
    return this.length === 0;
  }
}
```
