/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const doubleS = s.slice(1) + s.slice(0, s.length - 1);
    return doubleS.includes(s);
};