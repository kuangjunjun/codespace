let a = 123  // 321  900   9

function reverseNum(num) {
    // let res = ''

    // const str = num.toString()
    // for (let i = 0; i < str.length; i++) {
    //    res = str[i] + res
    // }

    // console.log(res);
    // return Number(res)

    return +num.toString().split('').reverse().join('')

}
reverseNum(a)