function solution(citations) {
    citations.sort((a, b) => b - a);
    for(let index = 0; index < citations.length; index++) {       
        // if (citations[index] >= index + 1)// 인용 횟수 >= 논문 순위, 인용 횟수가 논문 순위보다 크거나 같으면 true
        // if (citations[index] <= index + 1)// 인용 횟수 <= 논문 순위, 인용 횟수가 논문 순위보다 작거나 같으면 true
        if(citations[index] < index + 1)
            return index;
    }
    return citations.length;
}