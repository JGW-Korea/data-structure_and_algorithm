![이진 탐색](/assets/images/algorithm/search/binary_search.webp)

이진 탐색(Binary Search)은 정렬된 배열에서 찾고자 하는 값을 찾을 때까지 탐색 범위를 절반씩 줄여가며 탐색하는 알고리즘이다.

#### 이진 탐색(Binary Search)의 특징

- 반드시 배열이 정렬되어 있어야 한다는 전제 조건이 필요하다.
- 탐색 범위를 절반씩 줄여나가기 때문에 시간 복잡도는 $O(logN)$ 이다.
- 굉장히 빠른 탐색 알고리즘으로, 선형 탐색보다 훨씬 효율적이다.
- 배열(Array) 뿐만 아니라, 이진 탐색 트리(BST, Binary Search Tree)를 활용하여 이진 탐색을 수행할 수도 있다.

#### 이진 탐색(Binary Search) 동작 원리

![이진 탐색 동작 원리](/assets/images/algorithm/search/binary_search_works.webp)

1. 정렬된 배열에서 중간 값이 N인지 확인

   - 중간 값이 N보다 클 경우 → 중간 값 이전 값들은 확인이 불필요하기 때문에 `right = mid - 1`
   - 중간 값이 N보다 작을 경우 → 중간 값 이후 값들은 확인이 불필요하기 때문에 `left = mid + 1`

2. 값을 찾을때까지 1번 과정 반복

<br />

## 이진 탐색(Binary Search) 구현 방법 - 배열(Array)

```javascript
// #1. 반복문을 이용한 이진 탐색 알고리즘
const arr = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 10 + 1)
);
arr.sort((a, b) => a - b); // 배열의 원소들을 오름차순 정렬

// 중간 값(mid)을 알기 위해 왼쪽과 오른쪽 포인터
let left = 0;
let right = arr.length - 1;

// left 탐색 범위가 right보다 작을 때까지 반복문 수행
while (left < right) {
  let mid = Math.floor((left + right) / 2); // 중간 값을 알기 위해 (left + right) / 2

  // 중간 값이 N과 같을 경우 탐색 종료
  if (arr[mid] === 4) {
    console.log("4의 위치: " + mid);
    break;
  }

  // 중간 값이 N보다 작을 경우 left = mid + 1
  if (arr[mid] < 4) {
    left = mid + 1;
  } else {
    // 중간 값이 N보다 클 경우 right = mid + 1
    right = mid - 1;
  }
}
```

```javascript
// #2. 재귀를 이용한 이진 탐색 알고리즘
function binarySearch(arr, left, right, target) {
  if (left > right) return -1; // left 탐색 범위가 right를 벗어날 경우
  else {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      return binarySearch(arr, mid + 1, right, target);
    } else {
      return binarySearch(arr, left, mid - 1, target);
    }
  }
}

const arr = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 10 + 1)
);
arr.sort((a, b) => a - b);

const answer = binarySearch(arr, 0, arr.length - 1, 4);

if (answer !== -1) {
  console.log("4의 위치: " + answer);
} else {
  console.log("배열에 4가 존재하지 않음");
}
```

## 이진 탐색(Binary Search) 구현 방법 - 이진 탐색 트리(BST, Binary Search Tree)

![이진 탐색 트리](/assets/images/algorithm/search/binary_search_tree.webp)

이진 탐색 트리(BST, Binary Search Tree)란 이진 트리(Binary Tree) 구조에 특정 규칙을 적용하여 탐색을 효율적으로 수행할 수 있도록 만든 자료구조이다.

#### 이진 탐색 트리(Binary Search Tree) 특징

- 이진 탐색(Binary Search) 알고리즘을 트리 형태로 구현한 자료구조이다.
- 각 노드(Node)는 다음과 같은 규칙을 따른다.

  - 왼쪽 서브 트리의 모든 값은 부모 노드(루트)보다 작은 값들로 구성되어 있다.
  - 오른쪽 서브 트리의 모든 값은 부모 노드(루트)보다 큰 값들로 구성되어 있다.

- 이진 트리 구조를 통해 이진 탐색 트리의 탐색(Search), 삽입(Insert), 삭제(Delete) 연산을 평균적으로 $O(log N)$의 시간 복잡도로 수행할 수 있다.

<br />

#### 이진 탐색 트리(Binary Search Tree) 문제점

![이진 탐색 트리](/assets/images/algorithm/search/binary_search_tree_problem.webp)

이진 탐색 트리(Binary Search Tree)는 최악의 경우 한쪽으로 치우친 편향 이진 트리(Skewed Binary Tree)가 될 수 있다.

- 이진 탐색 트리는 일반적으로 탐색, 삽입, 삭제 연산을 $O(log N)$의 시간 복잡도로 수행할 수 있지만, 트리가 한쪽으로 치우치면 시간 복잡도가 $O(N)$으로 증가하여 선형 탐색과 동일한 성능을 보이게 된다.

- 이러한 문제를 방지하기 위해 이진 탐색 트리의 균형을 유지하는 알고리즘이 존재한다.

  - AVL 트리
  - Red-Black 트리

### 이진 탐색 트리(BST): 요소 추가(Insert)

![이진 탐색 트리](/assets/images/algorithm/search/binary_search_tree_insert.webp)

1. 이진 탐색 트리에 5를 추가 _루트 정점에 추가_
1. 이진 탐색 트리에 4를 추가 _왼쪽 서브 트리에 추가_
1. 이진 탐색 트리에 7를 추가 _오른쪽 서브 트리에 추가_
1. 이진 탐색 트리에 8를 추가 _오른쪽 → 오른쪽 서브 트리에 추가_
1. 이진 탐색 트리에 5를 추가 _왼쪽 → 오른쪽 서브 트리에 추가(값이 같을 경우 어느 위치에 추가해도 상관없음)_
1. 이진 탐색 트리에 6를 추가 _오른쪽 → 왼쪽 → 오른쪽 서브 트리에 추가_
1. 이진 탐색 트리에 2를 추가 _왼쪽 → 왼쪽 서브 트리에 추가_

### 이진 탐색 트리(BST): 요소 삭제(Delete)

#### 요소 삭제 #1. 단말 정점(Leaf Node) 삭제

![이진 탐색 트리](/assets/images/algorithm/search/binary_search_tree_leaf-node_delete.webp)

1. 이진 탐색 트리에서 단말 정점(Leaf Node)은 부모 정점(Parent Node)과의 연결만 끊으면 가비지 컬렉터로 인해 자동으로 메모리에서 삭제된다.

<br />

#### 요소 삭제 #2. 하나의 서브 트리를 가지는 노드 삭제

<br />

#### 요소 삭제 #3. 두 개의 서브 트리를 가지는 노드 삭제
