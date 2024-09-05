function GetGCD(a, b) {	
	for (let GCD = a % b; GCD != 0; GCD = a % b) {
        a = b;
		b = GCD;
	}
	return b;
}

function GetLCM(a, b, GCD) {
    return a * b / GCD;
}

function solution(arr) {
    var answer = 0;
    answer = arr.reduce((acc, cur) => {
        return GetLCM(acc, cur, GetGCD(acc, cur));
    });
    
    return answer;
}