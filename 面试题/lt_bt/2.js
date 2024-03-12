// 面试的准备策略  大厂面经
function bfs(root) {
    // 队列 ， FIFO
    const queue = [root]
    while (queue.length) {
        const currentNode = queue.shift()
        console.log(currentNode.value);
        
        if (currentNode.children) {
            currentNode.children.forEach(child => {
                queue.push(child)
            })
        }
    }
}