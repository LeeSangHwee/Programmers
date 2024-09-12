function solution(arr1, arr2) {
    let answer = Array.from({ length: arr1.length }, () => Array(arr2[0].length).fill(0));
    
    for(let row = 0; row < arr1.length; row++) {
        for(let column = 0; column < arr2[0].length; column++) {
            answer[row][column] = arr1[row].reduce(function(acc, cur, idx) {
                return acc + cur*arr2[idx][column];
            }, 0);
        }
    }  
    return answer;
}