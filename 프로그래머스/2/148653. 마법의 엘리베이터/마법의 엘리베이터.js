function solution(storey) {
    let answer = 0;

    while (storey > 0) {
        let current_digit = storey % 10;
        let next_digit = Math.floor(storey / 10) % 10;

        if (current_digit > 5 || (current_digit === 5 && next_digit >= 5)) {
            answer += (10 - current_digit);
            storey = Math.floor(storey / 10) + 1;
        } else {
            answer += current_digit;
            storey = Math.floor(storey / 10);
        }
    }

    return answer;
}
