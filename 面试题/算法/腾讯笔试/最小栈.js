// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// 实现 MinStack 类:
// 1.MinStack() 初始化堆栈对象。
// 2.void push(int val) 将元素val推入堆栈。
// 3.void pop() 删除堆栈顶部的元素。
// 4.int top() 获取堆栈顶部的元素。
// 5.int getMin() 获取堆栈中的最小元素


class MinStack{
    constructor() {
        this.stack = []
        this.minStack = [Infinity]
    }

    push(val) {
        this.stack.push(val)
        this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]))
    }

    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    top() {
        return this.stack[this.stack.length - 1]
    }

    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}

let minStack = new MinStack()
minStack.push(1)
minStack.push(0)
minStack.push(3)

console.log(minStack.top());
console.log(minStack.getMin());


