![BFS](/assets/images/algorithm/search/breadth-first_search.webp)

너비 우선 탐색(BFS, Breadth-first Search) 알고리즘은 **그래프 탐색 알고리즘**으로, **같은 깊이**에 **해당하는 정점**부터 **탐색하는 방식**이다.

#### BFS(Breadth-first Search) 알고리즘 특징

- **큐(Queue) 자료구조**를 이용하여 구현할 수 있다.
- **시작 지점**에서 **가까운 정점**부터 탐색한다.
- V가 정점의 수, E가 간선의 수일 때 BFS 알고리즘의 시간 복잡도는 **인접 리스트 경우: $O(V + E)$** 이며, **인접 행렬일 경우 $O(V^{2})$**

## BFS(Breadth-first Search) 알고리즘 그래프 탐색 과정

![BFS](/assets/images/algorithm/search/breadth-first_search_works.webp)

1. A 정점을 큐에 삽입 후 방문 처리를 한다.
1. A 정점을 큐에 삭제 후 방문 처리를 하고, A 정점에서 이동 가능한 B, C, D 정점을 큐에 삽입한다.
1. B 정점을 큐에 삭제 후 방문 처리를 하고, B 정점에서 이동 가능한 F 정점을 큐에 삽입한다.
1. C 정점을 큐에 삭제 후 방문 처리를 하고, C 정점에서 이동 가능한 정점이 없기 때문에 다음 정점으로 넘어간다.
1. D 정점을 큐에 삭제 후 방문 처리를 하고, D 정점에서 이동 가능한 E 정점을 큐에 삽입한다.
1. F 정점을 큐에 삭제 후 방문 처리를 하고, F 정점에서 이동 가능한 G 정점을 큐에 삽입한다.
1. E 정점을 큐에 삭제 후 방문 처리를 하고, E 정점에서 이동 가능한 정점이 없기 때문에 다음 정점으로 넘어간다.
1. G 정점을 큐에 삭제 후 방문 처리를 하고, G 정점에서 이동 가능한 정점이 없기 때문에 다음 정점으로 넘어간다.
1. 큐 자료구조에 남아있는 원소(정점)가 없기 때문에, BFS 탐색을 종료한다.

#### BFS 탐색 과정 정리

1. BFS 탐색을 시작하기 이전에 시작 정점을 큐 자료구조에 삽입 후 방문 처리를 한다.
1. 큐 자료구조에 삽입된 정점을 꺼내 정점과 연결된 모든 정점들에 대해 3번 과정을 진행한다.
1. 이전에 방문한 노드일 경우 아무것도 하지 않고, 처음 방문한 정점일 경우 방문 처리를 하고 큐 자료구조에 삽입한다.
1. 큐 자료구조에 남아있는 원소(정점)가 없을 때까지, 3번 과정을 반복한다.

#### BFS 알고리즘 구현 예시 - [백준 1260번: DFS와 BFS](https://www.acmicpc.net/problem/1260)

```javascript
function solution(graph, node, startNode) {
  // 방문 처리를 위한 visited 배열 (초기화와 동시에 시작 노드를 방문 처리)
  const visited = Array.from({ length: node + 1 }, (_, idx) =>
    startNode === idx ? true : false
  );

  // BFS 알고리즘을 위한 큐 자료구조 초기화
  const queue = [startNode];
  const answer = [startNode];

  // BFS 알고리즘은 큐 자료구조에 남아있는 원소가 없을때까지 수행
  while (queue.length) {
    const currentNode = queue.shift(); // 큐 자료구조에서 현재 정점 가져오기
    answer.push(nextNode);

    for (const nextNode of graph[currentNode]) {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push(nextNode);
      }
    }
  }

  return answer.join(" ");
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < input.length; i++) {
  const [from, to] = input[i].split(" ").map(Number);

  // 무방향 그래프 인접 리스트로 표현
  graph[from].push(to);
  graph[to].push(from);
}

console.log(solution(graph, N, V));
```
