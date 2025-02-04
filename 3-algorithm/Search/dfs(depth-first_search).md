![DFS](/assets/images/algorithm/search/depth-first_search.webp)

깊이 우선 탐색(DFS, Depth-first Search) 알고리즘은 **그래프 탐색 알고리즘**으로, **한 경로를 따라 최대한 깊이 내려가면서 탐색**하는 방법이다.

#### DFS(Depth-first Search) 특징

> DFS 알고리즘은 재귀 함수 방법이 코드를 더 깔끔하게 작성할 수 있다.

- **스택(Stack)** 자료구조 또는 **재귀(Recursion) 함수**를 이용하여 구현할 수 있다.
- **시작 정점**에서 **최대한 깊이 탐색한 후**, **더 이상 갈 곳이 없으면 되돌아온다.**
- V가 정점의 수, E가 간선의 수일 때 DFS 알고리즘의 시간 복잡도는 **인접 리스트의 경우: $O(V + E)$** 이며, **인접 행렬일 경우 $O(V^{2})$**

<br />

## DFS(Depth-first Search) 알고리즘 그래프 탐색 과정

![DFS 탐색 과정](/assets/images/algorithm/search/depth-first_search_works.webp)

1. A 정점을 스택에 삽입하고 방문 처리를 한다.
2. A 정점에서 이동 가능한 B 정점을 스택에 삽입하고 방문 처리한다.
3. B 정점에서 이동 가능한 F 정점을 스택에 삽입하고 방문 처리한다.
4. F 정점에서 이동 가능한 C 정점을 스택에 삽입하고 방문 처리한다.
5. C 정점에서 이동 가능한 A, F 정점은 이미 방문했으므로, C 정점을 스택에서 제거하고 F 정점으로 돌아간다.
6. F 정점에서 이동 가능한 G 정점을 스택에 삽입하고 방문 처리한다.
7. G 정점에서 이동 가능한 정점이 없으므로, G 정점을 스택에서 제거하고 F 정점으로 돌아간다.
8. F 정점에서 더 이상 이동할 수 있는 정점이 없으므로, F 정점을 스택에서 제거하고 B 정점으로 돌아간다.
9. B 정점에서 더 이상 이동할 수 있는 정점이 없으므로, B 정점을 스택에서 제거하고 A 정점으로 돌아간다.
10. A 정점에서 이동 가능한 D 정점을 스택에 삽입하고 방문 처리한다.
11. D 정점에서 이동 가능한 E 정점을 스택에 삽입하고 방문 처리한다.
12. E 정점에서 이동 가능한 정점이 없으므로, E 정점을 스택에서 제거하고 D 정점으로 돌아간다.
13. D 정점에서 더 이상 이동할 수 있는 정점이 없으므로, D 정점을 스택에서 제거하고 A 정점으로 돌아간다.
14. A 정점에서 더 이상 이동할 수 있는 정점이 없으므로, A 정점을 스택에서 제거한다.
15. 스택이 비었으므로, 탐색을 종료한다.

#### DFS 탐색 과정 정리

1. DFS 탐색을 시작하기 이전에 시작 정점을 스택에 삽입 후 방문 처리를 한다.
1. 시작 정점을 스택 자료구조에서 꺼내 정점과 연결된 모든 정점들에 대해 3번 과정을 진행한다.
1. 이전에 방문한 정점일 경우 아무것도 하지 않고, 처음 방문한 정점일 경우 방문 처리를 하고 스택 자료구조에 삽입한다.
1. 스택 자료구조에 원소가 없을 때까지 3번 과정을 반복한다.

#### DFS 알고리즘 코드 구조

```javascript
// 스택 자료구조를 이용한 DFS(Depth-first Search) 알고리즘
function dfs(graph, node, startNode) {
  // 방문 처리를 위한 visited 배열 생성 (초기화와 동시에 방문 처리)
  const visited = new Array(node + 1).fill(0);
  visited[startNode] = 1;

  // DFS 탐색을 위한 스택 자료구조 초기화
  const stack = [startNode];

  // DFS 탐색 방문 순서 반환
  const result = [];

  // DFS 알고리즘 수행
  while (stack.length) {
    const currentNode = stack.pop(); // 스택 자료구조에서 현재 정점을 가져온다.
    result.push(currentNode);

    for (const nextNode of graph[currentNode]) {
      if (!visited[nextNode]) {
        stack.push(nextNode); // 스택 자료구조에 이동 가능한 정점 삽입
        visited[nextNode] = 1; // 이동 가능한 정점 방문 처리
      }
    }
  }

  return result.join(" ");
}
```

```javascript
// 재귀 함수를 이용한 DFS(Depth-first Search) 알고리즘
function search(graph, node, startNode) {
  // 방문 처리를 위한 visited 배열 생성 (초기화와 동시에 방문 처리)
  const visited = new Array(node + 1).fill(0);
  const result = []; // 방문 순서

  function dfs(currentNode) {
    visited[currentNode] = 1; // 현재 정점 방문 처리
    result.push(currentNode);

    // 현재 정점에서 이동 가능한 정점 순회
    for (const nextNode of graph[currentNode]) {
      // 아직 방문하지 않은 정점일 경우
      if (!visited[nextNode]) {
        dfs(nextNode);
      }
    }
  }

  dfs(startNode);

  return result.join(" ");
}
```
