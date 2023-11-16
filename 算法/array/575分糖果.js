/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let n = candyType.length / 2
    let set = new Set()
    let sums = 0
    for(let i = 0; i < candyType.length; i++){     // 自己的，有点繁琐
        if(!set.has(candyType[i])){
            sums++
            set.add(candyType[i])
        }
    }
    return Math.min(sums, n)
};  

// 官方题解
var distributeCandies = function(candyType) {
    const set = new Set(candyType)
    return Math.min(set.size, candyType.length / 2)
};  