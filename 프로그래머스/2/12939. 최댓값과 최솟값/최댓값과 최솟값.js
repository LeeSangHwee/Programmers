function solution(s) {
    let numArr = s.split(" ");    
    return Math.min(...numArr).toString() + ' ' + Math.max(...numArr).toString();
}