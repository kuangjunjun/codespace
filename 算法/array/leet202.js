var isHappy = function (n) {
    let set = new Set()
    n = n + ''
    let sum 
    while (sum !== 1) {
        sum = 0
        for(let i = 0; i < n.length; i++) {
            sum += n[i] * n[i]
        }
        if (set.has(sum)) {
            return false
        }
        set.add(sum)

        n = sum + ''
    }
    return true
};
console.log(isHappy(19));