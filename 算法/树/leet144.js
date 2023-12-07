var preorderTraversal = function (root) {
    if(!root)   return []
    const res = []
    
    res.push(root.val)
    res = res.concat(preorderTraversal(root.left))
    res = res(preorderTraversal(root.right))


    return res
};

var preorderTraversal = function (root) {
    
    const res = []
    function help(node) {
        if(!node)   return undefined
        res.push(node.val)
        help(node.left)
        help(node.right)
    }
    help(root)

    return res
}

var preorderTraversal = function (root) {
    if(!root)   return []
    const res = []
    const stack = []
    stack.push(root)
    while (stack.length) {
        const top = stack.pop()
        res.push(top.val)
        if (top.right) {
            stack.push(top.right)
        }
        if (top.left) {
            stack.push(top.left)
        }
    }
    return res
}