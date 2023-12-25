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
var rightSideView = function(root) {
    let res = [], queue = []
    queue.push(root)
    if(!root)   return res
    while(queue.length){
        let len = queue.length
        let n = 0
        for(let i = 0; i < len; i++){
            let node = queue.shift()
            if(++n === len) res.push(node.val)
            if(node.left)   queue.push(node.left)
            if(node.right)   queue.push(node.right)
        }
    }
    return res
};