/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0
    let left = 0
    let set = new Set()
    for(let right = 0; right < s.length; right++){
        const c = s[right]
        while(set.has(c)){
            set.delete(s[left])
            left++
        }
        set.add(c)
        result = Math.max(result, (right - left + 1))
    }
    return result
};