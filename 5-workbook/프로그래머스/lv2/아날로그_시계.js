function solution(h1, m1, s1, h2, m2, s2) {
  // 초 단위 변환
  const toSec = (h, m, s) => h * 3600 + m * 60 + s;
  let start = toSec(h1, m1, s1);
  let end = toSec(h2, m2, s2);

  // 자정을 넘는 경우 보정 (문제 조건상 12시간 이내)
  if (end < start) end += 43200;

  // 각 겹침의 주기
  const T_SM = 3600 / 59; // 초-분침
  const T_SH = 43200 / 719; // 초-시침

  // k 범위 → 알람 개수
  const count = (T) => {
    const first = Math.ceil((start - 1e-9) / T); // 시작점을 포함
    const last = Math.floor((end + 1e-9) / T); // 끝점을 포함
    return Math.max(0, last - first + 1);
  };

  const sm = count(T_SM);
  const sh = count(T_SH);

  // 두 식이 모두 성립(세 바늘 겹침)하는 시각 t = 43200 * n
  const dupFirst = Math.ceil((start - 1e-9) / 43200);
  const dupLast = Math.floor((end + 1e-9) / 43200);
  const dup = Math.max(0, dupLast - dupFirst + 1);

  return sm + sh - dup;
}
