## 분할 정복(Divide and Conquer)

![분할 정복](/assets/images/algorithm/sort/divide_and_conquer.webp)

분할 정복(Divide and Conquer) 알고리즘은 **주어진 문제를 작은 두 개 이상의 하위 문제로 나누고, 더 이상 분할할 수 없을 때까지 이를 재귀적으로 해결한 후, 해결된 하위 문제들을 합쳐 최종 결과를 도출**하는 알고리즘 설계 기법이다.

#### 분할 정복(Divide and Conquer) 특징

- 대부분의 분할 정복 알고리즘은 **재귀 함수를 사용**하여 구현된다.
- 분할 정복 알고리즘은 **다양한 알고리즘에서 활용**되며, 특히 병합 정렬(Merge Sort), 퀵 정렬(Quick Sort) 등의 알고리즘이 대표적인 예시이다.

<br />

## 병합 정렬(Merge Sort)

![병합 정렬](/assets/images/algorithm/sort/merge_sort.webp)

```javascript
// #1. 분할 정복 알고리즘 수행
function merge(arr) {
  if (arr.length === 1) return arr;
  const boundary = Math.ceil(arr.length / 2);
  //slice로 해주기 때문에 원본 arr은 손상 없다.
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);
  //요소가 1개 일 때까지 재귀를 실행해 요소가 1개일 때 두 left,right부터
  //차근차근 merge(정렬해서 합치기)해주면 된다.
  return mergeSort(merge(left), merge(right));
}

// #2. 병합 정렬 알고리즘 수행
function mergeSort(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    //left[0]이 더작을 경우 같을때는 누가 먼저 들어가도 상관X
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
  // 비어있으면 spread Syntax에도 아무것도 없기 때문에 그냥 다 붙여준다.
  return [...sortedArr, ...left, ...right];
}
```

병합 정렬(Merge Sort) 알고리즘은 **분할 정복 알고리즘을 기반**으로 하는 **안정적인 정렬 알고리즘**으로, **주어진 배열을 반으로 나눈 후 각각을 정렬하고, 이를 다시 합치는 방식으로 동작**한다.

#### 병합 정렬(Merge Sort) 특징

- 최선과 최악에서의 시간 복잡도가 동일하다.
- 병합 정렬 알고리즘은 일반적으로 $O(n log n)$의 성능을 유지한다.

#### 병합 정렬 동작 원리

1. 배열을 더 이상 나눌 수 없을 때까지 절반으로 분할한다. _분할 정복 알고리즘 수행_
2. 나눈 배열을 정렬하면서 오름차순(또는 내림차순) 기준에 맞게 병합(Merge)하는 과정을 수행한다. _병합 정렬 알고리즘 수행_
