function solution(number, k) {
    let numberArr = number.split('').map(Number);
    const stack = [];
    let count = 0;

    for (let i = 0; i < numberArr.length; i++) {
        while (count < k && stack[stack.length - 1] < numberArr[i]) {
            stack.pop();
            count++;
        }
        stack.push(numberArr[i]);
    }
    
    while (count < k) {
        stack.pop();
        count++;
    }

    return stack.join('');
}
