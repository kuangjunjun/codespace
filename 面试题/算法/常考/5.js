let num = 10  // [2, 5]  660  330 [2, 3, 5, 11]

const findZY = (num) => {
    let res = []
    for (let i = 2; i <= num; i++){
        if (num % i === 0) {
            res.push(i)
            num = num / i
        }
    }

    return res
}

const helper = (n) => {
    for (let j = 2; j < n; j++){
        if (n % j === 0){
            return false
        }
    }
}

console.log(findZY(4));