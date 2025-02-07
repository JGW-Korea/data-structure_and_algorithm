const fs = require('fs');

// 입력을 받아옵니다.
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const graph = Array.from({ length: n + 1 }, () => []);
const bfsOrder = input[n].split(' ').map(Number);
const bfsOrderIndex = new Array(n + 1);


// 그래프 정보를 저장합니다.
for (let i = 1; i < n; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

// 각 노드의 순서를 기록합니다.
for (let i = 0; i < n; i++) {
    bfsOrderIndex[bfsOrder[i]] = i;
}

// 그래프의 각 노드 리스트를 bfsOrder 순서에 따라 정렬합니다.
for (let i = 1; i <= n; i++) {
    graph[i].sort((a, b) => bfsOrderIndex[a] - bfsOrderIndex[b]);
}

// BFS 탐색 함수
function bfs() {
    const queue = [1];
    const visited = new Array(n + 1).fill(false);
    visited[1] = true;
    let bfsResult = [];

    while (queue.length > 0) {
        const node = queue.shift();
        bfsResult.push(node);

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return bfsResult;
}

// BFS 탐색 결과와 주어진 순서를 비교합니다.
const bfsResult = bfs();
let isCorrect = true;

for (let i = 0; i < n; i++) {
    if (bfsResult[i] !== bfsOrder[i]) {
        isCorrect = false;
        break;
    }
}

// 결과를 출력합니다.
console.log(isCorrect ? 1 : 0);
