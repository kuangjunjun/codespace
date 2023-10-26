var num = 1248
var countDigits = function(num) {
    num = num + ''
    var n = 0
    for (var i = 0; i < num.length; i++){
        if (num % num[i] == 0) {
            n++
        }
    }
    return n
};
console.log(countDigits(num));