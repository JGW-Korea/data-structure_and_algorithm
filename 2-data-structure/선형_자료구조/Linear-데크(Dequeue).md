![데크 배경 이미지](/assets/images/data_structor/dequeue/dequeue.webp)

> 스택(Stack), 큐(Queue), 데크(Dequeue) 자료구조는 기본적으로 특정 위치의 원소를 제외하고, 탐색, 삽입, 삭제가 기본적으로 이루어지면 안된다. 이로 인해 스택(Stack), 큐(Queue), 데크(Dequeue)를 묶어서 **제한된 자료구조(Restricted Structures)**라고 부르기도 한다.

데크(Dequeue)이란 **양쪽 끝에서 삽입과 삭제가 모두 가능한 구조**를 가지는 자료구조를 말한다.

#### 데크(Dequeue) 특징

##### 데크(Dequeue) 동작 원리

![데크 동작 원리](/assets/images/data_structor/dequeue/dequeue.webp)

1. 아무런 데이터가 저장되지 않은 데크(Dequeue)을 생성한다.
2. 양쪽 끝에서 데이터를 삽입할 수 있다. (단, 데이터를 삽입하면 앞에서부터 쌓임)
3. 양쪽 끝에서 데이터를 삭제할 수 있다. (데이터를 삭제하면 빈 공간을 채움)
