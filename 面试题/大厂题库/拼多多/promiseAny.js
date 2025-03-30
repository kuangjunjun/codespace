// Promise.any:

// 接收一个 Promise 可迭代对象（例如数组）。
// 返回一个新的 Promise。
// 这个 Promise 在任何一个输入的 Promise 成功（resolve）时立即成功。
// 如果所有输入的 Promises 都失败（reject），则返回的 Promise 失败，并标记为包含一个 AggregateError，它是所有拒绝原因的一个对象列表。

function a(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
}

function b(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 500);
    });
}

function c(){
   console.log('ccc');
}

promiseAny([a(), 'success', b()]).then(res => {
    console.log(res);
    c()
});

function promiseAny(promises){
    let errors = []
    let count = 0
    return new Promise((resolve, reject) => {
        for(let i = 0; i < promises.length; i++){
            Promise.resolve(promises[i]).then(res => {
                resolve(res)
            }).catch(err => {
                errors[i] = err
                count++
                if(count === promises.length) {
                    reject(new AggregateError(errors))
                }
            })
        }
    })
}
