function solution(arr, divisor) {
    let answer = arr.filter((element) => element % divisor === 0);
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}