import java.util.*;
import java.io.*;

public class Main {

	static int N, M;
	static int[] numbers;
	static boolean[] isUsed;
	
	static void solution(int currentLength) {
		// M의 길이를 만족할 경우에는 수열을 출력하고 이전 함수로 돌아간다.
		if(currentLength == M) {
			for(int num: numbers) {
				System.out.print(num + " ");
			}
			
			System.out.println();
			return;
		}
		
		// 1 ~ N까지 자연수 중에서 중복 없는 수를 구하기 위해 백트래킹 알고리즘을 수행한다.
		for(int i = 0; i < N; i++) {
			if(!isUsed[i]) {
				numbers[currentLength] = i + 1;
				isUsed[i] = true;
				solution(currentLength + 1);
				isUsed[i] = false;
			}
		}
	}
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		// 입력으로 받은 N과 M을 멤버 변수에 저장한다.
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		
		// 멤버 변수 N과 M을 이용해서 각 배열의 크기를 명시한다.
		numbers = new int[M];
		isUsed = new boolean[N];

		solution(0);
	}
	
}
