// 153 = 1 ^ 3 + 5 ^ 3 + 3 ^ 3  水仙花数

const isTrue = (num) => {
    const len = num.toString().length;
    const str = num.toString();
    let total = 0
    for (let i = 0; i < len; i++){
        total += Math.pow(str[i], len)
    }
    return num === total
}

// console.log(isTrue(153));

const getAll = (n) => {
    let arr = []
    for (let num = 10 ** (n - 1); num < 10 ** n - 1; num++){
        if (isTrue(num)) {
            arr.push(num)
        }
    }
    console.log(arr);
}

getAll(3)