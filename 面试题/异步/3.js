function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            resolve('ok')
            reject('no')
        }, 1000);
    })
}

function b() {
    setTimeout(() => {
        console.log('b');
    }, 500)
}

a().then((res) => {  // res == ok
    console.log(res);
    b()
   },
    (err) => {
       console.log(err);
   }
)

// a().then(b)

Promise.race([a(), b()])