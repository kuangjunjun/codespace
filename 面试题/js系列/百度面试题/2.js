function a() {
    return new Promise(resolve => {
        resolve('ok')
        reject('error')
    })
}

a.then((res) => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})

function myPromise(fn) {
    this.state = 'pending'
    this.value = null
    this.reason = null
    const resolve = (value) => {
        if (this.state === 'pending') {
            this.value = value
            this.state = 'fulfilled'
        }
    }
    const reject = (reason) => {
        if (this.state === 'pending') {
            this.reason = reason
            this.state = 'rejected'
        }
    } 
    fn(resolve, reject)
}