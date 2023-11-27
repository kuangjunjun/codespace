/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0, r = x
    while(l <= r){
        mid = Math.floor((l + r) / 2)
        if(mid * mid > x){
            r =  mid - 1
        }else if(mid * mid < x){
            l = mid + 1
        }else{
            return mid
        }
    }
    return r
};