// N x M 크기 격자 모양의 퍼즐판이 주어진다.
//  - 퍼즐판에는 빨간색 수레와 파란색 수레가 하나씩 존재한다. 각 수레들은 자신의 시작 칸에서부터 자신의 도착 칸까지 이동해야 하낟.
//  - 모든 수레들은 각자의 도착 칸으로 이동시키면 퍼즐을 풀 수 있다.

// 각 턴마다 반드시 모든 수레를 상하좌우로 인접한 칸 중 한 칸으로 움직이여야 한다. 단, 수레를 움직일때는 아래와 같은 규칙이 존재
//  1. 수레는 벽이나 격자 판 밖으로 움직일 수 없다.
//  2. 수레는 자신이 방문했던 칸으로 움직일 수 없다.
//  3. 자신의 도착 칸에 위치한 수레는 움직이지 않는다. 계속 해당 칸에 고정해 놓아야 한다.
//  4. 동시에 두 수레를 같은 칸으로 움직일 수 없다.
//  5. 수레끼리 자리를 바꾸며 움직일 수 없다. (Swap 불가)
function solution(maze) {
  const [N, M] = [maze.length, maze[0].length]; // N x M 사이즈

  // 빨간, 파란 수레의 시작, 도착위치를 명시한다.
  let redStart, blueStart;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      switch (maze[i][j]) {
        case 1:
          redStart = [i, j];
          break;
        case 2:
          blueStart = [i, j];
          break;
      }
    }
  }

  // 방문 처리를 위한 다차원 배열(Array[0] => 빨간 수레 위치 및 퍼즐판 크기, Array[1] => 파랑 수레 위치 및 퍼즐판 크기)
  const visited = Array.from({ length: 2 }, () => Array.from({ length: N }, () => Array.from({ length: M }, () => 0)));
  visited[0][redStart[0]][redStart[1]] = visited[1][blueStart[0]][blueStart[1]] = 1;

  const isRangeError = (x, y) => (x < 0 || y < 0 || x >= N || y >= M ? false : true); // 퍼즐판 유효 범위 체크
  const isVisistedCheck = (num, x, y) => visited[num][x][y] === 0; // 방문 여부 체크
  const isCheck = (rx, ry, bx, by) => {
    if (maze[rx][ry] === 3 && maze[bx][by] === 4) return "BOTH";
    else if (maze[rx][ry] === 3 && maze[bx][by] !== 4) return "RED";
    else if (maze[rx][ry] !== 3 && maze[bx][by] === 4) return "BLUE";
    else return "NONE";
  };

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 퍼즐판 이동 DFS 수행
  let answer = [];
  function dfs(red, blue, cnt) {
    const [redX, redY] = red;
    const [blueX, blueY] = blue;

    // 조건 부합 여부 체크 및 DFS 탐색 수행
    switch (isCheck(redX, redY, blueX, blueY)) {
      case "BOTH":
        answer.push(cnt);
        return;

      // 빨간 수레가 도착 지점에 도달한 경우 -> 파란 수레만 이동
      case "RED":
        for (let i = 0; i < 4; i++) {
          const [nextBlueX, nextBlueY] = [blueX + dx[i], blueY + dy[i]];

          // (범위 + 방문 여부 확인) && (빨간 수레 위치 겹침 여부 확인) && (벽 여부 확인)
          if (
            isRangeError(nextBlueX, nextBlueY) &&
            isVisistedCheck(1, nextBlueX, nextBlueY) &&
            !(redX === nextBlueX && redY === nextBlueY) &&
            maze[nextBlueX][nextBlueY] !== 5
          ) {
            visited[1][nextBlueX][nextBlueY] = 1;
            dfs([redX, redY], [nextBlueX, nextBlueY], cnt + 1);
            visited[1][nextBlueX][nextBlueY] = 0;
          }
        }
        break;

      // 파란 수레가 도착 지점에 도달한 경우 -> 빨간 수레만 이동
      case "BLUE":
        for (let i = 0; i < 4; i++) {
          const [nextRedX, nextRedY] = [redX + dx[i], redY + dy[i]];

          // (범위 + 방문 여부 확인) && (파란 수레 위치 겹침 여부 확인) && (벽 여부 확인)
          if (
            isRangeError(nextRedX, nextRedY) &&
            isVisistedCheck(0, nextRedX, nextRedY) &&
            !(blueX === nextRedX && blueY === nextRedY) &&
            maze[nextRedX][nextRedY] !== 5
          ) {
            visited[0][nextRedX][nextRedY] = 1;
            dfs([nextRedX, nextRedY], [blueX, blueY], cnt + 1);
            visited[0][nextRedX][nextRedY] = 0;
          }
        }
        break;

      // 어느 수레도 도착 지점에 도달하지 않은 경우 -> 두 수레 모두 이동
      case "NONE":
        // 빨간 수레 먼저 이동
        for (let redMove = 0; redMove < 4; redMove++) {
          const [nextRedX, nextRedY] = [redX + dx[redMove], redY + dy[redMove]];

          // (범위 + 방문 여부 확인) && (벽 여부 확인) 조건문 통과 시 파란 수레 이동
          if (
            isRangeError(nextRedX, nextRedY) &&
            isVisistedCheck(0, nextRedX, nextRedY) &&
            maze[nextRedX][nextRedY] !== 5
          ) {
            for (let blueMove = 0; blueMove < 4; blueMove++) {
              const [nextBlueX, nextBlueY] = [blueX + dx[blueMove], blueY + dy[blueMove]];

              // (범위 + 방문 여부 확인) && (빨간 수레가 이동한 위치와 겹침 여부 확인) && (벽 여부 확인)
              if (
                isRangeError(nextBlueX, nextBlueY) &&
                isVisistedCheck(1, nextBlueX, nextBlueY) &&
                !(nextRedX === nextBlueX && nextRedY === nextBlueY) &&
                maze[nextBlueX][nextBlueY] !== 5
              ) {
                // 두 수레 모두 이동한 위치와 이전 두 수레 위치와 겹침 여부 확인
                if (!(redX === nextBlueX && redY === nextBlueY && blueX === nextRedX && blueY === nextRedY)) {
                  visited[0][nextRedX][nextRedY] = 1;
                  visited[1][nextBlueX][nextBlueY] = 1;
                  dfs([nextRedX, nextRedY], [nextBlueX, nextBlueY], cnt + 1);
                  visited[0][nextRedX][nextRedY] = 0;
                  visited[1][nextBlueX][nextBlueY] = 0;
                }
              }
            }
          }
        }
        break;
    }
  }

  dfs(redStart, blueStart, 0);

  // 길이 X ? 이동 불가능 : 이동 가능
  return answer.length === 0 ? 0 : Math.min(...answer);
}
