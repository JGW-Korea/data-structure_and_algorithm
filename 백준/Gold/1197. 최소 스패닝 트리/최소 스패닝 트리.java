import java.util.*;
import java.io.*;

public class Main {

	private static int V; // 정점의 개수
	private static int E; // 간선의 개수
	
	private static ArrayList<int[]> graph = new ArrayList<>();
	private static int[] parent; // 서로서 집합을 위한 배열
	
	private static int result = 0; // 최소 신장 트리의 가중치의 합
	
	public static int find(int x) {
		if(parent[x] == x) {
			return x;
		}
		return parent[x] = find(parent[x]);
	}
	
	public static void union(int a, int b) {
		a = find(a);
		b = find(b);
		
		if(a < b) {
			parent[a] = b;
		} else {
			parent[b] = a;
		}
	}
	
	public static boolean compare(int a, int b) {
		a = find(a);
		b = find(b);
		
		return a == b;
	}
	
	public static void main(String[] args) throws Exception {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		V = Integer.parseInt(st.nextToken());
		E = Integer.parseInt(st.nextToken());
		
		// 서로서 집합을 위한 배열에는 노드의 개수만큼 크기를 잡는다.
		parent = new int[V + 1];
		
		for(int i = 1; i < V + 1; i++) {
			parent[i] = i; // 처음 초기화는 자기 자신을 부모 정점으로 쌓는다.
		}
		
		// 주어진 그래프 형태를 표현한다.
		for(int i = 0; i < E; i++) {
			st = new StringTokenizer(br.readLine());
			
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int cost = Integer.parseInt(st.nextToken());
			
			graph.add(new int[] { from, to, cost });
		}
		
		// 그래프를 간선을 기준으로 내림차순 정렬을 시킨다. (그리디 알고리즘)
		graph.sort(new Comparator<int[]>() {
			@Override
			public int compare(int[] o1, int[] o2) {
				return o1[2] - o2[2];
			}
		});
		
		// 크루스칼 알고리즘 로직
		for(int i = 0; i < E; i++) {
			int a = graph.get(i)[0];
			int b = graph.get(i)[1];
			int cost = graph.get(i)[2];
			
			if(!compare(a, b)) {
				result += cost;
				union(a, b);
			}
		}
		
		System.out.println(result);
	}

}
