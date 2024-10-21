function solution(x, n) {
    var answer = [];
    for(let _n = 0; _n < n; _n++)
        answer[_n] = x * (_n + 1);
    
    return answer;
}