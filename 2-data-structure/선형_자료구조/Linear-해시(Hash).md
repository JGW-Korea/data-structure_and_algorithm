![해시 배경 이미지](/assets/images/data_structor/hash/hash_thumbnail.jpg)

### 해시(Hash) 관련 용어 정리

#### 1. 해시(Hash):

- 해시(Hash)란 데이터를 고유한 숫자 값으로 변환(임의의 데이터를 고정된 길이로 변환)하여 특정 데이터의 존재 여부를 확인하거나 데이터를 효율적으로 검색할 수 있도록 하는 과정을 의미한다.
- 해시는 해시 함수(Hash Function)와 해시 테이블(Hash Table)을 포함하는 포괄적인 개념으로 볼 수 있다.
- 엄밀히 말하면, 해시는 "데이터를 변환한 결과 값" 또는 "변환 과정" 자체를 가리킨다.

<br />

#### 2. 해시 함수(Hash Function):

![해시 함수 이미지](/assets/images/data_structor/hash/hash_function.webp)

- 해시 함수(Hash Function)란, 입력 데이터를 일정한 규칙에 따라 고정된 크기의 해시 값(Hash Value)으로 변환하는 함수이다.
- 해시 함수는 충돌(Collision)을 최소화하고, 입력값이 다를 경우 서로 다른 해시 값을 생성하는 것이 중요하다.

<br />

#### 3. 해시 값(Hash Value):

- 해시 값(Hash Value)이란, 해시 함수를 통해 생성된 고정된 크기의 값으로, 원래 데이터의 대표 값(Key) 역할을 한다.
- 해시 값은 데이터 검색, 비교, 또는 저장 위치 결정 등에 사용된다.

<br />

#### 4. 해시 테이블(Hash Table):

![해시 테이블](/assets/images/data_structor/hash/hash_table.webp)

- 해시 테이블(Hash Table)이란, 해시 값을 이용해 데이터를 효율적으로 저장하고 검색할 수 있는 자료구조이다.
- 해시 테이블은 키(Key)와 값(Value)의 쌍으로 데이터를 관리하며, 키를 해시 함수에 입력하여 생성된 해시 값을 인덱스로 사용한다.
- 해시 값을 통해 해시 테이블에 데이터를 조회, 삽입, 삭제 연산은 모두 평균적으로 $O(1)$ 시간 복잡도를 가진다. _(최악의 경우는 아래 충돌에서 서술)_

**버킷(Bucket)**

- 해시 테이블에서 각 위치를 가리키는 단위를 버킷(Bucket)이라고 부른다.
- 각 버킷은 키(Key)-값(Value) 형태로 값을 저장하고 관리한다.

## 해시 테이블(Hash Table)의 문제점

### 1. 해시 충돌 _(Hash Collision)_

![해시 충돌](/assets/images/data_structor/hash/hash_collision.webp)

- 해시 충돌(Hash Collision)이란 서로 다른 키(Key)가 해시 함수를 통해 변환된 값이 동일한 해시 값(Hash Value)을 생성하는 경우를 의미한다.
- 해시 충돌이 발생하면 해시 테이블에 저장된 값이 의도치 않게 덮어씌워지거나, 검색 시 올바른 값을 반환하지 못할 수 있다.

### 2. 데이터 분포 불균형

- 해시 충돌 해결 방법을 사용하더라도, 해시 함수가 비효율적일 경우 특정 버킷에 데이터가 집중되는 현상을 의미한다.
- 데이터 분포가 고르게 이루어지지 않으면, 일부 버킷에서 검색 및 삽입의 성능이 저하될 수 있다.

## 해시 충돌(Hash Collision) 해결 방법

### 1. 선형 탐사법 _Linear Probing_

![해시 충돌 해결 방법 #1. 선형 탐사법](/assets/images/data_structor/hash/linear_probing.webp)

- 선형 탐사법(Linear Probing)이란 해시 충돌이 발생할 경우 옆으로 한 칸 이동하여 다음 버킷에 값을 저장하는 해시 충돌 해결 방법 중 하나이다.

**선형 탐사법(Linear Probing) 문제점**

- 선형 탐사법은 단순한 원리지만, 특정 영역에 데이터가 몰릴 수 있는 현상이 발생한다.

  - 예시: 이동한 버킷에서 또 충돌이 발생하면, 충돌이 발생하지 않을 때까지 반복 작업이 발생하기 때문이다.

- 선형 탐사법으로 인해 해시 테이블에 데이터 삽입 연산이 최악의 경우 $O(N)$ 시간 복잡도를 가지게 된다.

### 2. 제곱 탐사법 _Quadratic Probing_

![해시 충돌 해결 방법 #2. 제곱 탐사법](/assets/images/data_structor/hash/quadratic_probing.webp)

- 제곱 탐사법(Quadratic Probing)이란, 충돌이 발생한 횟수의 제곱만큼 옆으로 이동하여 값을 저장하는 해시 충돌 해결 방법 중 하나이다.

**제곱 탐사법(Quadratic Probing) 문제점**

- 선형 탐사법보다 데이터 분포 불균형 현상이 덜할뿐이지, 결국에는 데이터가 어느정도는 몰릴 수 있다.
- 또한, 충돌이 발생한 횟수의 제곱만큼 옆으로 이동하기 때문에 탐색 과정이 기하급수적으로 증가할 수 있다.

### 3. 이중 해싱 _Double Hashing Probing_

![해시 충돌 해결 방법 #3. 이중 해싱](/assets/images/data_structor/hash/double_hashing_probing.webp)

- 이중 해싱(Double Hashing Probing)이란, 해시 충돌이 발생할 경우 충돌이 발생한 해시 값(Hash Value)을 다른 해시 함수를 이용하여 새로운 해시 값을 생성하는 해시 충돌 해결 방법 중 하나이다.
- _1. 선형 탐사법(Linear Probing)_, _2. 제곱 탐사법(Quadratic Probing)_ 해시 충돌 해결 방법보다 데이터 분포 불균형 현상이 현저히 줄어들게 된다.

### 4. 분리 연결법 _Separate Chaining Probing_

![해시 충돌 해결 방법 #4. 분리 연결법](/assets/images/data_structor/hash/separate_chaining_probing.webp)

- 분리 연결법(Separate Chaining Probing)이란, 해시 테이블의 버킷의 값을 연결 리스트(Linked List)를 사용하여 충돌이 발생하면 리스트의 값을 생성하여 해시 충돌을 해결하는 방법이다.

**분리 연결법(Separate Chaining Probing) 문제점**

- 잘못된 해시 함수(Hash Function)으로 인해 해시 충돌이 자주 발생할 경우 최악의 경우 하나의 버킷의 값이 무한정으로 늘어날 수 있다.
