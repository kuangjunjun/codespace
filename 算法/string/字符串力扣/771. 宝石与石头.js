/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let sums = 0
    let map = new Map()
    for(let i = 0; i < stones.length; i++){
        map.set(stones[i], map.has(stones[i]) ? map.get(stones[i]) + 1 : 1)
    }
    for(let i = 0; i < jewels.length; i++){
        sums += map.has(jewels[i]) ? map.get(jewels[i]) : 0 
    }
    return sums
};