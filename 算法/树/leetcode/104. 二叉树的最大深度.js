/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let res = 0
    if(!root)   return res
    let queue = []
    queue.push(root)
    while(queue.length){
        let len = queue.length
        for(let i = 0; i < len; i++){
            let node = queue.shift()
            if(node.left)   queue.push(node.left)
            if(node.right)   queue.push(node.right)
        }
        res++
    }
    return res
};