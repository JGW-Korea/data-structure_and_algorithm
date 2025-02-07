![퀵 정렬](/assets/images/algorithm/sort/quick_sort.webp)

```javascript
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = [array[0]]; // 피봇을 담아두는 배열
  const left = []; // pivot 기준으로 작은 값을 넣기 위한 배열
  const right = []; // pivot 기준으로 큰 값을 넣기 위한 배열

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      // pivot 보다 작은 값인지 판별한다.
      left.push(array[i]);
    } else if (array[i] > pivot) {
      // pivot 보다  값인지 판별한다.
      right.push(array[i]);
    } else {
      // pivot과 값이 같을 경우
      pivot.push(array[i]);
    }
  }

  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);

  // Array.prototype.concat() 메서드를 이용하여 배열의 값을 이어 붙인다.
  // [...quickSort(left), ...pivot, ...quickSort(right)]와 동일
  return quickSort(left).concat(pivot, quickSort(right));
}
```

퀵 정렬(Quick Sort) 알고리즘은 분할 정복 알고리즘 기반으로 하는 불안정한 정렬 알고리즘으로, 피벗(Pivot)을 기준으로 주어진 배열을 반으로 나눈 후 각각을 정렬하고, 이를 다시 합치는 방식으로 동작한다.

#### 퀵 정렬(Quick Sort) 특징

- 퀵 정렬은 입력 데이터 순서에 따라 최선과 최악의 시간 복잡도가 달라진다.
- 최선의 경우 시간 복잡도는 $O(n log n)$ 이지만, 이미 정렬된 상태 또는 특정한 순서로 정렬된 경우 $O(N^{2})$의 시간 복잡도를 가진다.
