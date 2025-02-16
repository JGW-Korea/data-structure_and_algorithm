### 중복 조합(Combination with Replacement)

```javascript
// 중복 조합 (중복을 허용하지만, 선택 순서는 고려하지 않는다. -> 즉, (1, 2)과 (2, 1)은 동일한 조합으로 간주)
const N = 3;
const R = 2;

const combination = new Array(R).fill(0);

function makeCombination(currentIndex, currentLength) {
  if (currentLength === R) {
    console.log(combination.join(" "));
    return;
  }

  for (let i = currentIndex; i <= N; i++) {
    combination[currentLength] = i;
    makeCombination(i, currentLength + 1);
  }
}

makeCombination(1, 0);
```

- 집합 N에서 R개의 원소를 선택할 때, 같은 원소를 여러 번 선택할 수 있지만, 순서는 고려하지 않는 조합을 의미한다.
- 즉, (1, 2)과 (2, 1)은 동일한 조합으로 간주한다.
- 총 경우의 수는 $H(n, r) = \binom{n + r - 1}{r} = \frac{(n + r - 1)!}{r!(n - 1)!}$ 이다.

<br />

### 중복 제외 조합

```javascript
// 중복 제외 조합
const N = 3;
const R = 2;

const combination = new Array(R).fill(0);

function makeCombination(currentIndex, currentLength) {
  if (currentLength === R) {
    console.log(combination.join(" "));
    return;
  }

  for (let i = currentIndex; i <= N; i++) {
    combination[currentLength] = i;
    makeCombination(i + 1, currentLength + 1);
  }
}

makeCombination(1, 0);
```

- 집합 N에서 R개의 원소를 선택할 때, 같은 원소를 여러 번 선택할 수 없으며, 순서는 고려하지 않는 조합을 의미한다.
- 총 경우의 수는 $C(n, r) = \binom{n}{r} = \frac{n!}{r!(n - r)!}$ 이다.
