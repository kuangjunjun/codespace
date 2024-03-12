## 蔚来面试

- 合肥 蔚来 内部系统开发
    周三入职  半个月  B站

- 前端理解
- 怎么学习
- 项目上线
- 样式布局
- 登录 jwt  cookie session

### 二面
性格 

提前去思考这些问题，整理话术，互相模拟面试
一面面试官是用人的，有1个hc的人
二面一般是一面的leader，一面反馈的帮把关  有决定权

## B站

- 时长
    70分钟  50-80分钟
    不用追问  自问自答
    拿下一面

- git命令  加强
    git init ..... git push   git clone
    撤回  灵机一动
    branch
    git rebase 变基

- == 与 ===区别
- vue响应式原理  ref  reactive  深度 vue源码学习
    - proxy(对象)
    - defineProperty(属性)
    - vue2/vue3 区别
        数组 增改
    - 追问，依赖收集
    - watcher

- 调试自己的代码
    - 断点  逐步跟进， 变量的值
    - console.log()
    - vue devtool  数据状态与界面
    - console.time  console.timeEnd()  性能优化
    - 浏览器自带性能面板
    - postman  模拟请求  测试接口  restful
        API风格  Method + url 一切皆资源
        GET  /post  列表页 读  /post/:id
        POST /post  写
        DELETE
        PUT/PATCH  修改  PUT 文件上传修改改头像  PATCH  部分修改改字段
        OPTIONS  ...

- 状态码 深入

    304  实现

- node  stream
    JAVA  二进制流

- vuex/pinia
    - 父子/兄弟组件通信之外  vuex/pinia  让状态在任何组件间共享
    - store
        应用 = 状态存储 + UI组件   组件更专注于界面开发
    - 购物车 / 登录 
    - pinia 持久化储存
    - vuex 缺点  不太好理解  mutations
    - pinia  hooks 函数化  灵活   对ts 的支持更好

- 持久化
    localStorage + JSON.parse()  JSON.stringify()

- JWT

- 深度优先搜索  DFS  BFS
- 面的怎么样？
    学习建议
    机会很难得
    AIGC  快速学习  高效开发  代码助理

- 生命周期 深入
    图
    父子
    父 created
    子 created
    子 挂载 mounted
    父 挂载 mounted

- 手写ts    刷一点
    interface type 区别
        :string[]

- 盒模型 布局

- 是否有环 双指针

## 总结
    TOP20的面试难度主要在于全面的基础能力 算法、VUE、寄出、JS/css八股
    css八股  情商

- 树的遍历
    用递归的概念来定义一棵树
    先、中、后序   根结点
    BFS  DFS ？ 迷宫 ？

    - 深度优先  适合递归


- 列表组装成树状态结构
    - 经典题
    - 树型
    - 常见困难开发点拿出来
        - 多级菜单、省县市选择的需求
        - 列表 后端传过来的数据项 一条记录
        - 任务 拼成树型结构
            显示菜单、切换地址选项等树形操作
        - 两重for 循环 O(n^2)

- 编写一个类EventEmitter，实现自定义事件
    - 前端 addEventListener click 内置事件
    - 订阅发布者模式   经典的设计模式
    - 实现一个EventEmitter类 on emit off once
    - node 内置了 EventEmitter 可以直接继承使用