var s = "Hello World"
var lengthOfLastWord = function (s) {
    
        var right = s.length - 1
        while (right >= 0 && s[right] == ' ') {
            right--
        }
        var left = right
        while (left >= 0 && s[left] != ' ') {
            left--
        }
        return right - left
    }


console.log(lengthOfLastWord(s));