// 栈
// let stack = []

// 队列
let queue = []   // 只能用push 和 shift   先进先出

queue.push('宫保鸡丁')
queue.push('辣椒炒辣椒')
queue.push('红烧肉')

while (queue.length) {
    const top = queue.shift()
    console.log(top);
    // queue.shift()
}

