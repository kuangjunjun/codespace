let s = '{[()]}'
// var isValid = function(s) {
//     let obj = {}
//     let stack = []
//     for (let i = 0; i < s.length; i++){
//         if (s[i] == '{' || s[i] == '[' || s[i] == '(') {
//             stack.push(nums[i])


//         }
//     }
// };

var isValid = function (s) {
    const stack = []
    const len = s.length
    const obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
   
    if (len % 2 !== 0) {
        return false
    }
    for (let i = 0; i < len; i++){
        const item = s[i]
        if (item === '{' || item === '[' || item === '(') {
            stack.push(item)
        }
        else {
            if (item === obj[stack.pop()]) {
                continue
            }
            else {
                return false
            }
        }
    }
    return true
}
console.log(isValid(s));