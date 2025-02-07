function solution(L, K, problems) {
  let score = 0;

  // 쉬운 문제별로 배치 (더 많은 점수를 얻기 위해 어려운 문제 오름차순 정렬)
  problems.sort((a, b) => {
    if(a[1] <= L || b[1] <= L) return a[1] - b[1];
    else {
      return a[0] - b[0];
    }
  });

  // 현정이는 K 만큼의 문제를 풀 수 있다.
  for(let i = 0; i < K; i++) {
    // 역량이 어려운 문제보다 클 경우 (쉬운 버전, 어려운 버전 다 풀 수 있기 때문에 +140점)
    if(L >= problems[i][1]) {
      score += 140;
    }

    // 역량이 어려운 문제보다 작으면서, 쉬운 문제보다 클 경우 (쉬운 버전만 풀 수 있기 때문에 +100점)
    else if(L >= problems[i][0]) {
      score += 100;
    }
  }

  return score;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, L, K] = input[0].split(' ').map(Number);
const problems = new Array(N);

for(let i = 1; i < input.length; i++) {
  problems[i-1] = input[i].split(' ').map(Number);
}

console.log(solution(L, K, problems));