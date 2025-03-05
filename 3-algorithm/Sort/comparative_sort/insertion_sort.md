![삽입 정렬 과정 1](/assets/images/algorithm/sort/insertion_sort_step_1.webp)
![삽입 정렬 과정 2](/assets/images/algorithm/sort/insertion_sort_step_2.webp)

```javascript
const arr = [3, 1, 2, 4, 5];

// 첫 번째 반복문은 배열의 두 번째 요소부터 마지막 요소까지 순차적으로 정렬을 진행한다.
for (let i = 1; i < arr.length; i++) {
  // 두 번째 반복문은 현재 요소를 정렬된 부분과 비교하여 적절한 위치에 삽입한다.
  for (let j = i; j > 0; j--) {
    // 현재 요소가 이전 요소보다 작으면 위치를 변경하여 정렬을 진행한다.
    if (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
}

console.log(arr);
```

삽입 정렬(Insertion Sort)은 **선택한 요소를 적절한 위치에 삽입**하여 정렬하는 알고리즘이다.

#### 삽입 정렬(Insertion Sort)의 특징

- 삽입 정렬 알고리즘 구현은 다소 복잡할 수 있지만, 원소들이 어느정도 정렬된 상태일 경우 퀵 정렬보다 빠른 정렬 알고리즘에 속한다.
