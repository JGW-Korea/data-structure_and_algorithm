const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, removeItem, prioritys) {
  if (N === 1) return 1; // 프린터 큐에 들어가 있는 문서의 개수가 1개일 경우에는 그냥 뽑으면 된다.

  const maxPriority = [...prioritys].sort((a, b) => a - b); // 가장 높은 우선순위 값

  // 프린터 큐에 들어가 있는 문서를 `[문서, 우선순위]` 로 구성한다.
  const printerQueue = [];
  prioritys.forEach((priority, idx) => printerQueue.push({ document: idx, priority }));

  // 뽑고 싶은 문서가 몇 번째로 출력되는지 확인
  let answer = 0;
  while (printerQueue.length) {
    const { document, priority } = printerQueue.shift(); // 맨 앞에 위치한 문서(문서, 우선순위)를 가져온다.

    // 1) 현재 문서가 가장 높은 우선순위를 가진 문서가 아닌 경우
    if (priority !== maxPriority.at(-1)) printerQueue.push({ document, priority });

    // 2) 현재 문서가 가장 높은 우선순위를 가진 문서인 경우
    if (priority === maxPriority.at(-1)) {
      if (removeItem === document) return answer + 1; // 2-1) 삭제하고 싶은 문서일 경우

      // 2-2) 삭제하고 싶은 문서가 아닌 경우
      answer += 1;
      maxPriority.pop();
    }
  }

  // let answer = 0;
  // while (!printerQueue.isEmpty()) {
  //   const { document, _ } = printerQueue.delete();

  //   if (document === removeItem) return answer + 1; // 1) 우선순위가 가장 높은 문서가 삭제하고 싶은 문서일 경우
  //   answer += 1; // 2) 삭제하고 싶은 문서가 아닐 경우 그냥 해당 문서는 삭제하고 랭크만 1증가한다. (추가할 필요 없음)
  // }
}

let TC = Number(input[0]); // 상수(constant)로 선언해도 무방하지만 가독성을 위해 let 변수 선언
let idx = 1;
let answer = "";
for (let t = 0; t < TC; t++) {
  const [N, removeItem] = input[idx++].split(" ").map(Number);
  const prioritys = input[idx++].split(" ").map(Number);
  answer += solution(N, removeItem, prioritys) + "\n";
}

console.log(answer);
