function solution(n, wires) {
    
    function bfs(graph, start) {
        const visited = new Array(n + 1).fill(0);
        const queue = [start];
        visited[start] = 1;
        
        let count = 1;
        
        while(queue.length) {
            const current = queue.shift();
            
            for(const next of graph[current]) {
                if(next === 0) continue;
                if(!visited[next]) {
                    visited[next] = 1;
                    queue.push(next);
                    count += 1;
                }
            }
        }
        
        return count;   
    }
    
    const graph = Array.from({ length: n + 1 }, () => []);
    
    // 인접 리스트로 그래프 표현
    for(const [from, to] of wires) {
        graph[from].push(to);
        graph[to].push(from);
    }
    
    let answer = Number.MAX_SAFE_INTEGER;
    
    // 연결된 순서대로 각각 연결 끊기
    // 트리 형태이기 때문에 순서대로 끊게되면 알아서 두 개로 나뉘게 됨
    for(const [from, to] of wires) {
        
        // 바로 연결을 끊으면 참조 자료형이기 때문에 원본에 영향 -> 깊은 복사
        const copyGraph = JSON.parse(JSON.stringify(graph));        
        copyGraph[from][copyGraph[from].indexOf(to)] = 0;
        copyGraph[to][copyGraph[to].indexOf(from)] = 0;
        
        const x = bfs(copyGraph, from);
        const y = bfs(copyGraph, to);
        
        answer = Math.min(answer, Math.abs(x - y));
    }
    
    return answer;
}