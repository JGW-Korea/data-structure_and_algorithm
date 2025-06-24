function solution(_, numbers) {
  const dequeue = [];
  numbers.forEach((number, idx) => {
    dequeue.push([idx + 1, number]);
  });

  const answer = [];
  while (dequeue.length) {
    const [idx, move] = dequeue.shift();
    answer.push(idx);

    if (!dequeue.length) break;

    if (move < 0) {
      for (let i = 0; i < Math.abs(move); i++) {
        dequeue.unshift(dequeue.pop());
      }
    } else {
      for (let i = 0; i < move - 1; i++) {
        dequeue.push(dequeue.shift());
      }
    }
  }

  return answer.join(" ");
}

const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");
console.log(solution(Number(input[0]), input[1].split(" ").map(Number)));
