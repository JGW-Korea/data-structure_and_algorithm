![선택 정렬](/assets/images/algorithm/sort/selection_sort.webp)

```javascript
const arr = [3, 1, 2, 4, 5];

// 첫 번째 반복문은 정렬되지 않은 부분에서 최소값을 찾기 위한 반복을 수행한다.
for(let i = 0; i < arr.length - ; i++) {

  let minIndex = i; // 현재 반복에서 가장 작은 값을 가진 원소의 인덱스 저장

  // 두 번째 반복문은 i 이후의 요소들과 비교하여 최소값을 찾는다.
  for(let j = i + 1; j < arr.length; j++) {
    // 더 작은 값을 찾으면 minIndex를 갱신
    if(arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }

  // 최소값을 현재 위치(i)로 이동하여 정렬을 진행
  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}

console.log(arr);
```

선택 정렬(Selection Sort)은 **선택한 요소와 가장 우선순위가 높은 원소를 비교하고 교환하는 방식**으로 정렬하는 알고리즘이다.
