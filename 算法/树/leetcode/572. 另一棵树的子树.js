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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const compare = function(left, right){
        if(left === null && right === null){
            return true
        }else if(left === null || right ===null){
            return false
        }else if(left.val !== right.val){
            return false
        }
        return compare(left.left, right.left) && compare(left.right, right.right)
    }
    if(root === null)   return false
    if(compare(root, subRoot))  return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};