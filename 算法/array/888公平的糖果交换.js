/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const sumA = _.sum(aliceSizes), sumB = _.sum(bobSizes)
    const delta = Math.floor((sumA - sumB) / 2)
    const rec = new Set(aliceSizes)
    var ans
    for(const y of bobSizes){
        const x = y + delta
        if(rec.has(x)){
            ans = [x, y]
            break;
        }
    }
    return ans
};