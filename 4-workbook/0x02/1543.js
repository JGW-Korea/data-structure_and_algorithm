function solution(a, b) {
  let answer = 0;

  // a의 문자열을 계속 더해나간다.
  let current = "";
  for (let i = 0; i < a.length; i++) {
    current += a[i];

    // 현재 부분 문자열에 b가 포함되어 있을 경우 중복되지 않은 단어가 등장했다는 의미
    if (current.includes(b)) {
      answer += 1;
      current = "";
    }
  }

  return answer;
}

const [a, b] = require("fs").readFileSync("index.txt").toString().trim().split("\n");
console.log(solution(a, b));
