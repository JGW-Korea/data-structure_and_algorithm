<img src="/assets/images/algorithm/search/backtracking.png" alt="백트래킹" width="320px" />

백트래킹(Backtracking) 알고리즘은 가능한 **모든 경우의 수를 탐색하는 알고리즘**으로, **해답을 구성해 나가는 과정에서 유망하지 않다고 판단되는 경우 즉시 되돌아가(Backtrack) 탐색을 줄이는 방식**으로 **최적의 해**를 찾는 기법이다.

#### 백트래킹(Backtracking) 특징

> 재귀 방식이 일반적이지만, JS에서는 재귀 호출의 성능이 좋지 않으므로 스택을 이용한 DFS 방식이 더 적합할 수 있음

- 백트래킹은 **모든 경우의 수를 탐색하는 브루트 포스(Brute Force) 알고리즘**과 달리, **불필요한 탐색을 줄이며 효율적으로 해결책**을 찾는다.
- 백트래킹 알고리즘 특성상 **탐색 중 조건을 만족하지 않으면 즉시 이전 단계로 되돌아가야 하기 때문에 DFS를 주로 사용하여 구현**한다. 단, 탐색 과정 중 순환(Cycle) 가능성이 있는 경우 BFS 알고리즘을 활용하기도 한다.

- **가지치기(Pruning) 기법**을 사용해 탐색할 필요가 없는 경로를 미리 차단하여 성능을 향상시킨다.

<br />

## 백트래킹 알고리즘 구현 방법

```javascript
// 백트래킹(Backtracking) 알고리즘 기본 구조
function backtracking(N, M) {
  const number = new Array(M).fill(0); // M 길이의 정수를 담는 배열
  const isUsed = new Array(N + 1).fill(false); // 1 ~ N 까지의 정수 사용 유무 (1-based index)

  const result = [];

  function dfs(currentLength) {
    if (currentLength === M) {
      // M개의 숫자를 모두 선택한 경우
      result.push([...number].join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!isUsed[i]) {
        number[currentLength] = i;
        isUsed[i] = true;
        dfs(currentLength + 1);
        isUsed[i] = false; // 백트래킹 (원상 복구)
      }
    }
  }

  dfs(0);

  return result.join("\n");
}

// 테스트 실행
console.log(backtracking(3, 2));
```

- 모든 가능한 경우의 수를 탐색할 수 있도록 코드를 작성해야 한다.
- 문제에서 요구하는 특정 조건을 만족하는 경우에만 탐색을 계속하고, 그렇지 않은 경우에는 중단해야 한다.
- 해당 경로가 정답이 될 가능성이 없으면 즉시 탐색을 종료하여 불필요한 연산을 줄인다.
