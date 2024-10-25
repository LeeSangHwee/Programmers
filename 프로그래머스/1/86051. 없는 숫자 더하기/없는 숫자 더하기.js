function solution(numbers) {  
    const totalSum = 45;
    const numberSum = numbers.reduce((acc, cur) => acc += cur, 0);
    return totalSum - numberSum;
}