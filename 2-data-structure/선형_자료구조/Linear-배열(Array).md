![배열 배경 이미지](/assets/images/data_structor/array/array.webp)

배열(Array)이란 **연속적인 메모리 공간에 데이터를 순서대로 저장하는 구조를 가진 선형 자료구조**이다.

- 배열에 포함된 원소는 순서대로 인덱스(Index)가 부여된다. _인덱스(Index)는 Zero-based Numbering에 해당_
- 인덱스(Index)를 통해 특정 위치의 원소를 가져오거나 수정할 수 있다.

**배열의 특징**

1. 배열은 **고정된 크기**를 가지며, 일반적으로 크기를 늘릴 수 없다.

- 단, JavaScript와 같은 대부분의 스크립트 언어에서는 배열의 크기가 **동적으로 조절**된다.

2. 원하는 원소의 인덱스(Index)를 알고 있다면 $O(1)$ 시간 복잡도로 원소를 찾을 수 있다.
3. 원소를 삭제하면 해당 인덱스(Index) 위치에 빈자리가 생기게 되어, 삭제된 원소를 기준으로 뒤에 있는 원소들이 앞으로 이동해야 한다.

## 배열 기능(CRUD) 구현

### 배열의 요소 확인 및 수정(Read, Update)

1. 요소의 인덱스(Index)를 알고 있는 경우 - $O(1)$

```jsx
const arr = [1, 2, 3, 4, 5];
arr[2] = arr[2] * 100;

console.log(arr[2]);
```

<br />

2. 요소의 인덱스(Index)를 모르고 있는 경우 - $O(n)$

```jsx
let arr = [1, 2, 3, 4, 5];
let idx = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    arr[i] = arr[i] * 100;
    idx = i;
    break;
  }
}

console.log(arr[idx]);
```

<br />

### 배열의 요소 삭제(Delete)

<br />

### 배열 요소 추가(Create)
