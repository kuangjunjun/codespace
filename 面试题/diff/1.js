const oldChildren = n1.children
const newChildren = n2.children

let lastIndex = 0

for (let i = 0; i < newChildren.length; i++){
    const newVNode = newChildren[i]
    let j = 0
    let find = false
    for (j; j < oldChildren.length; j++){
        if (newVNode.key === oldVNode.key) {
            find = true
            patch(oldVNode, newVNode, container)
            if (j < lastIndex) {
                // 插入元素比新增元素多 性能好很多
                const anchor = prevVNode.el.nextSibling
                insert(newVNode.val, container, anchor)
            } else {
                lastIndex = j
            }
        }
        break;
    }
}