/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let shang
    let yushu
    if(n == 0)  return false
    while(1){
        shang = parseInt(n / 3)
        yushu = n % 3
        if(shang === 0 && yushu === 1) return true
        if(yushu)   return false
        n = parseInt(n / 3)
    }
};