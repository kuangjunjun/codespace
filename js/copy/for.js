let arr = ['a', 'b', 'c', 'd', 'e']

// for (let item of arr) {
//     console.log(item);
// }

let obj = {
    name: '阿伟',
    age: 18,
    like: {
        type: 'coding'
    }
}

let data = Object.create(obj)
data.sex = 'boy'

for (let key in data) {
    if (data.hasOwnProperty(key)) {
        console.log(key);
    }
}