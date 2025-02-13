![슬라이딩 윈도우](/assets/images/algorithm/etc/sliding_window/sliding_window.webp)

슬라이딩 윈도우(Sliding Window) 알고리즘은 고정된 크기의 윈도우(창)를 이동시키면서 해당 구간의 데이터를 효율적으로 처리하는 알고리즘 기법이다. 주로, 배열이나 리스트와 같은 선형 자료구조에서 연속적인 구간을 다룰 때 활용된다.

#### 슬라이딩 윈도우(Sliding Window) vs [투 포인터(Two Pointer)](./two_pointer.md)

<br />

## 슬라이딩 윈도우(Sliding Window) 알고리즘 코드 구조([백준 12891. DNA 비밀번호](https://www.acmicpc.net/problem/12891))

```javascript
function solution(S, P, pwd, count) {
  const check = new Array(4).fill(0); // 부분 문자열에 포함된 DNA 비밀번호 개수

  function checkCounting() {
    // 안전한 DNA 비밀번호 조합에 포함되는지 확인하는 함수
    for (let i = 0; i < 4; i++) {
      if (check[i] < count[i]) return false;
    }

    return true;
  }

  for (let i = 0; i < P; i++) {
    // Step 01. 길이가 P인 부분 집합의 초기 배열 설정
    switch (
      pwd[i] // 초기 배열을 설정하면서 부분 문자열의 첫 번째부터 마지막까지의 구간을 설정한다.
    ) {
      case "A":
        check[0] += 1;
        break;

      case "C":
        check[1] += 1;
        break;

      case "G":
        check[2] += 1;
        break;

      case "T":
        check[3] += 1;
        break;
    }
  }

  let answer = 0; // 민호가 만들 수 있는 비밀번호의 개수

  if (checkCounting()) answer += 1;

  let start; // 부분 문자열의 제일 앞의 요소를 제거하기 위한 index 위치

  // Step 03. 1번, 2번 과정을 계속 반복
  for (let end = P; end < S; end++) {
    start = end - P; // 부분 문자열의 제일 앞 index 계산

    // Step 02. 부분 문자열의 제일 앞의 요소 제거 및 다음 원소 포함
    // Step 02-1. 부분 문자열의 제일 앞의 요소 제거
    switch (pwd[start]) {
      case "A":
        check[0] -= 1;
        break;

      case "C":
        check[1] -= 1;
        break;

      case "G":
        check[2] -= 1;
        break;

      case "T":
        check[3] -= 1;
        break;
    }

    // Step 02-2. 부분 문자열의 다음 원소 포함
    switch (pwd[end]) {
      case "A":
        check[0] += 1;
        break;

      case "C":
        check[1] += 1;
        break;

      case "G":
        check[2] += 1;
        break;

      case "T":
        check[3] += 1;
        break;
    }

    if (checkCounting()) answer += 1;
  }

  return answer;
}
```

#### 슬라이딩 윈도우(Sliding Winodw) 동작 과정

![슬라이딩 윈도우 동작 과정 1](/assets/images/algorithm/etc/sliding_window/sliding_window_step_1.webp)
![슬라이딩 윈도우 동작 과정 2](/assets/images/algorithm/etc/sliding_window/sliding_window_step_2.webp)
![슬라이딩 윈도우 동작 과정 3](/assets/images/algorithm/etc/sliding_window/sliding_window_step_3.webp)

Step 01 : 길이가 3인 부분 집합의 초기 배열을 설정한다.
Step 02 : 이후 제일 앞의 요소를 제거한 후, 마지막 요소의 다음 원소를 부분 집합에 포함시킨다.
Step 03 : Step 01, Step 02 과정을 index가 배열의 마지막을 가리킬 때까지 반복한다.
