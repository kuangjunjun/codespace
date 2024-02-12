/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let left = 0, right = 0
    if(s.length === 0)  return true
    while(right < t.length){
        if(s[left] === t[right]){
            left++
            right++
        }else{
            right++
        }
        if(left === s.length)   return true
    }
    return false
};