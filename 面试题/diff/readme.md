- 什么是diff  算法
    - VUE/React等现代MVVM开发框架基于VDOM
    - 组件渲染返回VDOM，VDOM通过DOM显示
    - 当响应式数据更新后，会生成新的VDOM
    - 比较新旧两模拟虚拟DOM树，并找到差异的算法，叫diff算法

- 为什么还要diff算法出来？
    - 时间复杂度 O(n ^ 3)
        - 每个节点跟另一模树的所有结点都比较 O(n)
            v-if/v-show v-for
                todolist 翻页
        - 相同key 结点 所有的属性又要比对下 O(n)
        - 比对完所有结点 O(n)

- diff 算法
    VUE2 时代的
    - 简单diff算法
        只做同层的对比，type变了就不再对比子节点 跨层需要比较的场景比较少
            (刘强东/奶茶)  不用去一味的复用节点，跨层
        ABCDE   EABCD
        diff算法除了考虑本身的时间复杂度之外，还要考虑一个因数: dom操作的次数
    - 双端diff
    VUE3的新diff
    - 递增子序列的diff算法



    旧ABCD       新DABC
     ABCD         DABC
     j=3           i=0  lastIndex = 3  
     BCDA          i=1  lastIndex = 3
     0              i=2
     CDAB
     | +         | +
    DABC        DABC
        