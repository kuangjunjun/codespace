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
var sumOfLeftLeaves = function(root) {
    const nodesSum = function(node){
       if(!node)  return 0
       let leftValue = nodesSum(node.left)
       let rightValue = nodesSum(node.right)
       let midValue = 0;
       if(node.left && node.left.left === null && node.left.right === null) {
           midValue = node.left.val;
       }
       let sum = midValue + leftValue + rightValue;
       return sum
   }
   return nodesSum(root)
};