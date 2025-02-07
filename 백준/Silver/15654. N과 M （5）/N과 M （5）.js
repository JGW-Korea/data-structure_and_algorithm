function solution(n, m, numbers) {
	numbers.sort((a, b) => a - b); // 사전 순으로 수열을 가지기 위해서 정렬시킨다.
	
	const seqNumbers = new Array(m).fill(0); // 길이가 M인 수열을 담기 위한 배열
	const isUsed = new Array(numbers[n - 1] + 1).fill(false); // 주어진 N개의 수의 사용 유무를 담기 위한 배열
	
	let result = '';
	
	function dfs(currentLength) {
		if(currentLength === m) { // 길이가 M인 수열을 만들었을 경우
			result += seqNumbers.join(' ') + '\n';
			return;
		}
		
		for(let i = 0; i < n; i++) {
			if(!isUsed[numbers[i]]) { // 아직 사용하고 있지 않는 수일 경우
				seqNumbers[currentLength] = numbers[i]; // 현재 위치에 수를 담는다.
				isUsed[numbers[i]] = true; // 사용 표시를 한다.
				dfs(currentLength + 1); 
				isUsed[numbers[i]] = false; // 사용 표시를 취소시킨다.
			}
		}
	}
	
	dfs(0);
	
	return result;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

console.log(solution(n, m, numbers));