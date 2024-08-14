function solution(n, m, section) {
    var answer = 0;
        
    let PaintSection = section[0];    
    while(PaintSection <= n)
    {    
        answer++;        
        if(PaintSection + m > section[section.length - 1])
            return answer;
        else
        {
            for(const SearchSection of section)
            {
                if(SearchSection >= PaintSection + m)
                {
                    PaintSection = SearchSection;
                    break;
                }            
            }     
        }                 
    }        
}