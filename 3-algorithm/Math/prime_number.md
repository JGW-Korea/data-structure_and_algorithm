![Prime Number](/assets/images/tips/math/prime_number/prime_number.webp)

**소수(Prime Number)** 란, **1과 자기 자신만을 약수로 가지는 양의 정수**를 의미한다.

## I. 소수(Prime Number) 알고리즘 - 특정 수가 소수인지 판별하는 방법

### 1. 선형 탐색을 활용한 소수 판별 방법

![선형 소수 판별](/assets/images/tips/math/prime_number/lenear-prime.webp)

```javascript
function isPrime(N) {
  for (let i = 2; i < N; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
```

- **선형 탐색**을 이용하여 **2부터 N - 1 까지의 모든 수로 나누어 떨어지는지 확인함으로써, N이 소수인지 판별하는 방법**이다.
- 시간 복잡도는 **$O(N)$** 이며, 수가 클수록, **비효율적**이다.

### 2. 제곱근을 활용한 소수 판별 방법

![제곱근 소수 판별](/assets/images/tips/math/prime_number/sqrt-prime.webp)

```javascript
function isSqrtPrime(N) {
  for (let i = 2; i * i < N + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
```

- **제곱근**을 이용하면, **2부터 $\sqrt{N}$ 이하의 수로만 나누어 떨어지는지 확인함으로써, N이 소수인지 판별하는 방법**이다.
- 시간 복잡도는 **$O(\sqrt{N})$** 이며, 소수가 아닌 수는 반드시 $\sqrt{N}$ 이하의 약수를 가지므로 **선형 탐색보다 훨씬 효율적**이다.

## II. 소수(Prime Number) 알고리즘 - 특정 수 이하의 모든 소수를 구하는 방법

### 1. 에라토스테네스의 체(Sieve of Eratosthenes)

![제곱근 소수 판별](/assets/images/tips/math/prime_number/sieve_of_eratosthenes.webp)

```javascript
function getPrime(N) {
  const prime = new Array(N + 1).fill(true);
  prime[0] = false;

  for (let i = 2; i * i < N + 1; i++) {
    if (prime[i]) {
      for (let j = i * i; j < N + 1; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter(Boolean);
}
```

- **에라토스테네스의 체**는 주어진 수 N 이하의 **모든 소수를 효율적으로 구하는 대표적인 알고리즘**이다.
- 초기에는 0부터 N까지의 모든 수를 소수라고 가정한 뒤, 2부터 시작하여 해당 수의 배수를 모두 제거하면서 **소수가 아닌 수를 걸러낸다.**
- 한 수 i의 배수 제거는 $i^{2}$ 부터 시작해도 충분하며, 그보다 작은 배수는 **이미 이전 단계에서 제거되었기 때문**이다.
- 시간 복잡도는 **$O(N log log N)$** 으로 **매우 효율적**이다.
