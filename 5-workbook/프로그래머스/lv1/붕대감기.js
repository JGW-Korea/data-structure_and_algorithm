// 1. t초마다 체력을 회복 (1초: x만큼, 연속: y만큼), 단, 최대 체력 이상은 불가능

// 기술을 쓰는 도중 몬스터에게 공격을 당하면 기술이 취소되고, 체력을 회복할 수 없다.
// 몬스터에게 공격당해 기술이 취소당하거나 기술이 끝나면 그 즉시 붕대 감기를 다시 사용하며,
// 연속 성공 시간이 0으로 초기화된다.

// 3. 공격을 받으면 피해량만큼 체력이 줄고, 0이하가 되면 죽음

// -> 캐릭터가 끝까지 생존할 수 있는지에 대한 여부를 반환(남은 체력 | -1)

function solution(bandage, health, attacks) {
  const [castingTime, second, plus] = bandage; // [시전 시간, 초당 회복, 추가 회복]

  let answer = health; // 남은 체력
  let successTime = 0; // 붕대 감기 성공 시간

  const maxTime = attacks.at(-1)[0]; // 최대 시간
  let attackIdx = 0; // 공격 순서

  for (let time = 1; time < maxTime + 1; time++) {
    // 1. 공격 시점일 경우
    if (attacks[attackIdx]?.[0] === time) {
      // 현재 체력 감속 및 회복 연속 시간 초기화
      answer -= attacks[attackIdx][1];
      successTime = 0;

      attackIdx += 1;
      if (answer <= 0) return -1; // 체력이 0이하일 경우
    }

    // 2. 공격 시점이 아닐 경우 -> 회복 가능
    else {
      successTime += 1;

      if (successTime !== castingTime) answer += second; // 연속 회복 시간이 동일하지 않은 경우
      else {
        answer += second + plus;
        successTime = 0;
      }

      // 최대 체력보다 넘어갈 경우 초기화
      if (answer > health) answer = health;
    }
  }

  return answer;
}
