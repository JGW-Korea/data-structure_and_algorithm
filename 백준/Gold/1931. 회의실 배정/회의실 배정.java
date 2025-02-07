import java.util.*;
import java.io.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int N = Integer.parseInt(br.readLine()); // 회의실의 개수
		
		// N개의 회의 정보 시간이 주어진다. { 시작 시간, 끝나는 시간 } 
		int [][]schedules = new int[N][2];
		
		for(int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			schedules[i][0] = Integer.parseInt(st.nextToken()); // 시작 시간을 배열에 담는다
			schedules[i][1] = Integer.parseInt(st.nextToken()); // 끝나는 시간을 배열에 담는다
		}
		
		// 빨리 끝나는 시간을 기준으로 정렬시킨다. (끝나는 시간이 같을 경우에는 시작 시간이 빠른 순으로 정렬한다.)
		Arrays.sort(schedules, (a, b) -> {
			if(a[1] != b[1]) return a[1] - b[1];
			else return a[0] - b[0];
		});
		
		
		/* 
		 	문제 풀이 :
		   		무조건 첫 번째(index : 0)에 위치한 회의는 진행하기 때문에 answer(정답)을 1로 초기화한다.
		   		이후 두 번째 (index : 1)에 위치한 회의부터 반복을 시작해서 현재 i번째의 회의 시작시간이
		 		현재 end보다 크거나 같을 경우 해당 회의를 진행하고, 끝나는 시간이 i번째 회의의 끝나는 시간으로 변경한다.
		*/
		
		int answer = 1; // 최대 사용할 수 있는 회의의 최대 개수
		
		int start = schedules[0][0]; // 첫 번째 회의 시작 시간을 가져온다.
		int end = schedules[0][1]; // 첫 번째 회의 끝나는 시간을 가져온다.
		
		for(int schedule = 1; schedule < N; schedule++) {
			int nextStart = schedules[schedule][0];
			int nextEnd = schedules[schedule][1];
			
			if(end <= nextStart) {
				end = nextEnd;
				answer += 1;
			}
		}
		
		System.out.println(answer);
	}
}
