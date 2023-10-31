/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = []
    const ans = []
    for(let i = 0; i < s.length; i++){
        if(stack.length && stack[stack.length - 1] == s[i]){
            stack.pop()
        }
        else{
            stack.push(s[i])
        }
    }
    // if(stack.length){
    //     for(let i = stack.length - 1; i > -1; i--){
    //         ans.unshift(stack.pop())
    //     }
    // }
    return stack.join('')
};