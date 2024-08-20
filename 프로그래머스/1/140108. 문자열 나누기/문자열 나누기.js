function solution(s) {
    let answer = 0;
    let X = s[0];
    let count_X = 0;
    let count_NonX = 0;

    for (let i = 0; i < s.length; i++)
    {
        X === s[i] ? count_X++ : count_NonX++;
        
        if (count_X === count_NonX) {
            if (i + 1 < s.length) X = s[i + 1];
            count_X = 0;
            count_NonX = 0;
            answer++;
        }
    }
    
    if (count_X !== count_NonX) answer++; 
    return answer;
}