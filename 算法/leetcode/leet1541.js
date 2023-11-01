/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let insertNum = 0, needRight = 0
    for(let char of s){
        if(char === '('){
            needRight += 2
            if(needRight % 2 ===1){
                insertNum++
                needRight--
            }
        }
        else{
            needRight--
            if(needRight == -1){
                insertNum++
                needRight = 1
            }
        }
    }
    return insertNum + needRight
};