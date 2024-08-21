function solution(keymap, targets) {
    var answer = [];
    const columns = [];
    const maxLength = Math.max(...keymap.map(str => str.length));

    for (let colIndex = 0; colIndex < maxLength; colIndex++) {
        const column = [];
        for (let rowIndex = 0; rowIndex < keymap.length; rowIndex++) {
            if (colIndex < keymap[rowIndex].length) {
                column.push(keymap[rowIndex][colIndex]);
            }
        }
        columns.push(column);
    }

    for (let target of targets) {
        let count = 0;
        let foundCharState = true;

        for (let char of target) {
            let foundChar = false;

            for (let j = 0; j < columns.length; j++) {
                if (columns[j].includes(char)) {
                    count += (j + 1);
                    foundChar = true;
                    break;
                }
            }
            if (!foundChar) {
                foundCharState = false;
                break;
            }
        }
        answer.push(foundCharState ? count : -1);
    }
    return answer;
}