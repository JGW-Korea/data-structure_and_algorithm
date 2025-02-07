const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const INF = Number.MAX_SAFE_INTEGER;

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this.upHeapify(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.downHeapify(0);
        return top;
    }

    upHeapify(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[parentIndex].cost > this.heap[index].cost) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            this.upHeapify(parentIndex);
        }
    }

    downHeapify(index) {
        const leftChildIndex = index * 2 + 1;
        const rightChildIndex = index * 2 + 2;
        let smallest = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].cost < this.heap[smallest].cost) {
            smallest = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].cost < this.heap[smallest].cost) {
            smallest = rightChildIndex;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.downHeapify(smallest);
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

const [N, M] = input.slice(0, 2).map(Number);
const graph = Array.from({ length: N + 1 }, () => Array());
const dist = Array(N + 1).fill(INF);
const route = Array(N + 1).fill(-1);

for (let i = 2; i < M + 2; i++) {
    const [start, end, cost] = input[i].split(' ').map(Number);
    graph[start].push({ end, cost });
}

const [start, end] = input[M + 2].split(' ').map(Number);

const dijkstra = (start) => {
    const pq = new PriorityQueue();
    pq.push({ cost: 0, vertex: start });
    dist[start] = 0;

    while (!pq.isEmpty()) {
        const { cost, vertex } = pq.pop();

        if (dist[vertex] < cost) continue;

        for (let i = 0; i < graph[vertex].length; i++) {
            const nextVertex = graph[vertex][i].end;
            const nextCost = cost + graph[vertex][i].cost;

            if (dist[nextVertex] > nextCost) {
                dist[nextVertex] = nextCost;
                route[nextVertex] = vertex;
                pq.push({ cost: nextCost, vertex: nextVertex });
            }
        }
    }
}

dijkstra(start);

console.log(dist[end]);

let path = [];
for (let i = end; i !== -1; i = route[i]) {
    path.push(i);
}
path = path.reverse();

console.log(path.length);
console.log(path.join(' '));
