function solution(n, graph) {
  // 만약, 상근이 노드가 아무런 그래프와 연결이 안되있을 경우 동기는 없다.
  if(!graph[1].length) return 0;

  const visited = new Array(n + 1).fill(0); // 상근이와의 관계
  // 상근이의 학번은 1이기 때문에, bfs 시작 노드는 1로 지정해준다.
  const queue = [1];

  // BFS 방식으로 구현한다.
  while(queue.length) {
    const currentNode = queue.shift();

    // 현재 노드부터 이동 가능한 노드를 추출한다.
    for(const nextNode of graph[currentNode]) {
      if(!visited[nextNode]) { // 방문하지 않은 경우 True
        queue.push(nextNode); 
        visited[nextNode] = visited[currentNode] + 1; // 상근이와 관계를 갱신해준다.
      }
    }
  }

  let answer = 0;

  // 관계가 0은 관계가 아예 없는 것이고, 2 이상일 경우 친구의 친구도 아니기 때문
  for(let i = 2; i < visited.length; i++) {
    if(visited[i] !== 0 && visited[i] <= 2) {
      answer += 1;
    }
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const m = Number(input.shift());
const graph = Array.from({length: n + 1}, () => []);

// 그래프 형태는 양방향으로 설정한다.
for(let i = 0; i < input.length; i++) {
  const [from, to] = input[i].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

console.log(solution(n, graph));