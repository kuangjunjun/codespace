/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let res = []
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] <= intervals[i - 1][1]){
            intervals[i][0] = intervals[i - 1][0]
            intervals[i][1] = Math.max(intervals[i][1], intervals[i - 1][1])
        }else{
            res.push(intervals[i - 1])
        }
    }
    res.push(intervals[intervals.length - 1])
    return res
};