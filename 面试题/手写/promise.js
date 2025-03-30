// Promise.all

function A() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove('A')
        }, 1);
    })
}

function B() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reject('B')
        }, 0);
    })
}

function C() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove('C')
        }, 2);
    })
}

function myAll(promises) {
    return new Promise((reslove, reject) => {
        let result = []
        let complete = 0
        
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                complete++
                result[index] = res
                if (complete === promises.length) {
                    reslove(result)
                }
            }).catch(err => {
                reject(err)
            })
        })
    })
}

// myAll([A(), B(), C()]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// Promise.race

function myRace(promises) {
    return new Promise((reslove, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(res => {
                reslove(res)
            }).catch(err => {
                reject(err)
            })
        })
    })
}

myRace([A(), B(), C()]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err)
})