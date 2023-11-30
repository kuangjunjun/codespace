/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const strArr = Array.from(s)
    removeExtraSpaces(strArr)
    reverse(strArr, 0, strArr.length - 1)

    let start = 0
    for(let i = 0; i <= strArr.length; i++){
        if(i ===strArr.length || strArr[i] === ' '){
            reverse(strArr, start, i - 1)
            start = i + 1
        }
    }
    return strArr.join('')
};
function removeExtraSpaces(strArr){
    let fast = 0, slow = 0
    while(fast < strArr.length){
        if(strArr[fast] === ' ' && (fast ===0 || strArr[fast - 1] === ' ')){
            fast++
         }else{
            strArr[slow] = strArr[fast]
            slow++
            fast++
        }
    }
    strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow
}

function reverse(strArr, start, end) {
    let left = start, right = end
    while(left < right){
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
        left++
        right--
    }
}