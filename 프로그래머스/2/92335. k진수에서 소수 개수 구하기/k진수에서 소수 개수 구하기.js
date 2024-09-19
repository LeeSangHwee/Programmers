function IsPrime(nums) {
    if (nums < 2) return false;

    for (let l = 2; l <= Math.sqrt(nums); l++)
        if (nums % l === 0) return false;

    return true;
}

function solution(n, k) {
    var answer = 0;
    let trans_n = n.toString(k);
    trans_n = trans_n.split('0');  
    trans_n.forEach(element => { if(IsPrime(element) && element != '1') answer++; });
    
    return answer;
}