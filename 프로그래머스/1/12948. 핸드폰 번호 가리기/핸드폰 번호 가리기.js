function solution(phone_number) {
    var answer = '';
    for(let i = 0; i < phone_number.slice(0, phone_number.length - 4).length; i++) {answer += '*';}
    answer += phone_number.slice(phone_number.length - 4);
    return answer;
}