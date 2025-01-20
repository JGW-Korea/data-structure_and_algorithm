![스택 배경 이미지](/assets/images/data_structor/stack/stack_thumbnail.webp)

스택(Stack)이란 **마지막에 삽입된 원소가 첫 번째로 삭제되는 구조**를 가지는 자료구조를 말한다. (LIFO, Last In First Out)

- 실생활의 예시로 프링글스 통을 생각하면 된다.

#### 스택(Stack) 특징

##### 스택(Stack) 동작 원리

![스택 동작 원리](/assets/images/data_structor/stack/stack_works.webp)

1. 아무런 데이터가 저장되지 않은 스택(Stack)을 생성한다.
2. 원소를 삽입하면 스택(Stack) 가장 위에 원소가 삽입된다.
3. 원소를 삭제하면 스택(Stack) 가장 위에 있는 원소가 삭제된다.

##### 스택(Stack) 주요 연산 및 시간 복잡도

|                             | 시간 복잡도 | 설명                                   |
| --------------------------- | ----------- | -------------------------------------- |
| 추가(Push)                  | $O(1)$      | 스택에 원소를 **삽입**하는 연산        |
| 삭제(Pop)                   | $O(1)$      | 스택에 원소를 **삭제**하는 연산        |
| 최상위 원소 조회(Top)       | $O(1)$      | 스택의 **최상위 원소**를 확인하는 연산 |
| 비어있는지 여부 확인(Empty) | $O(1)$      | 스택이 **비어 있는지** 확인하는 연산   |

#### 스택(Stack) 표현 방법

##### 1. 배열(Array)

<img src="/assets/images/data_structor/stack/stack_array.webp" alt="스택 배열 표현" width="248px" />

- JavaScript 배열 이용 장점
  - JavaScript의 배열 크기는 동적이기 때문에 배열의 크기를 지정하지 않아도 된다.
  - Array 객체의 인스턴스 메서드로 각 기능을 제공해준다.

##### 2. 연결 리스트(Linked List)

![연결 리스트를 이용한 방법](/assets/images/data_structor/stack/stack_linked_list.webp)
