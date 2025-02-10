![최단 경로 알고리즘](/assets/images/algorithm/graph/short_path.png)

최단 경로(Shortest Path) 알고리즘은 그래프 자료구조에서 특정 정점에서 다른 정점까지의 최단 경로를 찾는 방법이다.

#### 최단 경로(Shortest Path) 알고리즘 특징

- 간선의 가중치가 모두 동일한 경우, BFS(Breadth-First Search), DFS(Depth-First Search) 알고리즘을 사용하여 최단 경로를 구할 수 있다.
- 최단 경로 알고리즘 종류
  1. BFS(Breth-First Search)
  1. 다익스트라(Dijkstra)
  1. 플로이드 와샬(Floyd Warshall)
  1. 벨만 포드(Bellman-Ford's)

#### BFS / DFS를 사용한 최단 경로 알고리즘

![BFS, DFS 최단 경로 알고리즘](/assets/images/algorithm/graph/short_path_bfs-dfs.webp)

- BFS와 DFS를 이용하여 그래프의 최단 경로를 구하는 방법은 간선의 가중치 값이 모두 같을 때 적합하다.
- 대표적으로 2차원 배열(지도)이 주어진 상태로 최단 거리를 찾아야 할 때 자주 사용된다.

<br />

## I. 다익스트라(Dijkstra)

<img src="/assets/images/algorithm/graph/short_path_dijkstra.webp" alt="다익스트라" width="336px" />

- 다익스트라(Dijkstra) 알고리즘은 방향 그래프 또는 무방향 그래프에서 하나의 시작 정점으로부터 다른 모든 정점까지의 최단 거리를 구하는 알고리즘이다.
- 간선의 가중치가 각각 다를 경우 사용할 수 있으며, 음수 가중치가 존재할 경우 올바른 최단 경로를 보장하지 않는다.
- 다익스트라 알고리즘은 네덜란드의 컴퓨터 과학자 에츠허르 비버 데이크스트라(Edsger Wybe Dijkstra)가 고안한 최단 경로 알고리즘이다.
- 그래프의 정점의 수 V, E가 간선의 수일 때 $O(E log V)$ 시간 복잡도를 가진다.

#### 다익스트라(Dijkstra) 알고리즘 특징

- 우선순위 큐(Priority Queue)를 활용하여 다익스트라 알고리즘을 효율적으로 구현할 수 있다.
- 다익스트라 알고리즘은 A → B 정점까지의 거리가 가장 낮은 정점을 계속 선택해야 한다.

  - 따라서, 가장 낮은 정점을 선택하기 위한 알고리즘으로 우선순위 큐가 사용되는 것을 알 수 있다.

- 다익스트라 알고리즘은 음수의 가중치 값을 가지는 간선이 있을 경우 올바른 최단 경로를 보장하지 않는다. → 이와 같이 음수의 가중치를 가지는 간선이 있을 경우 벨만-포드 알고리즘을 사용해야 한다.

#### 최단 경로 동작 원리: 다익스트라(Dijkstra)

<img src="/assets/images/algorithm/graph/short_path_dijkstra_works.webp" alt="다익스트라 동작 원리" width="336px" />
<img src="/assets/images/algorithm/graph/short_path_dijkstra_works_cost_step1.webp" alt="다익스트라 거리" width="530px" />

1. 시작점을 제외한 나머지 정점의 거리는 모두 무한대로 초기화시킨다.
2. 시작점의 거리는 0으로 초기화 한 후, 시작점에서 이동 가능한 정점을 찾는다.

<img src="/assets/images/algorithm/graph/short_path_dijkstra_works_cost_step2.webp" alt="다익스트라 거리" width="530px" />

3. 시작점 거리와 이동 가능한 정점의 각 간선의 가중치와 더한 값으로 갱신한다.
4. 이동 가능한 정점의 거리를 갱신한 정점 중 최단 거리가 가장 낮은 정점을 선택한다.

<img src="/assets/images/algorithm/graph/short_path_dijkstra_works_cost_step3.webp" alt="다익스트라 거리" width="530px" />

5. 최단 거리가 가장 낮은 정점인 C 정점을 선택 후 C 정점에서 이동 가능한 정점들을 찾고, C 정점의 거리와 각 간선의 가중치와 더한 값으로 갱신한다.
6. C 정점은 방문처리가 되고, 다음으로 최단 거리가 가장 낮은 D 정점을 선택한다.

<img src="/assets/images/algorithm/graph/short_path_dijkstra_works_cost_step4.webp" alt="다익스트라 거리" width="530px" />

7. D 정점에서 이동 가능한 정점은 E 정점밖에 없다.
8. 하지만, E 정점은 A → C → E로 가는 거리의 합을 가지고 있기 때문에, A → D → E로 가는 거리와 비교를 해줘야 한다.
   - A → C → E로 가는 거리보다, A → D → E로 가는 거리가 더 짧기 때문에 거리를 갱신한다.
9. D 정점은 방문처리가 되고, 다음으로 최단 거리가 가장 낮은 E 정점을 선택한다.

<img src="/assets/images/algorithm/graph/short_path_dijkstra_works_cost_step5.webp" alt="다익스트라 거리" width="530px" />

10. E 정점에서 이동 가능한 정점은 F 정점밖에 없다.
11. 하지만, F 정점은 A → C → F로 가는 거리의 합을 가지고 있기 때문에, A → D → E → F로 가는 거리와 비교를 해줘야 한다.
    - A → C → F로 가는 거리보다, A → D → E → F로 가는 거리가 더 짧기 때문에 거리를 갱신한다.

// ... 이후 위의 과정들을 모두 반복하여 결과적으로 모든 정점을 방문 후 A → F 정점까지의 최단 경로는 7임을 확인할 수 있다.

#### 다익스트라 알고리즘 정리

1. **시작점을 선택**한다.
2. 시작점을 제외한 **모든 정점의 거리**를 **무한으로 설정**한다. 시작점은 **0으로 설정**한다.
3. **선택한 정점**에서 **갈 수 있는 정점의 거리**를 다음과 같이 해줘야 한다.

   1. **정점(해당 정점까지의 최단 거리) 값 + 간선(거리) 값**으로 갱신한다.

4. **선택한 정점**을 **방문 처리**한다.
5. **이미 방문한 정점**과 **무한인 정점**을 제외하고 **가장 최단 거리인 정점을 선택**한다.
6. 더 이상 방문할 수 있는 정점이 없을 때까지 **3 ~ 5번 과정을 반복**한다.
7. **도착점의 값을 확인**한다.

#### 다익스트라 알고리즘 코드 구조 ([백준 1753. 최단 경로](https://www.acmicpc.net/problem/1753))
