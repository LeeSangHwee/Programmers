function solution(citations) {
    citations.sort((a, b) => b - a);
    for(let index = 0; index < citations.length; index++) {       
        if (citations[index] < index + 1)
            return index;
    }
    return citations.length;
}