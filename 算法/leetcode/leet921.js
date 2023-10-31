/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const stack = []
const obj = {
    ')': '('
}
    for(let i = 0; i < s.length; i++){
        if(stack.length && obj[s[i]] == stack[stack.length - 1]){
            stack.pop()
        }
        else{
            stack.push(s[i])
        }
    }
    return stack.length
};