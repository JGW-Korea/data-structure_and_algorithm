## I. 문제 유형 파악 팁 - 입출력 제한

- 문제를 확인할 때 입출력 제한을 먼저 살표보는 것은 매우 중요하다.
- 입력 제한을 확인하면 대략적인 시간 복잡도를 추정할 수 있으며, 이를 통해 요구되는 알고리즘의 유형을 유추할 수 있기 때문이다.
- 예를 들어, 입력값이 최대 100이라면 $O(N^{3})$ 까지도 허용될 가능성이 높으므로, 완전 탐색 문제일 가능성이 크다.

#### 입출력 제한을 통해 문제 유형 파악

1.  N <= 100, 최대: $O(N^{3})$

    - 완전 탐색: 브루트-포스(Brute-Force), 백트래킹(Backtracking)

2.  N <= 10,000, 최대: $O(N^{2})$

    > 문제에 따라 O(N^{2} log N)에 풀어야 될 수도 있음

    - $N * N$ 배열을 모두 순회해야 하는 문제가 많이 나온다.

3.  N <= 1,000,000, 최대: $O(N log N)$

    - 우선순위 큐(Priority Queue & Heap)
    - 정렬(Sorting)
    - 다이나믹 프로그래밍(Dynamic Programming)
    - 위상 정렬(Topological Sort)
    - 최단 경로: 다익스트라(Dijkstra)

4.  N <= 100,000,000, 최대: $O(N)$

    - 다이나믹 프로그래밍(Dynamic Programming)
    - 그리디(Greedy)

5.  N > 100,000,000, 최대: $O(log N)$
    - 이진 탐색(Binary Search)
    - 파라메트릭 서치(Parametric Search)

<br />

## II. 문제 유형 파악 팁 - 문제를 통해 알고리즘 유형 판단

#### 1. 입력값이 작은 문제

- 완전 탐색 기법인 브루트-포스(Brute-Force) 또는 백트래킹(Backtracking) 문제일 가능성이 높다.
- 구현력이 중요한 문제로 출제될 가능성이 높다.

#### 2. 지도가 주어지고 채워진 영역을 찾아야 하는 경우 (Flood Fill)

- 높은 확률로 너비 우선 탐색(BFS, Breadth-First Search), 깊이 우선 탐색(DFS, Depth-First Search) 문제일 가능성이 높다.
- 플러드 필(Flood Fill)과 같이 정직한 방식으로 나오거나 전염병 문제 또는 치즈 문제처럼 살짝 변형되서 나오는 경우도 많다.

#### 3. 그래프 그림이 있는 경우

- 그래프 유형은 최단 거리(Shortest Paths), 최소 신장 트리(MST, Minimum Spanning Tree), 위상 정렬(Topological Sort) 문제일 가능성이 높다.
- "가장 빠른 길", "최단 거리"와 같은 키워드 또는 "X 비용 내로 갈 수 있는 길을 찾아라"와 같은 키워드가 나오면 대부분 최단 거리 문제에 속한다.

  - 최단 경로 알고리즘(벨만-포드, 다익스트라), 너비 우선 탐색, 깊이 우선 탐색을 활용할 수 있다.

- "가장 저렴한 방법으로 모든 경로를 연결해라" 등의 키워드일 경우 대부분 최소 신장 트리 문제에 속한다.

  - 경로가 아닌 통신망, 전송 시간, 회로, 배관 등 다양한 용어로 나올 수 있지만, 핵심은 "모든 경로를 가장 저렴한 방법으로 연결해라" 이다.

- 보통 그래프의 "순서", "차례" 등의 키워드가 나올 경우 위상 정렬 문제일 가능성이 높다.

#### 4. $x$ 조건을 만족하는 가장 최대값 및 최소값을 구하시오

- 조건을 만족하는 값을 구하는 문제는 높은 확률로 결정 문제로 변경할 수 있기 때문에 파라메트릭 서치(Parametric Search)를 활용할 수 있다.

#### 5. 실시간으로 정렬이 이루어져야 하는 문제

- 값이 계속되서 정렬이 이루어져야 된다면 기본 정렬 알고리즘보다 우선순위 큐 문제일 확률이 높다.

#### 6. 입력으로 문자열만 주어진 경우

- 입력으로 문자열만 주어질 경우 구현력을 요구하는 문제일 경우가 높다.

#### 7. 현재 상황에서 가장 최적인 선택을 해야하는 경우

- 문제에서 "항상 최적의 선택을 해야하는 경우" 혹은 "가장 많은 선택을 할 수 있는", "가장 작은 / 큰" 등의 키워드가 들어가면 대부분 그리디 문제일 가능성이 높다.
