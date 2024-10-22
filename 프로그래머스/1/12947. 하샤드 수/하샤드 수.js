function solution(x) {
    let str = String(x).split('');
    let num = str.reduce((acc, cur) => {
        return acc + parseInt(cur);
    }, 0);
    
    if(x % num === 0) return true;
    else return false;
}