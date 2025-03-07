function solution(N, M, V, graph) {
  // 2개의 과정을 해줘야돼 (DFS 순서), (BFS 순서)

  let dfsSearch = "";
  let bfsSearch = "";

  // DFS
  function dfs() {
    const visited = new Array(N + 1).fill(0); // Node 개수만큼의 크기를 가진 방문 배열을 생성한다.

    // DFS -> 스택 또는 재귀
    // 스택 -> 삽입, 삭제 -> O(1)
    // 재귀 -> O(?) -> 성능 제한 + 이차 시간(하나의 함수에 두 개이상의 자기 자신을 호출)

    // 재귀를 할 때 가장 중요한거는 -> 매개변수를 어떻게 사용할 것인가
    // current => V
    // 다시 자기 자신을 재호출(재귀 호출) -> 현재(current) 정점에서 이동 가능한 정점을 보내겠다

    /*
      1 - 2 - 4
        - 3 - 4
        - 4
    */

    function recursion(current) {
      visited[current] = 1; // 방문 처리를 할것입니다.
      dfsSearch += current + " ";

      // 현재 정점에서 연결된 간선을 이동을 해야된다.
      for (const next of graph[current]) {
        if (!visited[next]) {
          recursion(next);
        }
      }
    }

    // V -> 시작 정점이라고 입력에서 주어졌기 때문이야
    // 시작 정점부터 깊이 탐색을 해야되는거고
    // V를 보내주게 된거고
    recursion(V);
  }

  // BFS
  function bfs() {
    const visited = new Array(N + 1).fill(0); // Node 개수만큼의 크기를 가진 방문 배열을 생성한다. (방문 처리를 위함)
    const queue = [V]; // 시작 노드를 바로 담는 큐를 초기화 시킨다.

    visited[V] = 1;
    // bfsSearch += V;

    while (queue.length) {
      const current = queue.shift();
      bfsSearch += current + " ";

      // 현재 정점에서 연결된 간선을 이동을 해야된다.
      for (const next of graph[current]) {
        if (!visited[next]) {
          // 방문하지 않았는지 체크
          queue.push(next);
          visited[next] = 1;
        }
      }
    }
  }

  dfs();
  bfs();

  return dfsSearch + "\n" + bfsSearch;
}

// BFS, DFS read, write가 다 될 수 있는 문제가 -> 백준 DFS와 BFS 문제입니다.
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// "4 5 1"
const [N, M, V] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

// 간선의 개수 M(1 ≤ M ≤ 10,000)
/*
  A -> B로 가는 간선
  간서의 개수 M
  1 2 (1) -> (2)
  1 3 (1) -> (3)
  1 4 (1) -> (4)
  2 4 (2) -> (4)
  3 4 (3) -> (4)
*/

/*
  // 양방향은 무방향 그래프
  // 결국에는 두 간선이 같은 간선으로 취급된다.
  1 - 2 - 4
    - 3 - 4
    - 4

*/

for (let i = 1; i < M + 1; i++) {
  const [from, to] = input[i].split(" ").map(Number);

  graph[from].push(to); // A -> B로 갈 수 있다.
  graph[to].push(from); // B -> A로 갈 수 있다.
}

// 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고 (정렬)
graph.forEach((node) => {
  node.sort((a, b) => a - b);
});

console.log(solution(N, M, V, graph));
