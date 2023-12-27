/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    const getDepth = (root) => {
        if(!root)   return 0
        let depth = 0
        for(let node of root.children){
            depth = Math.max(getDepth(node), depth)
        }
        return depth + 1
    }
    return getDepth(root)
};