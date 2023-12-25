/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [], queue = []
    queue.push(root)
    if(!root)   return res
    while(queue.length){
        let len = queue.length
        let curLevel = []
        while(len--){
            let node = queue.shift()
            curLevel.push(node.val)
            for(let item of node.children){
                if(item)    queue.push(item)
            }
        }
        res.push(curLevel)
    }
    return res
};