// DFS 알고리즘
function dfs(graph, node, start) {
  const visited = new Array(node + 1).fill(0); // 방문 처리를 위한 배열
  const result = [];

  // 렉시컬 스코프 성질을 이용하여 중첩 함수를 선언하여 dfsWorks에 있는 변수는 상위 스코프의 변수를 참조할 수 있게 함
  function dfsWorks(currentNode) {
    visited[currentNode] = 1; // 현재 정점 방문 처리
    result.push(currentNode); // 방문한 정점 결과에 포함

    // 이동 가능한 정점 순회
    for (const nextNode of graph[currentNode]) {
      if (!visited[nextNode]) {
        dfsWorks(nextNode);
      }
    }
  }

  // dfs 탐색을 수행
  dfsWorks(start);

  return result.join(" ");
}

// BFS 알고리즘
function bfs(graph, node, start) {
  const visited = new Array(node + 1).fill(0); // 방문 처리를 위한 배열
  visited[start] = 1; // 시작 정점 방문 처리

  const queue = [start]; // BFS 알고리즘을 위한 큐 자료구조
  const result = [];

  // BFS 탐색 (큐에 정점이 없을 때까지 순회)
  while (queue.length) {
    const currentNode = queue.shift(); // 현재 정점을 가져온다.
    result.push(currentNode); // 결과에 포함

    // 이동 가능한 정점 순회
    for (const nextNode of graph[currentNode]) {
      if (!visited[nextNode]) {
        visited[nextNode] = 1; // 방문 처리
        queue.push(nextNode); // 이동 가능한 정점 큐 자료구조에 삽입
      }
    }
  }

  return result.join(" ");
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// input.shift()를 이용해서 하면 그래프를 표현을 forEach() 메서드를 통해서 할 수 있음
// 다만, 간선의 개수(M)이 최대 10,000이기 때문에 배열 자료구조 관념에서 보면 앞으로 당겨오는 작업이 포함되어 있기 때문에
// 성능상 안좋을 수 있음
const [N, M, V] = input[0].split(" ").map(Number);

// 인접 리스트 방식으로 그래프 표현 (Node 번호는 1부터 시작)
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < M + 1; i++) {
  const [from, to] = input[i].split(" ").map(Number); // 정점이 연결된 구간을 가져옴

  // 무방향 연결 리스트이기 때문에 간선을 하나로 취급
  graph[from].push(to);
  graph[to].push(from);
}

// 정점이 여러 개일 경우 작은 정점 번호부터 이동을 해야되기 때문에 각 정점이 갈 수 있는 정점의 번호를 정렬을 시킨다.
graph.forEach((node) => node.sort((a, b) => a - b));

console.log(dfs(graph, N, V)); // DFS 수행 결과
console.log(bfs(graph, N, V)); // BFS 수행 결과
