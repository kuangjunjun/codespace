/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let slow = s.length - 1
    while(s[slow] === ' '){
        slow--
    }
    if(slow === 0) return slow + 1
    let quick = slow - 1
    while(s[quick] !== ' '){
        quick--
        if(quick === -1)    return slow -quick
    }
    return slow - quick
};