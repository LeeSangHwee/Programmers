function solution(n) {
    let num = Math.sqrt(n);
    if(!Number.isInteger(num)) return -1;
    else return Math.pow((num + 1), 2);
}