const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, M, DNA) {
  const answer = ["", 0]; // [DNA, 최소 길이]

  for (let i = 0; i < M; i++) {
    const count = { A: 0, C: 0, G: 0, T: 0 }; // 각 위치에서 최대 빈도가 높은 DNA 문자
    for (let j = 0; j < N; j++) {
      count[DNA[j][i]] += 1;
    }

    // 현재 위치에서 최대 빈도가 높은 DNA 문자를 구해준다.
    const temp = ["A", 0];
    for (const char of ["A", "C", "G", "T"]) {
      if (temp[1] < count[char]) {
        temp[0] = char;
        temp[1] = count[char];
      }
    }

    // Hamming Distance DNA와 최소 길이를 갱신해준다.
    [answer[0], answer[1]] = [answer[0] + temp[0], answer[1] + (N - temp[1])];
  }

  return answer.join("\n");
}

const [N, M] = input[0].split(" ").map(Number);
const DNA = input.slice(1);
console.log(solution(N, M, DNA));
