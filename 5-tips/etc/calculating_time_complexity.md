## I. 선형 시간 복잡도를 가지는 코드 $O(N)$

```javascript
for (let i = 1; i <= N; i++) {
  // ...
}
```

<br />

## II. 로그 시간 복잡도를 가지는 코드 $O(log N)$

```javascript
for (let i = 1; i <= N; i *= 2) {
  // ...
}
```

<br />

## III. 선형 로그 시간 복잡도를 가지는 코드 $O(N log N)$

```javascript
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j *= 2) {
    // ...
  }
}
```

<br />

## IV. 이차 시간 복잡도를 가지는 코드 $O(N^{2})$

```javascript
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    // ...
  }
}
```

<br />

## V. 지수 시간 복잡도를 가지는 코드 $O(2^{N})$

> 지수 시간, 팩토리얼 시간 복잡도를 가지는 코드는 특정한 상황이 아닐 경우 가급적 사용을 하면 안된다.

```javascript
// N = 25, O(2^{25}) = 약 3천만 시간 소요
function fibonnaci(N) {
  if (N <= 1) return 1;
  return fibonnaci(N - 1) + fibonnaci(N - 2);
}
```

<br />

## VI. 팩토리얼 시간 복잡도를 가지는 코드 $O(N!)$

> 지수 시간, 팩토리얼 시간 복잡도를 가지는 코드는 특정한 상황이 아닐 경우 가급적 사용을 하면 안된다.

```javascript
// N = 12, O(12!) = 약 5억만 시간 소요
function factorial(N) {
  if (N <= 1) return 1;
  return N * factorial(N - 1);
}
```
