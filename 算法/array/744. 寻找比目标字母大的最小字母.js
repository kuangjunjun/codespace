/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    // const length = letters.length    普通查找
    // let nextGreater = letters[0]
    // for(let i = 0; i < length; i++){
    //     if(letters[i] > target){
    //         nextGreater = letters[i]
    //         break
    //     }
    // }
    // return nextGreater

    // 二分查找
    const length = letters.length
    if(target >= letters[length - 1]){
        return letters[0]
    }
    let l = 0, r = length - 1
    while(l < r){
        const mid = Math.floor((l + r) / 2)
        if(letters[mid] > target){
            r = mid
        }else{
            l = mid + 1
        }
    }
    return letters[l]

};