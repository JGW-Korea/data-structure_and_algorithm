function solution(n, numbers, inputOperationCount) {
  const currentOperationCount = new Array(4).fill(0); // 현재 사용중인 연산자 개수
  const operation = ["+", "-", "*", "/"]; // 연산자 종류

  let maxValue = Number.MIN_SAFE_INTEGER;
  let minValue = Number.MAX_SAFE_INTEGER;

  function dfs(currentValue, currentLength) {
    // 모든 수를 사용한 경우 최대값, 최소값을 갱신한다.
    if (currentLength === n) {
      maxValue = Math.max(maxValue, currentValue);
      minValue = Math.min(minValue, currentValue);
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (currentOperationCount[i] < inputOperationCount[i]) {
        let result;

        // 현재 사용 중인 연산자 카운트 및 결과 구하는 조건문
        switch (operation[i]) {
          case "+":
            currentOperationCount[i] += 1;
            result = currentValue + numbers[currentLength];
            break;

          case "-":
            currentOperationCount[i] += 1;
            result = currentValue - numbers[currentLength];
            break;

          case "*":
            currentOperationCount[i] += 1;
            result = currentValue * numbers[currentLength];
            break;

          case "/":
            currentOperationCount[i] += 1;
            result = Math.trunc(currentValue / numbers[currentLength]);
            break;
        }

        dfs(result, currentLength + 1);

        // 재귀 탈출 후 사용 된 연산자 카운트 감소
        switch (operation[i]) {
          case "+":
            currentOperationCount[i] -= 1;
            break;

          case "-":
            currentOperationCount[i] -= 1;
            break;

          case "*":
            currentOperationCount[i] -= 1;
            break;

          case "/":
            currentOperationCount[i] -= 1;
            break;
        }
      }
    }
  }

  dfs(numbers[0], 1);

  return maxValue + "\n" + minValue;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
const inputOperationCount = input[2].split(" ").map(Number);

console.log(solution(N, numbers, inputOperationCount));
