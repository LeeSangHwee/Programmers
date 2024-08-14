function solution(n, m, section) {
    var answer = 0;
    let PaintSection = section[0];
    let i = 0;

    while (i < section.length)
    {
        answer++;
        PaintSection = section[i] + m;
        if (PaintSection > n) break;        
        while (section[i] < PaintSection) i++;
    }

    return answer;
}
