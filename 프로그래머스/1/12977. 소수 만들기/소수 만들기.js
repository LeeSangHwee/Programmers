function IsPrime(nums) {
    if (nums < 2) return false;
    
    for (let l = 2; l <= Math.sqrt(nums); l++)
        if (nums % l === 0) return false;
    
    return true;
}

function solution(nums) {
    var answer = 0;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(IsPrime(sum)) answer++;            
            }
        }
    }   
    
    return answer;
}