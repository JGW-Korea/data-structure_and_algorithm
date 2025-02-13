![재귀 함수](/assets/images/algorithm/etc/recursion/recursion.png)

[재귀(Recursion) 함수](./recursion.md)는 **자기 자신을 직접 또는 간접적으로 호출하는 함수를 의미**한다. **일반적으로 특정 문제를 더 작은 하위 문제로 나누어 해결할 때 사용**된다.

#### 재귀 함수(Recursion) 특징

- **재귀 호출(Recursion Call)** : **재귀 함수를 호출하는 명령줄**을 의미한다.
- 함수 호출은 실행 환경의 콜 스택(Call Stack)에 저장되므로, **스택(Stack) 자료구조와 동일한 방식으로 동작**한다.
- **반복문을 대신하여 특정 문제를 해결하는 데 사용**되며, 함수형 프로그래밍에서는 반복문 대신 재귀를 활용하는 경우가 많다.
- 재귀 함수는 **종료 조건(Base Case)을 명시하지 않으면 무한 루프(Infinity Loop)에 빠져 스택 오버플로우(Stack Overflow)가 발생할 수 있다.**

#### [JavaScript 재귀 함수](https://dramatic-jasmine-13a.notion.site/Recursion-Function-13e88bd9c3fa81b58b9fdbfd1d471cd2?pvs=74) 특징

- 콜 스택(Call Stack)의 범위는 대부분의 프로그래밍 언어에서 제한된 크기를 가진다.

  - JavaScript의 콜 스택(Call Stack)의 범위는 실행 환경(브라우저, Node.js)마다 제공해주는 크기가 다르다.
  - 기본적으로 10,000 ~ 100,000번 호출할 수 있는 크기를 제공한다. _<span style="color: red;">크롬(Chrome) 브라우저 경우 10,000개로 제한되어있음</span>_
  - 콜 스택(Call Stack) 범위를 넘어갈 경우 스택 오버플로우가 발생하며, 자바스크립트에서 `RangeError: Maximum call stack size exceeded` 에러가 발생한다.

- 재귀 함수 콜 스택(Call Stack) 최척화 기법인 꼬리 재귀(Tail Recursion)를 제공하지 않는다.

  - 꼬리 재귀(Tail Recursion) : 재귀 함수의 성능 개선 방법 중 하나로, 재귀 호출을 반복문처럼 변환하여 스택 사용량을 줄일 수 있다.
  - 이로 인해, 자바스크립트에서의 재귀 함수는 성능 개선이 어렵기 때문에 재귀 함수의 성능이 다른 프로그래밍 언어에 비하여 좋지 않다.

<br />

## 재귀(Recursion) 함수 구조

```javascript
function factorial(num) {
  // 1. 종료 조건(Base Case)
  if (num <= 1) {
    return 1;
  }

  // 2. 유도 부분(Inductive Part)
  return num * factorial(num - 1);
}
```

#### I. 종료 조건(Base Case)

- 종료 조건(Base Case)이란 재귀 호출을 중단하고 재귀 함수가 종료되는 조건을 의미한다.
- 종료 조건이 성립되지 않을 경우 콜 스택 범위가 넘쳐버려 스택 오버플로우(Stack Overflow) 또는 무한 루프(Infinity Loop)에 빠질 수 있다.

#### II. 유도 부분(Inductive Part)

- 유도 부분(Inductive Part)은 재귀 함수가 자기 자신을 호출하여 문제를 더 작은 부분으로 나누는 부분을 의미한다.
- 유도 부분을 통해 입력이 점점 작아지면서 종료 조건(Base Case)에 도달할 수 있도록 설계해야 한다.

<br />

## 재귀(Recursion) 함수 참고사항

#### I. 재귀 함수의 매개변수

- 재귀 함수의 매개변수는 어떤 값을 받아야 하는지와 어디까지 계산한 후 다음 재귀 호출로 넘겨줄지를 명확하게 정의해야 한다.

#### II. 재귀 함수 코드는 반복문으로 대체 가능

- 모든 재귀 함수는 반복문을 사용하여 동일한 동작을 하는 코드로 대체할 수 있다.
- 그럼에도 불구하고 재귀 함수를 사용하는 이유는 코드를 간결하고 직관적으로 작성할 수 있기 때문이다.
- 하지만, 반복문을 재귀 함수로 대체하면 메모리 사용량이 증가하고 실행 시간이 길어질 수 있어 성능이 저하될 위험이 있다.

#### III. 동일한 연산을 중복으로 계산

![재귀 함수 피보나치 수열](/assets/images/algorithm/etc/recursion/recursion_fibonacci.webp)

- 재귀 함수는 동일한 연산으로 여러 번 수행할 수 있어 성능이 저하될 위험이 있다.
- 예시: 피보나치 수열(재귀 구현)
  - 재귀 함수를 이용한 피보나치 수열 계산은 같은 값을 여러 번 반복해서 계산하는 문제가 발생한다.
  - 이로 인해, 재귀 방식의 피보나치 수열 계산은 시간 복잡도가 지수적으로 증가하여 비효율적일 수 있다.
  - 이러한 문제를 해결하려면 이미 계산한 값을 저장하여 재사용하는 메모이제이션 기법인 다이나믹 프로그래밍(DP)을 활용할 수 있다.

```javascript
// 재귀를 이용한 피보나치 수열
function recursionFibonnaci(num) {
  if (num <= 1) return 1;
  return recursionFibonnaci(num - 1) + recursionFibonnaci(num - 2);
}

// DP를 이용한 피보나치 수열
function dpFibonnaci(N) {
  const dp = new Array(N + 1).fill(0);

  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;

  for (let i = 4; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[N];
}
```
