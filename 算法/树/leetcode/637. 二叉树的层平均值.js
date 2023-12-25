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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let res = [], queue = []
    queue.push(root)
    if(!root)   return []
    while(queue.length){
        let len = queue.length
        let sum = 0
        for(let i = 0; i < len; i++){
            let node = queue.shift()
            sum += node.val
            if(node.left)   queue.push(node.left)
            if(node.right)   queue.push(node.right)
        }
        res.push(sum / len)
    }
    return res
};