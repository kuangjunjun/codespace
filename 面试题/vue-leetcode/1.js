// patches 的过程，我们有哪些改变要收集呢？
// [{ type: }]
// patchFlag 变量 响应式业务后生成的 哪种类型的改变
// [{typeL patchFlag}]

const PatchFlags = {
    CLASS: 1,
    TEXT: 2,
    STYLE: 4
    // ...
    // ELEMENT:  8
    // COMPONENT:16
    // ...
}

if (patchFlag & PatchFlags.CLASS) {
    if (oldProps.class !== newProps.class) {
        hotPatchProp(el, 'class', null, newProps.class, isSVG)
    }
} else if (patchFlag & PatchFlags.STYLE) {
    
} else if (patchFlag & ShapeFlag.COMPONENT) {
    // 组件改变
} else if (ShapeFlag & ShapeFlag.ELEMENT) {
    // 结点的改变
}