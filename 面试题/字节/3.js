let arr = [1, 1, '2', 3, 1, 2,
    { name: '张三', id: { n: 1 } },
    { name: '张三', id: { n: 1 } },
    { name: '张三', id: { n: 2 } },
]

// let newArr = [...new Set(arr)]  // ===    { name: '张三', id: {n: 1} } === { name: '张三', id: {n: 1} }
// console.log(newArr);

// let arr2 = arr.map((item) => {
//     return JSON.stringify(item)
// })
// console.log(arr2);
// let newArr = new Set(arr2)
// newArr = Array.from(newArr).map((item) => {
//     return JSON.parse(item)
// })

// console.log(newArr);

function uniqueArr(arr) {
    let res = []
    for (let item of arr) {
        let isFind = false
        for (let resItem in res) {
            if (equal(item, resItem)) {
                isFind = true
                break
            }
        }
        if(!isFind) res.push(item)
    }
}