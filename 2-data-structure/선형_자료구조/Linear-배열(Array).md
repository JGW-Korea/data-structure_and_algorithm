![배열 배경 이미지](/assets/images/data_structor/array/array.webp)

> ⚠️ 원소의 추가와 삭제가 반복적으로 발생하는 로직에서는 배열 사용이 비효율적이므로 권장되지 않음

배열(Array)이란 **연속적인 메모리 공간에 데이터를 순서대로 저장하는 구조를 가진 선형 자료구조**이다.

- 배열에 포함된 원소는 순서대로 인덱스(Index)가 부여된다. _인덱스(Index)는 Zero-based Numbering에 해당_
- 인덱스(Index)를 통해 특정 위치의 원소를 가져오거나 수정할 수 있다.

**배열의 특징**

1. 배열은 **고정된 크기**를 가지며, 일반적으로 크기를 늘릴 수 없다.

- 단, JavaScript와 같은 대부분의 스크립트 언어에서는 배열의 크기가 **동적으로 조절**된다.

2. 원하는 원소의 인덱스(Index)를 알고 있다면 $O(1)$ 시간 복잡도로 원소를 찾을 수 있다.
3. 원소를 삭제하면 해당 인덱스(Index) 위치에 빈자리가 생기게 되어, 삭제된 원소를 기준으로 뒤에 있는 원소들이 앞으로 이동해야 한다.

## 배열 기능(CRUD) 구현

### 배열의 원소 확인 및 수정(Read, Update)

- 원소의 인덱스(Index)를 알고 있는 경우 - $O(1)$

```jsx
const arr = [1, 2, 3, 4, 5];
arr[2] = arr[2] * 100;

console.log(arr[2]);
```

<br />

- 원소의 인덱스(Index)를 모르고 있는 경우 - $O(n)$

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

### 배열의 원소 삭제(Delete)

- 배열 원소 삭제 과정
  ![배열 원소 삭제 과정 1](/assets/images/data_structor/array/array_delete_step_1.webp)
  ![배열 원소 삭제 과정 2](/assets/images/data_structor/array/array_delete_step_2.webp)
  ![배열 원소 삭제 과정 3](/assets/images/data_structor/array/array_delete_step_3.webp)

1. 삭제할 원소의 인덱스(Index)를 찾는다.
1. 해당 인덱스(Index)에 있는 위치의 원소를 삭제한다.
1. 삭제된 원소 뒤에 있는 모든 원소가 앞으로 한 칸씩 이동하여, 삭제된 인덱스(Index) 위치의 빈자리를 채운다.
1. 이러한 이동 작업 때문에 삭제 연산의 시간 복잡도는 $O(n)$이 된다.
   - 배열의 특성상, 삭제하고자 하는 원소의 인덱스(Index)가 배열의 시작 부분에 가까울수록, 더 많은 원소를 이동해야 하므로 시간이 더 많이 소요된다.

<br />

- 마지막 인덱스 위치의 원소를 삭제할 경우 - $O(1)$

```jsx
const arr = [1, 2, 3, 4, 5];
console.log("길이:", arr.length, "배열:", arr);
arr.pop();
console.log("길이:", arr.length, "배열:", arr);
```

<br />

- 중간 인덱스 위치의 원소를 삭제할 경우 - $O(n)$

```jsx
// 삭제하고 싶은 원소: 4
const arr = [1, 2, 3, 4, 5];
console.log("길이:", arr.length, "배열:", arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    arr.splice(i, 1);
    break;
  }
}

console.log("길이:", arr.length, "배열:", arr);
```

<br />

- 첫 인덱스 위치의 원소를 삭제할 경우 - $O(n)$

```jsx
const arr = [1, 2, 3, 4, 5];
console.log("길이:", arr.length, "배열:", arr);
arr.shift();
console.log("길이:", arr.length, "배열:", arr);
```

<br />

### 배열 원소 추가(Create)

- 배열 원소 추가 과정
  ![배열 원소 추가 과정 1](/assets/images/data_structor/array/array_push_step_1.webp)
  ![배열 원소 추가 과정 2](/assets/images/data_structor/array/array_push_step_2.webp)
  ![배열 원소 추가 과정 3](/assets/images/data_structor/array/array_push_step_3.webp)

1. 추가할 원소의 인덱스(Index)를 찾는다.
1. 해당 인덱스(Index)에 있는 위치의 원소를 기준으로 뒤에 있는 원소들을 모두 오른쪽으로 한 칸씩 이동시킨다.
1. 빈자리가 생긴 인덱스(Index) 위치에 원소를 삽입한다.
1. 이러한 이동 작업 때문에 추가 연산의 시간 복잡도는 $O(n)$이 된다.
   - 배열의 특성상, 추가하고자 하는 원소의 인덱스(Index)가 배열의 시작 부분에 가까울수록, 더 많은 원소를 이동해야 하므로 시간이 더 많이 소요된다.

<br />

- 마지막 인덱스 위치에 원소를 추가할 경우 - $O(1)$

```jsx
const arr = [1, 2, 3, 4, 5];
console.log("길이:", arr.length, "배열:", arr);
arr.push(100);
console.log("길이:", arr.length, "배열:", arr);
```

<br />

- 중간 인덱스 위치에 원소를 추가할 경우 - $O(n)$

```jsx
// index 3번 위치에 100을 추가
const arr = [1, 2, 3, 4, 5];
console.log("길이:", arr.length, "배열:", arr);

for (let i = 0; i < arr.length; i++) {
  if (i === 3) {
    arr.splice(i, 0, 100); // index 3번 위치에 값을 추가
    break;
  }
}

console.log("길이:", arr.length, "배열:", arr);
```

<br />

- 첫 인덱스 위치에 원소를 추가할 경우 - $O(n)$

```jsx
const arr = [1, 2, 3, 4, 5];
console.log("길이:", arr.length, "배열:", arr);
arr.unshift(100);
console.log("길이:", arr.length, "배열:", arr);
```
