const s = 'abcabcbb'

var lengthOfLongestSubstring = function(str) {
    if(str.length <= 1)  {return str.length}
    let left = 0
    let right = 1
    let max = 0
    let temp
    while(right < str.length){
        temp = str.slice(left, right)
        if(temp.indexOf(str.charAt(right)) > -1){
            left++
            continue
        }else{
            right++
        }
        if(right - left > max)  { max = right - left}
    }
    return max
};