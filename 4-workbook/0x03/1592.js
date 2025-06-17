function solution(N, M, L) {
  const person = new Array(N + 1).fill(0); // N명의 친구들이 원형으로 모여있다.

  // 1번째 사람이 먼저 공을 받는다.
  let current = (person[1] = 1);
  let answer = 0;

  // 공을 M번 받은 사람이 있을 경우에는 게임을 멈춘다.
  while (!person.includes(M)) {
    let next = person[current] % 2 === 1 ? current + L : current - L;

    if (next > N) {
      next -= N;
    } else if (next <= 0) {
      next += N;
    }

    person[next] += 1;
    current = next;
    answer += 1;
  }

  return answer;
}

const [N, M, L] = require("fs").readFileSync("index.txt").toString().trim().split(" ").map(Number);
console.log(solution(N, M, L));
