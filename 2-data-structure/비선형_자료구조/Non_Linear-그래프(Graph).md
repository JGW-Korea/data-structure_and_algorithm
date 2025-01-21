![그래프 배경 이미지](/assets/images/data_structor/graph/graph_thumbnail.webp)

그래프(Graph)란 **정점(Node)**과 **정점 사이를 연결하는 간선(Edge)**으로 이루어진 비선형 자료구조이다.

- 그래프는 정점 집합과 간선 집합으로 표현할 수 있다.

#### 그래프(Graph) 특징

- 한 개의 정점(Graph)은 여러 개의 간선(Edge)을 가질 수 있다.

  - 선형 자료구조: 하나의 원소에서 앞, 뒤로 하나의 원소만 가질 수 있다.
  - 비선형 자료구조: 한 정점에서 여러 개의 간선을 통해 여러 개의 원소를 가질 수 있다.

- 그래프는 크게 방향 그래프(Directed Graph)와 무방향 그래프(Undirected Graph)로 나눌 수 있다.
- 정점 사이를 연결하는 간선(Edge)은 가중치를 가질 수 있다. (가중치: A 정점에서 B 정점까지의 거리)
- 그래프는 사이클(Cycle)이 발생할 수 있다. (그래프 탐색 시 사이클로 인해 무한루프에 빠지지 않도록 주의해야 함)

<br />

#### 사이클(Cycle)

![그래프 사이클](/assets/images/data_structor/graph/graph_cycle.webp)

- 사이클(Cycle)이란, 그래프의 정점과 간선의 부분 집합에서 순환이 되는 부분을 의미한다.
- 즉, 특정 정점에서 출발하여 다시 자기 자신으로 돌아올 수 있는 경로를 의미한다.

## 그래프(Graph) 종류

### 1. 방향 그래프 _Directed Graph_

![방향 그래프](/assets/images/data_structor/graph/directed_graph.webp)

- 방향 그래프(Directed Graph)란 간선(Edge)에 방향성이 존재하는 그래프로 해당 방향으로만 이동이 가능하다.
- 방향 그래프에서는 양방향으로 갈 수 있더라도 _(A, B)_, _(B, A)_ 는 다른 간선으로 취급된다,
- 실생활의 예시로 **일반 통행**을 생각하면 방향 그래프를 이해하기 쉽다.

### 2. 무방향 그래프 _Undirected Graph_

![무방향 그래프](/assets/images/data_structor/graph/undirected_graph.webp)

- 무방향 그래프(Undirected Graph)란 간선(Edge)에 방향성이 존재하지 않는 그래프로 이어진 정점들은 양방향으로 이동이 가능하다.
- 무방향 그래프는 _(A, B)_ 와 _(B, A)_ 는 같은 간선으로 취급된다.
- 실생활의 예시로 **양방향 통행 도로**를 생각하면 무방향 그래프를 이해하기 쉽다.

### 3. 연결 그래프 _Connected Graph_

![연결 그래프](/assets/images/data_structor/graph/connected_graph.webp)

- 연결 그래프(Connected Graph)란 특정 정점에서 모든 정점으로 이동 가능한 상태인 그래프를 의미한다. _(대표적으로 트리 자료구조가 이에 해당)_

### 4. 비연결 그래프 _Disconnected Graph_

![방향 그래프](/assets/images/data_structor/graph/disconnected_graph.webp)

- 비연결 그래프(Disconnected Graph)란 특정 정점쌍 사이에 간선이 존재하지 않는 그래프를 의미한다.

### 5. 완전 그래프 _Completed Graph_

![방향 그래프](/assets/images/data_structor/graph/completed_graph.webp)

- 완전 그래프(Completed Graph)란 모든 정점끼리 간선으로 연결된 상태인 그래프를 의미한다.
- 완전 그래프의 한 개의 정점의 간선 수는 `$전체 노드 - 1$` 로 계산할 수 있다.
- 완전 그래프의 모든 정점의 간선 수는 `$(전체 노드 - 1) * 전체 노드$` 로 계산할 수 있다.

## 주의해야 할 그래프 유형

## 그래프(Graph) 표현 방법
