![소수](/assets/images/algorithm/math/prime.webp)

소수(Prime Number)란 **1과 자기 자신을 제외한 다른 어떤 자연수로도 나누어 떨어지지 않는 1보다 큰 자연수를 의미**한다.

<br />

## 코드로 소수(Prime Number) 표현 방법

### I. 선형 탐색을 활용한 소수 판별 방법 → $O(N)$

![선형 탐색을 활용한 소수 판별 방법](/assets/images/algorithm/math/prime_linear.webp)

```javascript
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
```

- 선형 탐색을 활용하여 **2부터 $N - 1$까지의 숫자를 순차적으로 확인**하며, N이 나누어 떨어지는지 검사하는 방법

### II. 제곱근을 활용한 소수 판별 방법 → $O(sqrt(N))$

<img src="/assets/images/algorithm/math/prime_sqrt.webp" alt="제곱근을 활용한 소수 판별 방법" width="287.97px" />

```javascript
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
```

- 소수는 **약수가 항상 자신의 제곱근 이하에 존재한다는 특징을 이용**하여, N의 제곱근까지의 수만 확인하여 소수를 판별하는 방법

### III. 에라토스테네스의 체를 활용한 소수 판별 방법 → $O(N log N)$

![에라토스테네스의 체를 활용한 소수 판별 방법](/assets/images/algorithm/math/prime_sieve_of_eratosthenes.webp)

```javascript
function getPrime(num) {
  const prime = new Array(num + 1).fill(true);
  prime[0] = prime[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (prime[i]) {
      for (let j = i * i; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime
    .map((number, idx) => (number ? idx : null))
    .filter((number) => number !== null);
}
```

- 고대 그리스 수학자 에라토스테네스가 고안한 소수 판별 알고리즘
- 소수를 찾는 방법 중 가장 효율적이고 널리 사용되는 방식
- 에라토스테네스의 체는 **1 ~ N 까지 존재하는 모든 소수를 한 번에 판별할 때 가장 효과적인 알고리즘**
