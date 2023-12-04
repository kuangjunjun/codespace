/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const n = cardPoints.length
    const windowSize = n - k
    let sum = 0
    for(let i = 0; i < windowSize; i++){
        sum += cardPoints[i]
    }
    let minSum = sum
    for(let i = windowSize; i < n; i++){
        sum += cardPoints[i] - cardPoints[i - windowSize]
        minSum = Math.min(minSum, sum)
    }
    let totalSum = 0
    for(let i = 0; i < n; i++){
        totalSum += cardPoints[i]
    }
    return totalSum - minSum
};