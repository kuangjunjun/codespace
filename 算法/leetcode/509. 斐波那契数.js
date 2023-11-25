/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n < 1)   return 0
    let arr = []
    arr[0] = 1
    arr[1] = 1
    for(let i = 2; i < n; i++){
        arr[i] = arr[i - 1] + arr[i - 2] 
    }
    return arr[n - 1]
};
//  
var fib = function(n) {
    if(n < 1)   return 0
    let a = 1, b = 1
    for(let i = 2; i < n; i++){
        [a, b] = [b, a + b]
    }
    return b
};