function solution(n) {
    var answer = 0;
    let nums = [];
    
    for(let i = 1 ; i <= Math.sqrt(n) ; i++){
        if(n % i === 0) {
            nums.push(i);
            if(n / i != i) nums.push(n / i);
        }
    }
    
    answer = nums.reduce((acc, cur) => (acc + cur), 0);
    return answer;
}