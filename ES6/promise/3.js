function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            resolve()
        }, 1000);
   }) 
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b');
            reject()
        }, 1500);
   }) 
}

function c() {
    console.log('c');
}

// Promise.all([a(), b()]).then(c)


// a().then((res) => {
//     console.log(res);
//     c()
// })


a().then((res) => {
    console.log(res);
    c()
})
.catch((err) => {
    console.log(err);
})

Promise.race([a(), b()])
.then(c)


// all 必须要接受到的所有的promise都为resolve，then才会调用


// function then(fn) {
//     fn()
// }