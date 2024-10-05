function solution(sequence, k) {
    let answer = [];
    let left = 0;
    let accumulator = 0;

    for (let right = 0; right < sequence.length; right++) {
        accumulator += sequence[right];

        while (accumulator > k) {
            accumulator -= sequence[left];
            left++;
        }

        if (accumulator === k) {
            if (answer.length === 0 || (right - left < answer[1] - answer[0])) {
                answer[0] = left;
                answer[1] = right;
            }
        }
    }
    return answer;
}