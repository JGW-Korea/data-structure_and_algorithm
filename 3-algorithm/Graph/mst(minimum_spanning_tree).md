### I. 신장 트리(Spanning Tree)

![신장트리](/assets/images/algorithm/graph/mst_spanning_tree.webp)

신장 트리(Spanning Tree)는 무방향 그래프의 부분 그래프(Sub Graph) 중에서 모든 정점을 포함하면서 트리의 성질을 만족하는 그래프를 의미한다.

<br />

#### 부분 그래프(Sub Graph)

- 무방향 그래프에서 일부 정점과 간선만을 선택하여 구성한 새로운 그래프를 의미한다.

<br />

#### 신장 트리(Spanning Tree) 특징

- 모든 정점을 포함하는 부분 그래프이다.
- 트리의 성질을 만족해야 한다.
  1. 트리는 무방향이면서 사이클이 존재하지 않는 연결 그래프이다. _(연결 그래프: 특정 정점에서 모든 정점으로 이동 가능한 그래프)_
  2. 그래프의 정점 개수가 V개일 때, 신장 트리는 정확히 V - 1개의 간선을 가진다.

<br />

### II. 최소 신장 트리(MST, Minimum Spanning Tree)
