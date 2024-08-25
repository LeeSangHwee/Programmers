function solution(today, terms, privacies) {
    var answer = [];
    let termMonth = {};
    const [todayYear, todayMonth, todayDay] = today.split(".").map(Number);
    
    terms.forEach(term => {
        const [key, value] = term.split(" ");
        termMonth[key] = Number(value);
    });

    privacies.forEach((customer_info, index) => {
        const [date, key] = customer_info.split(" ");
        let [dateYear, dateMonth, dateDay] = date.split(".").map(Number);
        dateMonth += termMonth[key];
        
        while(dateMonth > 12) {
            dateMonth -= 12;
            dateYear++;            
        }

        if(todayYear > dateYear || (todayYear === dateYear && todayMonth > dateMonth) || (todayYear === dateYear && todayMonth === dateMonth && todayDay >= dateDay))
            answer.push(index + 1);          
    });
    return answer;
}