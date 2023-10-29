let stack = []   // 栈    只使用数组的 push 和  pop  的方法

stack.push('东北大板')
stack.push('可爱多')
stack.push('巧乐兹')
stack.push('小布丁')
stack.push('钟薛高')

while (stack.length) {
    const top = stack[stack.length - 1]
    console.log('我正在吃', top);
    stack.pop()
}