```javascript
// 중복 순열 (중복을 허용하는 순열)
const N = 3;
const R = 2;
const permutaion = new Array(R).fill(0);

// 중복 순열 로직
function makePermutaion(currentLength) {
  // 순열의 길이가 R과 같을 경우
  if (currentLength === R) {
    console.log(permutaion.join(" "));
    return;
  }

  // 중복을 허용하기 때문에 따로 사용 유무를 판별하지 않는다.
  for (let i = 1; i <= N; i++) {
    permutaion[currentLength] = i;
    makePermutaion(currentLength + 1);
  }
}

makePermutaion(0);
```

```javascript
// 중복 제외 순열
const N = 3;
const R = 2;
const permutaion = new Array(R).fill(0);
const isUsed = new Array(N + 1).fill(0);

function makePermutaion(currentLength) {
  // 순열의 길이가 R과 같을 경우
  if (currentLength === R) {
    console.log(permutaion.join(" "));
    return;
  }

  // 중복을 허용하지 않기 때문에 사용 유무를 판별한다.
  for (let i = 1; i <= N; i++) {
    if (!isUsed[i]) {
      permutaion[currentLength] = i;
      isUsed[i] = 1;
      makePermutaion(currentLength + 1);
      isUsed[i] = 0;
    }
  }
}

makePermutaion(0);
```

#### 중복 순열(Permutaion with Repetition) : 서로 다른 N개의 요소 중에서 R개를 선택하여, 중복을 허용하면서 순서를 고려하여 나열하는 방법을 의미한다.

- 중복된 요소의 선택이 가능하므로, 총 경우의 수는 $N^{R}$ 이다.

<br />

#### 중복 제외 순열 : 서로 다른 N 개의 요소 중에서 R 개를 선택하여, 중복 없이 순서를 고려하여 나열하는 방법을 의미한다.

- 같은 요소를 여러 번 선택할 수 없으며, 총 경우의 수는 $P(N, R) = \frac{N!}{(N - R)!}$ 이다.
