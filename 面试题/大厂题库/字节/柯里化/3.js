let person = [
    {name: 'awei', age: 18, sex: 'man'},
    {name: 'zijun', age: 20, sex: 'man'}
]

// const names = person.map(item => {
//     return item.name
// })

let prop = curry((key, obj) => {
    return obj[key]
})

const newProp = prop('name')

let names = person.map(newProp)

let arr = [

]

let newArr = arr.map(newProp)
// 任何数组调用 map 方法，都可以触发 newProp 方法，
// 来获取到数组中每个对象的name属性值