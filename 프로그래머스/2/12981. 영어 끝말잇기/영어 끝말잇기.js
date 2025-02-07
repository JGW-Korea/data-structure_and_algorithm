/*

    끝말잇기 조건
    1. 한 사람씩 차례대로 말함
    2. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어
    3. 이전에 등장했던 단어는 사용 불가
    4. 한글자인 단어는 인정되지 않음

    반환갑 : 탈락하는 사람의 번호, 몇 번 타임에 탈락했는지

*/

function solution(n, words) {
    const totalWords = [words[0]];
    
    for(let i = 1; i < words.length; i++) {
        // 중복된 단어 또는 앞 글자가 마지막 단어의 마지막 문자가 아닐 경우
        if(totalWords.includes(words[i]) || totalWords[totalWords.length - 1].at(-1) !== words[i].at(0)) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
    
        // 현재 사람이 말한 단어를 담는다.
        totalWords.push(words[i]);
    }
    
    // 반복문 조건 내에서 모든 사람이 탈락하지 않았을 경우 [0, 0]을 반환한다.
    return [0, 0];
}