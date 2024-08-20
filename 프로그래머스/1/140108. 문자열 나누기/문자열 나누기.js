// 입력 문자열 s
function solution(s) {
    let answer = 0;
    let X = s[0]; // 첫글자 x
    let count_X = 0;
    let count_NonX = 0;
    // 반복   
    for (let i = 0; i < s.length; i++) {
        // x와 x가 아닌 다른 글자들이 나온 횟수 세기
        X === s[i] ? count_X++ : count_NonX++;

        // 두 횟수가 같아지는 순간 멈춤
        if (count_X === count_NonX) {
            // 모든 값 초기화
            X = s[i + 1];// 배열 인덱스 값 최댓값이더라도 분리하고 나가기 때문에 상관 없음
            count_X = 0;
            count_NonX = 0;
            // 지금까지 읽은 문자열 분리
            answer++;
        }
    }
    // 분리된 마지막 부분이 남아있는 경우를 처리
    if (count_X !== count_NonX) answer++;
    // 분리한 문자열의 개수 세기    
    return answer;
}