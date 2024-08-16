function getRank(num) {
    switch (num) {
        case 6: return 1;
        case 5: return 2;
        case 4: return 3;
        case 3: return 4;
        case 2: return 5;
        default: return 6;
    }
}

function solution(lottos, win_nums) {           
    const zero_count = lottos.filter(_lottos => 0 === _lottos).length;
    const min_count = win_nums.filter(_min_count=> lottos.includes(_min_count)).length
    const high_count = zero_count + min_count;    
    
    var answer = [getRank(high_count), getRank(min_count)];
    return answer;
}