/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    const m = g.length, n = s.length
    let count = 0
    for(let i = 0, j = 0; i < m && j < n; i++, j++){
        while(j < n && g[i] > s[j]){
            j++
        }
        if(j < n){
            count++
        }
    }
    return count
};