파라메트릭 서치(Parametric Search)란 **최적화 문제를 결정 문제로 변환하여 해결하는 알고리즘 기법**이다.

- **최적화 문제** : 특정 조건을 만족하는 최적의 값을 찾는 문제를 의미
- **결정 문제** : 특정 값이 가능한지 여부를 판별하는 문제를 의미

파라메트릭 서치(Parametric Search)는 <strong>최적화 문제를 해결하기 위해 [이진 탐색(Binary Search)](./binary_search.md)을 활용</strong>한다. **주어진 범위 내에서 가능한 값을 탐색하면서 특정 조건을 만족하는지 여부를 결정 문제로 변환하고, 이 결과를 기반으로 탐색 범위를 조정하여 최적의 해를 도출**한다.

#### 파라메트릭 서치(Parametric Search) 알고리즘 과정

최적의 값을 찾기 위해, **주어진 값이 문제의 조건을 만족하는지 판별하는 함수(결정 함수)**를 작성한다.

1. 최적화 문제 정의 : 문제에서 찾고자 하는 **최적의 값을 설정**한다.
2. 결정 문제로 변환 : 특정 값이 **문제의 조건을 만족하는지 판별하는 결정 함수를 작성**한다.
3. 이진 탐색 수행 : **이진 탐색을 활용**하여 가능한 **값의 범위를 조정하면서 최적의 값을 찾는다.**

   - 만약 특정 값이 조건을 만족한다면, 더 나은 해를 찾기 위해 범위를 조정한다.
   - 조건을 만족하지 않는다면, 다른 범위를 탐색한다.

## 파라메트릭 서치(Parametric Search) 알고리즘 코드 구조([백준 2805. 나무 자르기](https://www.acmicpc.net/problem/2805))

```javascript
function solution(N, M, trees) {
  let left = 0;
  let right = Math.max(...trees);
  let answer = 0;

  while (left <= right) {
    let total = 0; // 절단기로 자른 나무의 총합
    let mid = Math.floor((left + right) / 2);

    // 나무를 현재 절단기로 자름
    for (let i = 0; i < N; i++) {
      if (trees[i] > mid) {
        total += trees[i] - mid; // 자른 나무의 길이를 저장함
      }
    }

    if (total >= M) {
      answer = Math.max(answer, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
```
