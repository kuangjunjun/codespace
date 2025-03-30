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
            reslove('B')
        }, 10);
    })
}

function C() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove('C')
        }, 2);
    })
}

// Promise.all
const myAll = (arr) => {
    return new Promise((reslove, reject) => {
        let result = []
        let complete = 0
        arr.forEach((promise, index) => {
            promise.then(
                res => {
                    result[index] = res
                    complete++
                    if (complete === arr.length) {
                        reslove(result)
                    }
                }
            ).catch(
                err => console.log(err)
            )
        })
    })
}

myAll([A(), B(), C()]).then(
    res => console.log(res)
).catch(
    err => console.log(err)
)

// Promise.race
const myRace = (arr) => {
    return new Promise((reslove, reject) => {
      arr.forEach(promise => {
        promise.then(
          res => reslove(res)      
        ).catch(
          err => reject(err)
        )
      })
    })
  }
  
  myRace([A(), B(), C()]).then(
    res => console.log(res)
  ).catch(
    err => console.log(err, 'x')  
  )