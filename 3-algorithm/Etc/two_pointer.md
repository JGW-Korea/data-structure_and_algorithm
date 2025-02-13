![투 포인터](/assets/images/algorithm/etc/two_pointer/two_pointer.webp)

> 투 포인터의 연속적인 구간은 대부분 정렬된 배열을 의미 (즉, 순차적인 데이터)

투 포인터(Two Pointer) 알고리즘은 **일차원 배열에서 두 개의 포인터를 사용하여 특정 조건을 만족하는 부분 구간을 효율적으로 탐색하는 알고리즘**이다. 주로 **연속적인 구간을 계산**하거나, **특정 조건을 만족하는 쌍(Pair)을 찾는 데 활용**된다.

#### 투 포인터(Two Pointer) 알고리즘 장점

- 이중 반복문을 사용하면 $O(N^{2})$ 시간이 걸리는 문제를, 두 개의 포인터를 활용하여 $O(N)$ 시간에 해결할 수 있도록 최적화할 수 있는 방법을 제공한다.

#### 투 포인터(Two Pointer) 동작 과정

![투 포인터 동작 과정](/assets/images/algorithm/etc/two_pointer/two_pointer_works.webp)

```javascript
// 1. 첫 시작은 두 개의 포인터가 첫 인덱스를 가리킨다.
["p1, p2: 7", "1", "3", "5", "1", "4", "2", "2", "8"];

count = 0;
partialSum = 7;
p1 = 0;
p2 = 0;

// 2. 합이 10보다 작기 때문에 p2 포인터를 한 칸 증가시킨다.
["p1: 7", "p2: 1", "3", "5", "1", "4", "2", "2", "8"];

count = 0;
partialSum = 8;
p1 = 0;
p2 = 1;

// 3. 합이 10보다 작기 때문에 p2 포인터를 한 칸 증가시킨다.
["p1: 7", "1", "p2: 3", "5", "1", "4", "2", "2", "8"];

count = 0;
partialSum = 11;
p1 = 0;
p2 = 2;

// 4. 합이 10보다 크기 때문에 p1 포인터를 한 칸 증가시킨다.
["7", "p1: 1", "p2: 3", "5", "1", "4", "2", "2", "8"];

count = 0;
partialSum = 4;
p1 = 1;
p2 = 2;

// 5. 합이 10보다 작기 때문에 p2 포인터를 한 칸 증가시킨다.
["7", "p1: 1", "3", "p2: 5", "1", "4", "2", "2", "8"];

count = 0;
partialSum = 9;
p1 = 1;
p2 = 3;

// 6. 합이 10과 같기 때문에 count를 1증가하고, p1 포인터를 한 칸 증가시킨다.
["7", "p1: 1", "3", "5", "p2: 1", "4", "2", "2", "8"];

count = 1;
partialSum = 10;
p1 = 1;
p2 = 4;

// ... 이 과정을 p1 포인터가 배열의 길이보다 같거나 클때까지 반복한다.
// count의 결과는 3이 나온다.
```

<br />

## 투 포인터(Two Pointer) 코드 구조([백준 3273. 두 수의 합](https://www.acmicpc.net/problem/3273))

```javascript
function solution(n, numbers, target) {
  let answer = 0; // 문제의 조건을 만족하는 쌍의 개수

  // 투 포인터 알고리즘을 위한 두 개의 포인터
  let p1 = 0;
  let p2 = n - 1;

  while (p1 < p2) {
    let sum = numbers[p1] + numbers[p2];

    // 두 수의 합이 x와 같을 경우
    if (sum === target) {
      answer += 1;
      p2 -= 1;
    }

    // 두 수의 합이 x보다 클 경우
    if (sum > target) p2 -= 1;
    else {
      p1 += 1;
    }
  }

  return answer;
}
```
