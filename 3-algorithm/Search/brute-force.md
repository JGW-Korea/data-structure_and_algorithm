![브루트 포스](/assets/images/algorithm/search/brute-force.png)

브루트 포스(Brute-Force) 알고리즘은 가능한 모든 경우의 수를 탐색하여 결과를 도출하는 완전 탐색 기법 중 하나이다.

#### 브루트 포스(Brute-Force) 특징

- 브루트 포스 알고리즘은 가능한 모든 경우의 수를 탐색하므로 100% 정확한 결과를 도출할 수 있다.
- 그러나 모든 경우의 수를 확인해야 하므로 시간 복잡도가 매우 높아질 수 있다.

#### 브루트 포스(Brute-Force) 알고리즘 코드 구조([백준 2309. 일곱 난쟁이](https://www.acmicpc.net/problem/2309))

```javascript
function solution(heights) {
  const totalHeights = heights.reduce((prev, curr) => prev + curr, 0);

  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      if (totalHeights - (heights[i] + heights[j]) === 100) {
        return heights
          .filter((height) => height !== heights[i] && height !== heights[j])
          .sort((a, b) => a - b)
          .join("\n");
      }
    }
  }
}
```
