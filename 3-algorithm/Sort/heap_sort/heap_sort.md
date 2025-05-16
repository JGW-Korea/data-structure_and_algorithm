## 우선순위 큐 (Priority Queue)

우선순위 큐(Priority Queue)는 큐의 선입선출(FIFO, First In First Out) 성질을 기반으로 하지만, 우선순위가 높은 원소가 먼저 삭제되는 특성을 갖는 큐이다.

#### 우선순위 큐(Priority Queue) 참고사항

- 우선순위 큐(Priority Queue)는 특정한 자료구조가 아니라 개념적인 구조이다.
- 따라서, 우선순위 큐를 구현하는 방법은 여러 가지가 있다.
- 대표적으로 힙(Heap) 자료구조를 사용하여 구현하는 경우가 많다.

<br />

## 힙(Heap)

![힙](/assets/images/algorithm/sort/heap.webp)

힙(Heap) 자료구조는 완전 이진 트리 형태를 가지며, 요소가 삽입되거나 삭제될 때 자동으로 정렬되어 우선순위가 높은 노드가 먼저 처리되는 특징을 가진다.

#### 힙(Heap) 종류

- 최소 힙(Min Heap) : 부모 노드의 값이 자식 노드의 값보다 작거나 같은 구조로, 최소값이 루트 노드에 위치하는 힙 자료구조
- 최대 힙(Max Heap) : 부모 노드의 값이 자식 노드의 값보다 크거나 같은 구조로, 최대값이 루트 노드에 위치하는 힙 자료구조

#### 힙(Heap) 주요 기능 및 시간 복잡도

| 주요 연산            | 설명                         | 시간복잡도 |
| :------------------- | :--------------------------- | :--------- |
| 삽입(Insert)         | 힙 트리 자료구조에 노드 삽입 | $O(logN)$  |
| 삭제(Remove)         | 우선순위가 높은 노드 삭제    | $O(logN)$  |
| 루트 노드 확인(Peek) | 우선순위가 높은 노드 값 확인 | $O(1)$     |

<br />

### 힙(Heap) 주요 기능 구현

#### 1. 노드 삽입(Insert)

![힙 노드 삽입](/assets/images/algorithm/sort/heap_sort_insertion.webp)

```javascript
// 힙(Heap) 원소 추가 로직
insert(value) {
  this.heap.push(value); // 마지막 위치에 원소를 추가한다.

  // 원소 삽입 이후 내부적으로 정렬을 수행

  // 힙 자료구조는 이진 트리로 표현하기 때문에 현재 정점의 위치와 부모 정점의 위치를 다음과 같이 가지고 올 수 있다.
  // 현재 정점의 위치: this.heap.length - 1
  // 부모 정점의 위치: currentIndex / 2
  let currentIndex = this.heap.length - 1;
  let parentIndex = Math.floor(currentIndex / 2);

  // 부모 정점이 존재하면서, 부모 정점이 현재 정점보다 우선순위가 낮은 경우
  // 최대 힙: this.heap[currentIndex] > this.heap[parentIndex]
  // 최소 힙: this.heap[currentIndex] < this.heap[parentIndex]
  while(parentIndex !== 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
    // 조건에 부합할 경우 부모 노드와 현재 노드의 데이터를 스왑시킨다.
    [this.heap[currentIndex], this.heap[parentIndex]]
      = [this.heap[parentIndex], this.heap[currentIndex]];

    currentIndex = parentIndex;
    parentIndex = Math.floor(currentIndex / 2);
  }
}
```

- 힙 자료구조에서 노드를 삽입할 때는 항상 힙 트리의 가장 마지막 위치에 추가한다.
- 삽입 후, 힙의 정렬 특성을 유지하기 위해 추가한 노드가 부모 노드보다 우선순위가 높다면 위치를 교환한다.
- 이 과정을 부모 노드가 없거나, 부모 노드의 우선순위가 현재 노드보다 높은 경우까지 반복하여, 우선순위가 높은 원소가 올바르게 정렬되도록 한다.
- 완전 이진 트리의 높이는 $O(log N)$ 이므로, 힙에서 요소를 추가하는 연산의 시간 복잡도는 $O(log N)$ 이다.

#### 2. 노드 삭제(Remove)

![힙 노드 삽입](/assets/images/algorithm/sort/heap_sort_remove.webp)

```javascript
// 힙(Heap) 원소 삭제 로직
remove() {
  if(this.heap.length - 1 === 0) return;
  if(this.heap.length - 1 === 1) return this.heap.pop();

  const returnValue = this.heap[1];
  this.heap[1] = this.heap.pop(); // 루트 원소를 삭제한 후 가장 마지막 위치의 원소를 루트 노드에 "임시적"으로 배치한다.

  // 원소 삭제 이후 내부적으로 정렬을 수행

  // 현재 정점을 계속 왼쪽 자식 노드와 오른쪽 자식 노드를 비교하면서 값을 교환해 나아가야 한다.
  let currentIndex = 1;
  let leftIndex = (currentIndex * 2);
  let rightIndex = (currentIndex * 2) + 1;

  // 두 자식 노드 모두 힙의 길이보다 작으면서, 현재 정점이 자식 노드 중 하나라도 우선순위가 높을 경우 값을 교환한다.
  while(
    (leftIndex < this.heap.length && this.heap[currentIndex] < this.heap[leftIndex]) ||
    (rightIndex < this.heap.length && this.heap[currentIndex] < this.heap[rightIndex])
  ) {

    // 오른쪽 자식 노드가 왼쪽 자식 노드보다 우선순위가 높을 경우
    if(this.heap[leftIndex] < this.heap[rightIndex]) {
      [this.heap[currentIndex], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[currentIndex]];
      currentIndex = rightIndex; // 현재 정점의 위치를 오른쪽 자식 노드의 위치로 수정
    }

    // 왼쪽 자식 노드가 오른쪽 자식 노드보다 우선순위가 높을 경우
    else {
      [this.heap[currentIndex], this.heap[leftIndex]] = [this.heap[leftIndex], this.heap[currentIndex]];
      currentIndex = leftIndex; // 현재 정점의 위치를 왼쪽 자식 노드의 위치로 수정
    }

    // 왼쪽 자식 노드와 오른쪽 자식 노드의 위치를 수정해준다.
    [leftIndex, rightIndex] = [currentIndex * 2, (currentIndex * 2) + 1];
  }

  return returnValue;
}
```

- 힙에서 원소를 제거할 때는 항상 루트 노드만 삭제할 수 있다.
- 루트 노드가 제거된 후, 가장 마지막 노드를 루트 위치로 이동시킨다.
- 이동된 로트 노드를 두 자식 노드 중 우선순위가 더 높은 노드와 교환하낟.
- 자식 노드보다 우선순위가 낮을 경우, 우선순위 조건을 만족할 떄까지 반복적으로 위치를 교환한다.
- 완전 이진 트리의 높이는 $O(log N)$ 이므로, 힙에서 원소를 삭제하는 연산의 시간 복잡도는 $O(log N)$ 이다.

#### 3. 루트 노드 확인(Peek)

```javascript
peek() {
  if(this.heap.length - 1 === 0) return;
  return this.heap[1];
}
```

- 힙에서 우선순위가 자장 높은 원소는 루트 노드에 위치하므로, 원소를 확인하는 연산은 매우 간단하다.
- 하지만 다음 사항을 주의해야 한다.
  1. 우선순위가 가장 높은 원소는 즉시 확인 가능하지만, N번째로 우선순위가 높은 원소를 찾으려면 단순히 루트 노드만 확인해서는 불가능하다.
  2. 특정 순위의 원소를 찾기 위해서는 트리의 여러 노드를 탐색해야 하며, 일반적으로 전체 힙을 확인해야 하는 경우도 있다.

<br />

### 힙(Heap) 전체 코드

```javascript
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  remove() {
    if (this.heap.length - 1 === 0) return;
    if (this.heap.length - 1 === 1) return this.heap.pop();

    const removeValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    while (
      (leftIndex < this.heap.length && this.heap[currentIndex] < this.heap[leftIndex]) ||
      (rightIndex < this.heap.length && this.heap[currentIndex] < this.heap[rightIndex])
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        [this.heap[currentIndex], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[currentIndex]];
        currentIndex = rightIndex;
      } else {
        [this.heap[currentIndex], this.heap[leftIndex]] = [this.heap[leftIndex], this.heap[currentIndex]];
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return removeValue;
  }

  peek() {
    if (this.heap.length - 1 === 0) return;
    return this.heap[1];
  }
}
```
