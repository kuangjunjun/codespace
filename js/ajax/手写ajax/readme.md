# 手写封装ajax 函数， 只考虑 get url , 思考， 同步变异步

- promise
    ajax 是异步, 放到promise 里面？
    1. Promise实例化, 经历以下流程
        - new 该做的    new Promise 返回一个实例p 初始的状态 state = 'pending'
        - 构造函数来里面 constructor  executor 执行
        都是同步的
        - executor 是异步任务的容器
            executor同步, setTimeout/ajax/... 异步的 -> EventLoop
            resolve()时, 将 p.state = fulfilled
        - 流程怎么办?
            - then  微任务  执行的机会是在 p.state pending -> fulfilled
            - await 比then 更简洁, 更想同步代码, resolve(data) data交给等式左边
