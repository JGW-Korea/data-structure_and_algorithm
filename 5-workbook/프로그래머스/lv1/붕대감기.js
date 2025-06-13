// 1. t초마다 체력을 회복 (1초: x만큼, 연속: y만큼), 단, 최대 체력 이상은 불가능
// 2. 피격 당할 시 체력이 깍이고, 회복 시전 시간이 0초로 초기화된다. 단, 피격 시 체력이 0이하일 경우 캐릭터가 사망
// -> 캐릭터가 끝까지 생존할 수 있는지에 대한 여부를 반환(남은 체력 | -1)
function solution(bandage, health, attacks) {
  const [castingTime, second, plus] = bandage; // [시전시간, 초당, 추가]
  const maxTime = attacks.at(-1)[0]; // 게임 최대 시간

  let answer = health; // 초기 체력값은 최대 체력으로 초기화

  let attackIdx = 0; // 공격 정보 순서(index)
  let successTime = 0; // 회복 성공 시간

  for (let time = 1; time < maxTime + 1; time++) {
    // 1. 몬스터가 공격하는 시점
    if (time === attacks[attackIdx]?.[0]) {
      answer -= attacks[attackIdx++][1];
      successTime = 0;

      if (answer <= 0) return -1;
    }

    // 2. 몬스터가 공격하지 않는 시점
    else {
      successTime += 1;

      if (successTime !== castingTime) answer += second; // 초당 회복
      else {
        // 추가 회복
        answer += second + plus;
        successTime = 0;
      }

      // 회복된 체력이 최대치를 넘어선 경우
      if (answer > health) answer = health;
    }
  }

  return answer;
}
