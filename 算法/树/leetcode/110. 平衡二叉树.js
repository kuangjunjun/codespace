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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const getDepth = function(node){
        if(!node)   return 0
        let leftDepth = getDepth(node.left)
        if(leftDepth === -1)    return -1
        let rightDepth = getDepth(node.right)
        if(rightDepth === -1)   return -1
        if(Math.abs(leftDepth - rightDepth) > 1){
            return -1
        }else{
            return 1 + Math.max(leftDepth, rightDepth)
        }
    }
    return !(getDepth(root) === -1)
};