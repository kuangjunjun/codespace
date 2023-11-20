/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    if(bits[bits.length - 1] == 1) return false
    let n = bits.length - 2
    let sum = 0
    while(bits[n] == 1 && n >= 0){
        sum++
        n--
    }
    if(sum % 2 == 0){
        return true
    }else{
        return false
    }
};