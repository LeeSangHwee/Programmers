function solution(s) {
    let num = s.split(" ");
    let answer = Math.min(...num).toString() + ' ' + Math.max(...num).toString();   
    
    return answer;
}