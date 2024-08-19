function solution(n, lost, reserve) {
    let student = new Array(n).fill(1);
    
    lost.forEach(_lost => student[_lost - 1]--);
    reserve.forEach(_reserve => student[_reserve - 1]++);
    
    for(let index = 0; index < student.length; index++) {
        if (student[index] === 0) {
            if (index > 0 && student[index - 1] === 2) {
                student[index]++;
                student[index - 1]--;
            } else if (index < n - 1 && student[index + 1] === 2) {
                student[index]++;
                student[index + 1]--;
            }
        }
    }
    
    let answer = student.filter(stu => stu > 0).length;
    return answer;
}
