```javascript
// 누적합 로직
function prefix(n, numbers) {
  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + numbers[i - 1];
  }

  return dp[n]; // 최종 누적합 반환
}

const numbers = [1, 2, 3, 4, 5];
console.log(prefix(numbers.length, numbers));
```

> 누적합을 계산하는 방법 중 하나로 동적 계획법(Dynamic Programming, DP)을 사용할 수 있으며, 이는 이전까지의 합을 저장하고 이를 이용해 다음 값을 계산하는 방식으로 동작한다.

누적합(Prefix Sum)이란 주어진 숫자 배열에서 각 위치까지의 합을 미리 계산하여, 특정 구간의 합을 빠르게 구할 수 있도록 하는 기법이다.

- 예를 들어, 주어진 수열이 `[1, 2, 3, 4, 5]`일 경우 해당 수열의 누적합은 `[1, 3, 6, 10, 15]`가 된다.
