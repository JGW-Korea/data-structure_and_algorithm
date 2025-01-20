![연결리스트 배경 이미지](/assets/images/data_structor/linked_list/linked_list_thumbnail.webp)

> ⚠️ 원소의 조회가 반복적으로 발생하는 로직에서는 연결 리스트 사용이 비효율적이므로 권장되지 않음

연결 리스트(Linked List)란 **각 원소를 포인터로 연결하여 관리하는 선형 자료구조**이다.

- 포인터로 연결하여 관리: 각 원소는 자신의 데이터와 함께 다음 원소의 위치(주소)를 포함한다. 이를 통해 원소들이 논리적으로 연결된다.

**연결 리스트(Linked List) 용어**

- 노드(Node): 각 원소를 의미하며, 데이터 영역(원소가 저장하는 실제 데이터)과 포인터 영역(다음 노드의 위치)으로 구성된다.
- 헤드 노드(Head Node): 연결 리스트 원소 중 첫 번째 원소를 가리키는 용어
- 꼬리 노드(Tail Node): 연결 리스트 원소 중 마지막 원소를 가리키는 용어

**연결 리스트(Linked List) 특징 - _배열의 특징과 정반대_**

- 메모리가 허용하는 한 원소를 제한 없이 추가할 수 있다.
- 연결 리스트의 탐색 과정은 $O(N)$ 시간 복잡도가 소요된다.
- 연결 리스트의 원소 삽입과 삭제는 해당 위치를 알고 있는 경우 $O(1)$ 시간 복잡도가 소요된다.

## 연결 리스트(Linked List) 종류

**1. 단일 연결 리스트(Single Linked List)**

- 헤드 노드(Head Node)에서 꼬리 노드(Tail Node)까지 단방향으로 이어지는 연결 리스트
- 가장 단순한 형태를 가진 연결 리스트

<br />

**2. 이중 연결 리스트(Double Linked List)**
![이중 연결 리스트](/assets/images/data_structor/linked_list/DoublyLinkedList.png)

- 각 노드(Node)가 두 개의 포인터 영역(Pointer)을 가지며, 이전 노드와 다음 노드의 주소를 저장하는 형태를 가진 연결 리스트
- 양방향으로 연결되어 있어, 탐색 방향이 자유롭다.
- 단일 연결 리스트보다 자료구조의 크기가 조금 더 크다.

<br />

**3. 원형 연결 리스트(Circuler Linked List)**
![원형 연결 리스트](/assets/images/data_structor/linked_list/circuler_linked_list.png)

- 꼬리 노드(Tail Node)가 헤드 노드(Head Node)로 연결되는 형태를 가진 연결 리스트
- 메모리를 효율적으로 사용할 수 있으며, _원형 큐_ 등의 자료구조에서 활용된다.
- 단일 혹은 이중 연결 리스트에서 모두 적용 가능:
  - 단일 원형 연결 리스트(Single Circuler Linked List): 기존 원형 연결 리스트 방식 _꼬리 노드(Tail Node)에서 헤드 노드(Head Node)로 연결_
  - 이중 원형 연결 리스트(Double Circuler Linked List): 이중 연결 리스트 특성을 유지하면서, 꼬리 노드(Tail Node)에서 헤드 노드(Head Node)로 연결되어 있다.

## 연결 리스트와 배열의 차이점

**1. 시간 복잡도**
||배열|연결 리스트|
|--|--|--|
|탐색|$O(1)$|$O(N)$|
|추가|$O(N)$|$O(1)$|
|삭제|$O(N)$|$O(1)$|

- 추가와 삭제가 반복되는 로직일 경우 → 연결 리스트(Linked List) 사용 지향
- 조회가 반복되는 로직일 경우 → 배열(Array) 사용 지향

**2. 메모리**
![배열 연결 리스트 메모리 관점](/assets/images/data_structor/linked_list/different_array_linked_list_memory.webp)

- 배열(Array): 순차적인 데이터 (즉, 메모리를 연속적으로 할당)
- 연결 리스트(Linked List): 순차적인 데이터 X (즉, 메모리를 연속적으로 할당하지 않음)
