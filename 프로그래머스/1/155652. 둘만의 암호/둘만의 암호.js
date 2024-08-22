function solution(s, skip, index) {
    let answer = '';
    let skipSet = new Set(skip.split("").map(skipElement => skipElement.codePointAt()));
    
    let sMap = s.split("").map(function(sElement) {
        let startCode = sElement.codePointAt(0);
        let changeCount = 0;

        while (changeCount < index) {
            startCode++;
            if (startCode > 122) startCode = 97;
            if (!skipSet.has(startCode)) {
                changeCount++;
            }
        }

        return startCode;
    });

    answer = String.fromCharCode(...sMap);
    return answer;
}