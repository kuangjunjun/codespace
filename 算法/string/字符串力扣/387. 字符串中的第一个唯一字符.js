/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let h = new Map(), i = s.length
    while(i--) h.set(s[i], h.has(s[i]) ? h.get(s[i]) + 1: 1)
    i = -1
    while(++i < s.length){
        if(h.get(s[i]) === 1)   return i
    }
    return -1
};

var firstUniqChar = function (s) {
    let arr = new Array(26).fill(0), i = s.length
    while (i--) arr[s.charCodeAt(i) - 97]++
    i = -1
    while (++i < s.length) {
        if(arr[s.charCodeAt(i) - 97] == 1)    return i
    }
    return -1
}