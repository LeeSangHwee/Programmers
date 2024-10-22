function solution(num) {    
    let answer = 0;
    
    if(num === 1) return 0;    
    for(let n = num; n !== 1 && answer < 500; answer++) {        
        if(n % 2 === 0) n /= 2;
        else n = n * 3 + 1;                
    }
    
    if(answer >= 500) return -1;
    else return answer;
}