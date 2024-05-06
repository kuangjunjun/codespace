- vue 深入语法
    <template>
        <div>
            <div>1</div>
            <div>2</div>
        </div>
    </template>
    为什么加  view -> vn -> node -> 外层节点 -> 统一挂载
    统一外层节点 比较简单 方便的完成挂载
    缺点: 为了挂载而添加外层节点 洁癖 vue2  （刘关张 不需要共同的父亲节点）
    vue3 支持 不用再外层添加节点

    <template>
        <div>1</div>
        <div>2</div>
    </template>
    Fragment 组件类型 文档碎片 document.createFragmentElement
    node 的一种, 起到容器的功能，自动消失

- const obj = {
    a: {
        b: 1
    }
    c: 'hello'
}
  const data = reactive(obj)

- vue 组件的类型    vnode  type  值  tag   div|Compoent|文本|Fragment...
    Flag  位运算
- vue compile 源码
- 重写响应式
    - vue2 defineProperty  es5 支持  兼容性好
        性能不好，一次代理一个属性  用多次遍历  深度，一开始就要递归
        数组  只支持 index 值修改，不支持增删移位
        新增的没有defineProperty 不会
        改写数组的push pop unshift 。。 方法 再添加 track 收集

    - vue3 proxy(reactive) + class geteer setter(ref)
        proxy 开销比较大(单个)      多个小的
        拦截 +  effect   proxy + object   class getter setter
        proxy
        var obj = {
            a: {
                b: 2
            }
        }

        val obj ? get
        return reactive(obj.a)
        懒代理  obj.a  proxy get   object   new Proxy


    - vue3 响应式更优秀
        - ref(class getter setter) + reactive(proxy 开销大)
            拦截 track trigger  weakmap  effect
        - proxy 可以一次性代理整个对象，支持13重拦截方法
            es6+  IE11+
        - 懒代理  需要的时候，才做深层次的代理（访问时，而不是一开始），递归
        - defineProperty  一开始就要递归，遍历  一个个属性 代理， 性能不好
