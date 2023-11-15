/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const arr = []
    for(let i = 0; i <= rowIndex; i++){
        const row = new Array(i + 1).fill(1)
        for(let j = 1; j < row.length - 1; j++){
            row[j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
        arr.push(row)
    }
    return arr[rowIndex]
};