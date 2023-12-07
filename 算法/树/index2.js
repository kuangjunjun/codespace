function preorder(root) {
    if(!root)   return
    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}