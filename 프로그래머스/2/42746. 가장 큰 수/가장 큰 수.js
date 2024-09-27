function solution(numbers) {
    const strNums = numbers.map(number => number.toString());    
    strNums.sort((a, b) => (b + a) - (a + b));
    
    const result = strNums.join('');
    return result[0] === '0' ? '0' : result; 
}