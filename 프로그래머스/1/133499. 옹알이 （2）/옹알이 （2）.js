function solution(babbling) {
    var answer = 0;
    const baby_FourWords = ["aya", "ye", "woo", "ma"];
    
    babblingLoop:
    for (const babblingWord of babbling) {
        let temp_BabblingWord = babblingWord;
        
        for (const babyWord of baby_FourWords) {
            if (temp_BabblingWord.includes(babyWord + babyWord)) continue babblingLoop;            
            temp_BabblingWord = temp_BabblingWord.split(babyWord).join(' ');
        }        
        if (temp_BabblingWord.trim() === '') answer++;
    }
    return answer;
}
