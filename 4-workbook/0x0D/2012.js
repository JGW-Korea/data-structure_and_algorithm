function solution([N, ...ranks]) {
  ranks.sort((a, b) => a - b);

  let answer = 0;
  for (let rank = 1; rank < N + 1; rank++) {
    if (rank !== ranks[rank - 1]) {
      answer += Math.abs(rank - ranks[rank - 1]);
    }
  }

  return answer;
}

console.log(solution(require("fs").readFileSync("index.txt").toString().trim().split("\n").map(Number)));
