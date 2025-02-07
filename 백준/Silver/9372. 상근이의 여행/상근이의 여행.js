function solution(n, m, graph) {
	const visited = new Array(n + 1).fill(false); // 방문 처리를 위한 배열
	visited[1] = true;
	
	const queue = [1]; // BFS 알고리즘을 위한 큐 자료구조
	let answer = 0; // 모든 국가를 방문하기 위한 비행기의 최소 개수
	
	while(queue.length) {
		const current = queue.shift();
		
		for(const next of graph[current]) {
			if(!visited[next]) {
				queue.push(next);
				visited[next] = true;
				answer += 1; // 아직 방문하지 않은 국가일 경우 비행기의 개수를 1 증가시킨다.
			}
		}
	}
	
	return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';
let idx = 1;

for(let tc = 0; tc < Number(input[0]); tc++) {
	const [n, m] = input[idx++].split(' '); // N(국가, 정점)과 M(비행기)을 가져온다.
	const graph = Array.from({length: n + 1}, () => []); // 그래프를 인접 리스트로 표현
	
	for(let i = 0; i < m; i++) {
		const [from, to] = input[idx++].split(' ').map(Number); // a, b의 쌍(간선)을 가져온다.
		graph[from].push(to);
		graph[to].push(from);
	}
	
	result += solution(n, m, graph) + '\n';
}

console.log(result);