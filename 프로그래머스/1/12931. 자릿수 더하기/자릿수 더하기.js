function solution(n)
{
    var answer = 0;
    for(let i = n.toString(), j = i.length; j >= 0; j--)
    {
        answer += Math.floor(n /(10**j));
        n%=(10**j);
    }
    
    return answer;
}