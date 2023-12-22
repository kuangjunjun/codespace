/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let result = 0
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] < intervals[i - 1][1]){
            result++
            intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1])
        }
    }
    return result
};