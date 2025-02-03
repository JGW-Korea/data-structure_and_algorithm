![선형 탐색](/assets/images/algorithm/search/linear_search.webp)

```javascript
let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10 + 1));
let flag = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    console.log("3의 위치: " + i);
    flag = true;
    break;
  }
}

console.log(flag ? "3이 존재" : "3이 존재하지 않음");
```

선형 탐색(Linear Search) 알고리즘은 배열(Array) 또는 연결 리스트(Linked List)의 데이터를 **처음부터 끝까지 순차적으로 값을 하나씩 비교**하면서 **찾고자 하는 값을 발견할 때까지 선형으로 탐색**하는 알고리즘이다.

#### 선형 탐색(Linear Search) 특징

- 정렬되지 않은 배열 또는 연결 리스트에서도 사용할 수 있다.
- 데이터의 순서와 상관없이 탐색이 가능하다.
- 최악의 경우 모든 요소를 확인해야 하므로 시간 복잡도는 $O(N)$ 이다.
- 데이터가 많아질수록 탐색 시간이 선형에 비례하기 때문에 비효율적인 탐색 방법일 수 있다.
