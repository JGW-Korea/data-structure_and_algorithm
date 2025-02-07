import java.util.*;
import java.io.*;

public class Main {

	private static int N;
	private static int[] W;
	private static int[][] P;
	
	private static int[] parent;
	
	public static int find(int x) {
		if(parent[x] == x) return x;
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
	
	public static int solution() {
		ArrayList<int[]> graph = new ArrayList<>(); // 그래프
		int answer = 0;
		
		// 그래프 모델링
		for(int i = 1; i < N + 1; i++) {
			graph.add(new int[] { 0, i, W[i] });
			
			for(int j = 1; j < N + 1; j++) {
				graph.add(new int[] { i, j, P[i][j] });
			}
		}
		
		// 그래프 간선의 가중치 값을 기준으로 오름차순 정렬
		graph.sort(new Comparator<int[]>() {

			@Override
			public int compare(int[] o1, int[] o2) {
				return o1[2] - o2[2];
			}
		
		});
		
		for(int i = 0; i < graph.size(); i++) {
			int a = graph.get(i)[0];
			int b = graph.get(i)[1];
			int cost = graph.get(i)[2];
			
			
			if(!compare(a, b)) {
				answer += cost;
				union(a, b);
			}
		}
		
		return answer;
	}
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		N = Integer.parseInt(br.readLine());
		
		// i번째 논에 우물을 직접 팔 때 드는 비용을 저장시킨다.
		W = new int[N + 1];
		for(int i = 1; i < N + 1; i++) {
			W[i] = Integer.parseInt(br.readLine());
		}
		
		// 주어진 인접 행렬 그래프 값들을 graph 배열에 할당한다. 
		P = new int[N + 1][N + 1];
		for(int i = 1; i < N + 1; i++) {
			st = new StringTokenizer(br.readLine());
			for(int j = 1; j < N + 1; j++) {
				P[i][j] = Integer.parseInt(st.nextToken());
			}
		}

		parent = new int[N + 1];
		for(int i = 0; i < N + 1; i++) {
			parent[i] = i;
		}
		
		System.out.println(solution());
	}
	
}
