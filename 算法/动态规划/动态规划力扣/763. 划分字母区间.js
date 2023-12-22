/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let hash = {}
    for(let i = 0; i < s.length; i++){
        hash[s[i]] = i
    }
    let res = []
    let left = 0
    let right = 0
    for(let i = 0; i < s.length; i++){
        right = Math.max(right, hash[s[i]])
        if(right === i){
            res.push(right - left + 1)
            left = i + 1
        }
    }
    return res
};