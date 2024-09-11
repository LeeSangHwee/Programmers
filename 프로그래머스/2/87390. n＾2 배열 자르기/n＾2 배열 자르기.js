function solution(n, left, right) {
    var answer = [];
     for (let index = left; index <= right; index++) {
         let row = Math.floor(index / n);
         let column = index % n
         answer.push(Math.max(row, column) + 1);
    }        
    return answer;
}