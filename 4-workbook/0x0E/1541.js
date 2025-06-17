function solution(data) {
  let answer = 0;
  for (let i = 0; i < data.length; i++) {
    // 현재 인덱스 위치가 가리키는 원소를 "+" 기호 기준으로 분리하고 분리된 값들을 더해준다.
    // 또한, 현재 순서의 값에 "+" 기호가 없다면, Number 자료형으로 수정만 해주면 된다.
    const current = data[i]
      .split("+")
      .map(Number)
      .reduce((sum, curr) => (sum += curr), 0);

    if (i === 0) answer += current; // 첫 번째 값은 무조건 더해준다.
    else {
      answer -= current; // 이후 모든 값은 - 기호로 나눠놨기 때문에 모두 뺴준다.
    }
  }

  return answer;
}

const input = require("fs").readFileSync("index.txt").toString().trim();
console.log(solution(input.split("-"))); // 주어진 문자열을 '-' 기호로 분리한다.
