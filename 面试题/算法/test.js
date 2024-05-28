/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let array = s.split('')
    let i = 0
    while(i < array.length){
        if(array[i] === ' '){
            array.splice(i, 1)
        }else{
            break
        }
    }
    let j = array.length -1
    while(j >= 0){
        if(array[j] === ' '){
            array.splice(j, 1)
        }else{
            break
        }
    }
    i = 0
    // while(i < array.length){
    //     if(array[i] === ' '){
    //         if(array[i - 1] !== ' ' && array[i + 1] !== ' '){
    //             i++
    //         }else{
    //             array.splice(i, 1)
    //         }
    //     }else{
    //         i++
    //     }
    // }
    return array

};

console.log(reverseWords("  hello world  "));