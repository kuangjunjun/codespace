
var validPalindrome = function (s) {
    const len = s.length
    let i = 0, j = len - 1
    while ( i < j && s[i] === s[j]) {
        i++
        j--
    }
    if (ispalindrome(i + 1, j)) {
        return true
    }
    if (ispalindrome(i, j - 1)) {
        return true
    }

    function ispalindrome(st, ed) {
        while (st < ed) {
            if (s[st] !== s[ed]) {
                return false
            }
            st++
            ed--
        }
        return true
    }
    return false

};

