function solution(n,a,b)
{
    var round = 1;

    while(Math.abs(a - b) !== 1 || Math.min(a, b) % 2 !== 1) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;        
    }

    return round;
}