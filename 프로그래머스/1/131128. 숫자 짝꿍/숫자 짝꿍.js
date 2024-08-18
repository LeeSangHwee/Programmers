function solution(X, Y) {
    let X_Split = X.split('');
    let Y_Split = Y.split('');
    let result = [];

    let Y_Map = {};
    for (const Y_Element of Y_Split) {
        Y_Map[Y_Element] = (Y_Map[Y_Element] || 0) + 1;
    }

    for (const X_Element of X_Split) {
        if (Y_Map[X_Element] > 0) {
            result.push(X_Element);
            Y_Map[X_Element]--;
        }
    }
    if (result.length === 0) return "-1";
    const answer = result.sort((a, b) => b - a).join('');
    return answer[0] === '0' ? "0" : answer;
}
