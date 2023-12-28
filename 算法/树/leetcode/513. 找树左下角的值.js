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
var findBottomLeftValue = function(root) {
    let queue = []
    if(!root)   return null
    queue.push(root)
    let val = 0
    while(queue.length){
        let len = queue.length
        for(let i = 0; i < len; i++){
            let node = queue.shift()
            if(i === 0) val = node.val
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return val 
};