/**
 * @param {string[]} operations
 * @return {number}
 */



var calPoints = function(operations) {
    const res = []
    for(let i = 0; i < operations.length; i++){
        switch(operations[i]){
            case "C":
                res.pop()
                break
            case "D":
                res.push(res[res.length - 1] * 2);
                break
            case "+":
                res.push(res[res.length - 1] + res[res.length - 2]);
                break;
            default:
                res.push(parseInt(operations[i]))
        }
    }
    let sum = 0
    let n = res.length
    while(n > 0){
        sum += res.pop()
        n--
    }
    return sum
};