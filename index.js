// 파인드(find) 연산: 특정 정점의 대표 정점을 찾기 위한 연산
function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  // 경로 압축 최적화: 대표 정점을 찾기 위한 경로에 있는 모든 원소들이 직접 최상위 부모를 가리키도록 변경
  return (parent[x] = find(parent, parent[x]));
}
// 유니온(Union) 연산: 두 개의 서로서 집합을 하나의 집합으로 병합
function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  // 더 작은 값을 기준으로 서로서 집합을 하나의 집합으로 병합한다.
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

// 두 집합이 동일한 대표 루트를 가리키고 있는지 확인
function compare(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  // 같은 집합일 경우 사이클이 발생할 수 있음
  return a === b;
}

function solution(V, graph) {
  let parent = Array.from({ length: V + 1 }, (_, idx) => idx); // 유니온 연산에 필요한 1차원 배열 정의 + 초기화는 자기 자신을 부모로 지정
  let answer = 0;

  // 그래프의 간선을 가중치 값을 기준으로 정렬
  graph.sort((a, b) => a[2] - b[2]);

  for (const [a, b, cost] of graph) {
    if (!compare(parent, a, b)) {
      answer += cost;
      union(parent, a, b);
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const [V, E] = input[0].split(" ").map(Number);
const graph = [];

for (let i = 1; i < E + 1; i++) {
  graph.push(input[i].split(" ").map(Number));
}

console.log(solution(V, graph));
