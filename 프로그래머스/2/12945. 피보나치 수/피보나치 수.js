function solution(n) {
    const div = 1234567n;
    let num1 = 0n;
    let num2 = 1n;

    for (let i = 2; i <= n; i++) {
        let next = (num1 + num2) % div;
        num1 = num2;
        num2 = next;
    }

    return num2;
}