import java.util.*;
import java.io.*;

public class Main {

	static int N;
	static int S;
	static int[] numbers;
	static int count = 0;
	
	public static void dfs(int currentLength, int total) {
		if(currentLength == N) {
			if(total == S) count += 1;
			return;
		}
		
		dfs(currentLength + 1, total);
		dfs(currentLength + 1, total + numbers[currentLength]);
	}
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.parseInt(st.nextToken());
		S = Integer.parseInt(st.nextToken());
		
		numbers = new int[N];
		st = new StringTokenizer(br.readLine());
		
		for(int i = 0; i < N; i++) {
			numbers[i] = Integer.parseInt(st.nextToken());
		}
		
		dfs(0, 0);
		
		System.out.println(S == 0 ? count - 1 : count);
	}
	
}
