![이진 탐색](/assets/images/algorithm/search/binary_search.webp)

이진 탐색(Binary Search)은 정렬된 배열에서 찾고자 하는 값을 찾을 때까지 탐색 범위를 절반씩 줄여가며 탐색하는 알고리즘이다.

#### 이진 탐색(Binary Search)의 특징

- 반드시 배열이 정렬되어 있어야 한다는 전제 조건이 필요하다.
- 탐색 범위를 절반씩 줄여나가기 때문에 시간 복잡도는 $O(logN)$ 이다.
- 굉장히 빠른 탐색 알고리즘으로, 선형 탐색보다 훨씬 효율적이다.
- 배열(Array) 뿐만 아니라, 이진 탐색 트리(BST, Binary Search Tree)를 활용하여 이진 탐색을 수행할 수도 있다.

<br />

#### 이진 탐색(Binary Search) 동작 원리

![이진 탐색 동작 원리](/assets/images/algorithm/search/binary_search_works.webp)

1. 정렬된 배열에서 중간 값이 N인지 확인

- 중간 값이 N보다 클 경우 → 중간 값 이전 값들은 확인이 불필요하기 때문에 `left = mid + 1`
- 중간 값이 N보다 작을 경우 → 중간 값 이후 값들은 확인이 불필요하기 때문에 `right = mid - 1`

2. 값을 찾을때까지 1번 과정 반복

## 이진 탐색(Binary Search) 구현 방법 - 배열(Array)
