const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

// x의 최상위 원소를 찾기 위한 find 함수
function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  // 최상위 원소를 찾기 위한 find 함수에서 재귀를 통해 경로 압축 최적화를 수행한다.
  // 경로 압축을 수행하지 않으면, Union-Find는 트리 모양이기 때문에 편향 트리로 인해 find 수행이 O(N)까지 성능이 떨어질 수 있기 때문에
  return (parent[x] = find(parent, parent[x]));
}

// 두 집합이 공통 집합이 아닐 경우 같은 집합으로 합치는 union 함수
function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  // 더 낮은 값을 기준으로 union 수행
  if (a < b) parent[b] = a;
  else {
    parent[a] = b;
  }
}

// 두 집합이 공통 집합인지 확인하는 compare 함수
function compare(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  return a === b;
}

// 간선의 집합인 E는 안쓰기 때문에 대시(_)로 표현
function solution(v, _, graph) {
  const parent = Array.from({ length: v + 1 }, (_, idx) => idx); // 각 정점의 최상위 부모 집합을 자기 자신으로 초기화

  let answer = 0; // 최소 신장 트리의 가중치 합
  for (const [a, b, cost] of graph) {
    if (!compare(parent, a, b)) {
      answer += cost;
      union(parent, a, b);
    }
  }

  return answer;
}

const [V, E] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((element) => element.split(" ").map(Number));

// 최소 신장 트리 알고리즘 중 크루스칼 알고리즘을 하기 위해서는 간선의 가중치 값 기준으로 오름차순 정렬
graph.sort((a, b) => a[2] - b[2]);
console.log(solution(V, E, graph));
