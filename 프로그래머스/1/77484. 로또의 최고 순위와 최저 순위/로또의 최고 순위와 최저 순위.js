function solution(lottos, win_nums) {           
    var answer = [6, 6, 5, 4, 3, 2, 1];
    
    const zero_count = lottos.filter(_lottos => 0 === _lottos).length;
    const min_count = win_nums.filter(_min_count=> lottos.includes(_min_count)).length
    const high_count = zero_count + min_count;    
        
    return [answer[high_count], answer[min_count]]
}