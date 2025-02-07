import java.util.*;
import java.io.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(br.readLine()); // N 입력
		String result = "";
		
		for(int i = 0; i < n; i++) { // 괄호는 최대 N번 까지 받을 수 있다.
			char []parenthesis = br.readLine().toCharArray(); // 괄호를 입력 받는다.
			int answer = 0; // 올바른 괄호일 경우 연산의 결과는 0에 해당한다.
			
			for(char par: parenthesis) {
				if(answer == 0 && par == ')') { // 값이 0인데, 닫는 괄호가 나올 경우 더 이상 탐색은 무의미
					answer -= 1;
					break;
				}
				
				
				if(par == '(') answer += 1; // 여는 괄호가 나올 경우 +1
				else answer -= 1; // 닫는 괄호가 나올 경우 -1
			}
			
			// answer의 값이 0일 경우 올바른 괄호(YES), 0이 아닐 경우 올바른 괄호X(NO)
			result += (answer == 0 ? "YES" : "NO") + "\n";
		}
		
		// 문자열로 저장한 답을 출력한다.
		System.out.println(result);
		
	}

}
