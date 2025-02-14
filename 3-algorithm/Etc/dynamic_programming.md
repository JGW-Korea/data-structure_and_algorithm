![다이나믹 프로그래밍](/assets/images/algorithm/etc/dynamic_programming/dp.png)

다이나믹 프로그래밍(DP, Dynamic Programming) 알고리즘은 주어진 문제를 작은 부분 문제로 나누고, 각 부분 문제의 결과를 저장하여 중복 계산을 피함으로써 효율적으로 해결하는 최적화 기법이다.

#### 다이나믹 프로그래밍(Dynamic Programming) 특징

- 다이나믹 프로그래밍은 특정한 구현 방식이 정해져 있는 것이 아니라, 부분 문제의 결과를 저장하여 중복 계산을 피하는 방식으로 문제를 해결하는 기법이다.
- 메모리를 비교적 많이 사용하지만, 대부분의 경우 $O(N)$ 이하의 시간 복잡도로 빠른 성능을 제공한다.
- 다이나믹 프로그래밍은 메모이제이션(Memoization)과 타뷸레이션(Tabulation) 두 가지 방식으로 구현할 수 있다.

<br />

## 메모이제이션과 타뷸레이션

### 메모이제이션(Memoization) - 상향식 접근법(Top-Down)

```javascript
function fibonnaci(n, memo = {}) {
  if (n in memo) return memo[n]; // 이미 계산된 값이 있으면 반환
  if (n <= 1) return n;

  // 재귀 호출 후 저장
  memo[n] = fibonnaci(n - 1, memo) + fibonnaci(n - 2, memo);
  return memo[n];
}
```

- 메모이제이션 기법은 재귀 함수(Recursion Function)와 캐시(Cache)를 활용하여 구현한다.
- 이 기법은 큰 문제를 해결하기 위해 필요한 작은 문제들을 필요할 때만 재귀 호출로 해결하고, 그 결과를 저장하여 동일한 연산을 반복하지 않도록 한다.
- 또한, 콜 스택(Call Stack)을 사용하므로, 자연스럽게 큰 문제에서 작은 문제로 내려가며 해결하는 방식을 따른다.
- 큰 문제를 해결하는 과정에서 부분 문제(Sub-problems)의 결과를 저장하여, 동일한 부분 문제가 다시 발생했을 때 불필요한 연산을 피하고 저장된 값을 재사용함(메모이제이션)으로써 성능을 최적화한다.

### 타뷸레이션(Tabulation) - 하향식 접근법(Bottom-Up)

```javascript
function fibonnaci(N) {
  const dp = new Array(N + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[N];
}
```

    •	방식: 반복문(iteration) + 저장(cache)
    •	접근법: Bottom-Up (하향식)
    •	작은 문제를 먼저 해결하고, 이를 활용하여 점진적으로 큰 문제를 해결하는 방식입니다.
    •	반복문을 사용하여 작은 값부터 차례로 계산하여 최종 값을 얻습니다.

문제를 부분 문제로 나눈 다음 작은 문제부터 차례대로 그 결과를 테이블에 저장하는 방식을 말한다.
이렇게 저장된 테이블을 기반으로 큰 문제의 해결을 단계적으로 구축해 나간다.
