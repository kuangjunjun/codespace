
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
};


MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

MyQueue.prototype.pop = function() {
    // 将栈1中的数据倒到栈2中，再出栈
    if (!this.stack2.length) {
        while (this.stack1.length) {
            const top = this.stack1.pop()
            this.stack2.push(top)
        }
    }
    
    return this.stack2.pop()
};


MyQueue.prototype.peek = function() {
    let top = this.pop()
    this.stack2.push(top)
    return top
};

MyQueue.prototype.empty = function() {
    return !this.stack.length && !this.stack2.length
};

// let queue = new MyQueue()