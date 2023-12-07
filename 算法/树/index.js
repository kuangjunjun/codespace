let tree = {
    val: 1,
    left: {

    },
    right: {

    }
}

function TreeNode(val, left, right) {
    this.val = val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right

}

const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)

node1.left = node2
node1.right = node3

const node4 = TreeNode(4)
const node5 = TreeNode(5)

node2.left = node4
node2.right = node5

