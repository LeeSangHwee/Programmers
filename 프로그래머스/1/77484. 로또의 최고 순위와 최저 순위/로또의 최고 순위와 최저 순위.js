function solution(lottos, win_nums) {           
    var answer = [6, 6, 5, 4, 3, 2, 1];
    
    const zero_count = lottos.filter(num => 0 === num).length;
    const match_count = lottos.filter(num=> win_nums.includes(num)).length
    const max_match_count = zero_count + match_count;    
        
    return [answer[max_match_count], answer[match_count]]
}