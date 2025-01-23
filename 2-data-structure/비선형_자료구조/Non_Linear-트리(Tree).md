![트리 배경 이미지](/assets/images/data_structor/tree/tree_thumbnail.webp)

트리(Tree)란 **정점(Vertex)**과 **간선(Edge)**으로 구성된 비성형 자료구조이다.

- 트리는 **계층적 구조**를 나타내며, 하나의 루트 노드(Root Node)를 기준으로 자식 노드(Child Node)로 확장된다.
- 각 노드 간의 경로는 유일하다. 즉, 두 노드를 연결하는 경로가 하나만 존재한다.

<br />

#### 트리(Tree) 특징

- 그래프의 한 종류 : 트리는 **무방향이면서 사이클이 존재하지 않는 연결 그래프(Undirected Acyclic Connected Graph)**에 해당된다.
- 부모-자식 관계 : 루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점(Parent Node)을 가진다.
- 간선의 수 : 정점의 개수가 $V$개라면, 트리는 항상 $V - 1$개의 간선의 개수를 가진다.
- 경로의 유일성 : 루트 노드에서 특정 정점으로 가는 경로는 유일하다.

<br />

#### 트리(Tree) 용어 설명

![트리 용어를 위한 이미지](/assets/images/data_structor/tree/tree_thumbnail.webp)

- 노드(Node) : 트리를 구성하는 기본 원소를 의미
- 간선(Edge) : 노드와 노드를 연결하는 간선을 의미
- 루트 노드(Root Node) : 부모가 존재하지 않는 최상위 원소를 의미
- 리프 노드(Leaf Node) : 자식이 존재하지 않는 최하위 원소를 의미
- 레벨(Level) : 트리의 특정 깊이를 가지는 노드의 집합을 의미
- 깊이(Depth) : 최상위 원소에서 특정 노드까지 도달하기 위해 거쳐야 하는 간선의 수를 의미
- 차수(Degree) : 특정 노드가 지닌 간선의 수

<br />

### 트리(Tree) 표현 방법

![트리 표현 방법](/assets/images/data_structor/tree/tree.webp)

- 트리(Tree)는 그래프와 마찬가지로 인접 행렬(Adjacency Matrix), 인접 리스트(Adjacency List) 두 가지 방식으로 표현할 수 있다.
  - 인접 행렬(Adjacency Matrix) : 2차원 배열을 통해 표현한 방법
  - 인접 리스트(Adjacency List) : 연결 리스트를 통해 표현한 방법 _JavaScript에서는 인접 리스트 방식은 배열로 표현할 수 있다._

## 이진 트리(Binary Tree)

![이진 트리 종류](/assets/images/data_structor/tree/binary_tree_list.webp)

이진 트리(Binary Tree)란 각 노드가 가질 수 있는 **자식 노드(Child Node)의 개수가 최대 2개인 트리**를 말한다.

- 자식 노드는 **왼쪽 자식 노드(Left Child Node)**와 **오른쪽 자식 노드(Right Child Node)**로 구분된다.

<br />

### 이진 트리(Binary Tree) 종류

#### 1. 완전 이진 트리 (Complete Binary Tree)

- 이진 트리에서 다음 두 가지 조건에 성립하는 이진 트리를 완전 이진 트리(Complete Binary Tree)라고 부른다.
  1. 마지막 레벨에서 가장 우측에 있는 정점을 제외하고 모든 노드가 채워져 있는 노드
  2. 노드는 왼쪽에서 오른쪽 방향으로 채워진다.

<br />

#### 2. 포화 이진 트리 (Perfact Binary Tree)

- 모든 노드가 2개의 자식을 가지고 리프 노드가 같은 레벨에 위치해 있는 경우의 이진 트리를 포화 이진 트리(Perfact Binary Tree)라고 부른다.
- 높이가 $h$인 포화 이진 트리의 노드 개수 : $N = 2^{h} - 1$

<br />

#### 3. 편향 이진 트리 (Skewed Binary Tree)

- 이진 트리의 정점들이 왼쪽 혹은 오른쪽 서브트리만 가지고 있는 이진 트리를 편향 이진 트리(Skewed Binary Tree)라고 부른다.

<br />

### 이진 트리(Binary Tree)의 특징

- 정점이 N개인 이진 트리는 최악의 경우 높이가 N이 될 수 있다. _(편향 이진 트리일 경우)_
- 정점이 N개인 포화 또는 완전 이진 트리의 높이는 $log N$이다.
- 높이가 $h$인 포화 이진 트리의 노드 개수 : $N = 2^{h} - 1$
- 일반적으로 이진 트리를 직접 사용하는 경우는 많지 않지만, 다음 자료구조에서 활용된다.
  - 이진 탐색 트리(Binary Search Tree) : 이진 탐색을 트리를 통해 구현한 알고리즘
  - 힙(Heap) : 최소 힙, 최대 힙 조건에 맞는 노드들의 값이 정려되어 있는 이진 트리 알고리즘
  - AVL 트리(AVL Tree, Adelson-Velsky and Landis Tree) : 편향 이진 트리의 문제점을 방안하기 위해 나온 알고리즘
  - 레드-블랙 트리(Red-Black Tree) : 편향 이진 트리의 문제점을 방안하기 위해 나온 알고리즘

<br />

### 이진 트리(Binary Tree)의 순회 방법

#### 전위 순회(Preoreder Travel)

```javascript
function preorder(index) {
  console.log(tree[index]);
  if (tree[index * 2]) preorder(index * 2);
  if (tree[index * 2 + 1]) preorder(index * 2 + 1);
}
```

1. 현재 정점을 방문한다.
2. 왼쪽 서브 트리를 전위 순회 한다.
3. 오른쪽 서브 트리로 전위 순회 한다.

<br />

#### 중위 순회(Inoreder Travel)

```javascript
function inoreder(index) {
  if (tree[index * 2]) inoreder(index * 2);
  console.log(tree[index]);
  if (tree[index * 2 + 1]) inoreder(index * 2 + 1);
}
```

1. 왼쪽 서브 트리를 중위 순회 한다.
2. 현재 정점을 방문한다.
3. 오른쪽 서브 트리로 중위 순회 한다.

<br />

#### 후위 순회(Postorder Travel)

```javascript
function postorder(index) {
  if (tree[index * 2]) postorder(index * 2);
  if (tree[index * 2 + 1]) postorder(index * 2 + 1);
  console.log(tree[index]);
}
```

1. 왼쪽 서브 트리를 후위 순회 한다.
2. 오른쪽 서브 트리로 후위 순회 한다.
3. 현재 정점을 방문한다.

<br />

### 이진 트리(Binary Tree) 표현 방법

![이진 트리 표현 방법](/assets/images/data_structor/tree/binary_tree.webp)

- 이진 트리는 최대 2개의 자식을 가질 수 있는 특징으로 인해 1차원 배열 또는 연결 리스트를 통해 표현할 수 있다.

#### 이진 트리(Binary Tree) 구현 방법

**1. 1차원 배열**
![이진 트리 1차원 배열로 구현](/assets/images/data_structor/tree/array_binary_tree.webp)

```javascript
class BinaryTree {
  constructor() {
    this.tree = [null];
    this.length = 0;
  }

  push(value) {
    this.tree.push(value);
    this.length += 1;
  }

  pop() {
    if (this.length === 0) return;
    if (this.length === 1) return this.tree.pop();
    return this.tree.pop();
  }

  // 전위 순회
  preOrder(index = 1) {
    console.log(this.tree[index]);
    if (this.tree[index * 2]) this.preOrder(index * 2);
    if (this.tree[index * 2 + 1]) this.preOrder(index * 2 + 1);
  }

  // 중위 순회
  inOrder(index = 1) {
    if (this.tree[index * 2]) this.inOrder(index * 2);
    console.log(this.tree[index]);
    if (this.tree[index * 2 + 1]) this.inOrder(index * 2 + 1);
  }

  // 후위 순회
  postOrder(index = 1) {
    if (this.tree[index * 2]) this.postOrder(index * 2);
    if (this.tree[index * 2 + 1]) this.postOrder(index * 2 + 1);
    console.log(this.tree[index]);
  }
}
```

- 배열 이진 트리(Array-Binary Tree) 구현 규칙
  - 0번 인덱스는 편의상 `null` 값으로 대체한다. _(Zero-based Numbering을 하지 않기 위함)_
  - 특정 정점에서 부모 노드 위치 계산 : `Math.floor(currentIndex / 2)`
  - 특정 정점의 왼쪽 노드 위치 계산 : `currentIndex * 2`
  - 특정 정점의 오른쪽 노드 위치 계산 : `(currentIndex * 2) + 1`

**2. 연결 리스트**
![이진 트리 연결 리스트로 구현](/assets/images/data_structor/tree/linked_list_binary_tree.webp)
