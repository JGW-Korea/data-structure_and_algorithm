import java.util.*;
import java.io.*;

public class Main {

	private static int V; // 정점의 개수
	private static int E; // 간선의 개수
	private static int K; // 시작 정점
	private static ArrayList<int[]>[] graph; // 그래프
	private static int[] dist; // 시작 정점에서 각 정점까지의 최소 거리를 저장하는 배열
	
	// 힙 자료구조로 이루어진 우선순위 큐 생성 (들어오는 값은 간선의 가중치 값을 기준으로 최소힙 구성) 
	private static Queue<int[]> heap = new PriorityQueue<>(new Comparator<int[]>() {
		@Override
		public int compare(int[] o1, int[] o2) {
			return o1[1] - o2[1];
		}
	});
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		V = Integer.parseInt(st.nextToken()); // 입력받은 정점의 개수 저장
		E = Integer.parseInt(st.nextToken()); // 입력받은 간선의 개수 저장
		K = Integer.parseInt(br.readLine()); // 시작 정점 입력 및 할당
		
		graph = (ArrayList<int[]>[]) new ArrayList[V + 1];
		dist = new int[V + 1];
		
		for(int i = 1; i < V + 1; i++) {
			graph[i] = new ArrayList<int[]>();
			dist[i] = Integer.MAX_VALUE;
		}
		
		dist[K] = 0; // 시작 정점은 0으로 초기화
		heap.add(new int[]{K, 0});
		
		for(int i = 0; i < E; i++) {
			st = new StringTokenizer(br.readLine());
			
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int cost = Integer.parseInt(st.nextToken());
			
			graph[from].add(new int[]{to, cost});
		}
		
		// 다익스트라 알고리즘
		while(!heap.isEmpty()) {
			int[] current = heap.remove(); // A -> B 정점까지의 최소 거리를 가진 노드와 간선의 가중치 값을 가져온다.
			
			// 해당 노드와 이어진 정점들을 순회한다.
			for(int i = 0; i < graph[current[0]].size(); i++) {
				int[] next = graph[current[0]].get(i);
				int nextCost = current[1] + next[1];
				
				if(dist[next[0]] > nextCost) {
					dist[next[0]] = nextCost;
					heap.add(new int[] {next[0], nextCost});
				}
			}
		}
		
		// 다익스트라 알고리즘 수행 후 최종 결과 출력
		StringBuilder result = new StringBuilder();
		
		for(int i = 1; i < V + 1; i++) {
			if(dist[i] != Integer.MAX_VALUE) result.append(dist[i] + "\n");
			else result.append("INF\n");
		}
		
		System.out.println(result);
	}

}
