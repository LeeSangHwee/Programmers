function solution(answers) {
    var answer = [];
    
    let ScoreCount = [0, 0, 0]
    let student = {
        1:[1, 2, 3, 4, 5],
        2:[2, 1, 2, 3, 2, 4, 2, 5],
        3:[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]            
    };
 
    for(let index = 0; index < answers.length; index++)
    {
        for(let key in student)
        {
            if(student[key][index % student[key].length] === answers[index])
                ScoreCount[key-1]++;
        }
    }

    let MaxScore = Math.max(...ScoreCount);

    ScoreCount.forEach((HighScoreStdnt, index) => {
        if (HighScoreStdnt === MaxScore) {
            answer.push(index + 1);
        }
    });
    
    return answer;
}