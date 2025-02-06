![버블 정렬](/assets/images/algorithm/sort/bubble_sort.webp)

```javascript
const arr = [3, 2, 1, 4, 5];

// 첫 번째 반복문은 전체 정렬 과정에서 각 패스를 수행한다.
for (let i = 0; i < arr.length - 1; i++) {
  // 두 번째 반복문은 인접한 원소를 비교하여 교환하며 정렬을 진행한다.
  for (let j = 0; j < arr.length - 1; j++) {
    // 두 원소의 위치를 교환하여 오름차순 정렬을 수행한다.
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }

    // 두 원소의 위치를 교환하여 내림차순 정렬을 수행한다.
    // if (arr[j] < arr[j + 1]) {
    //   [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    // }
  }
}

console.log(arr);
```

버블 정렬(Bubble Sort)란 **서로 인접한 두 원소**를 기준에 따라 비교하고 교환하는 방식으로 정렬하는 알고리즘이다.
