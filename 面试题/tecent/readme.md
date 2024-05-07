# 腾讯面试题

- 如何介绍自己
    5Who +  你是怎么学习的（一年前确定前端为职业方向 + 阅读《你不知道的javascript》 + 
    极客时间大圣老师vue课程，深入学习和实践vue全家桶开发，以及vue底层原理和源码 + 
    来到掘金学习和分享文章 + 热爱前端）  +  AI学习(LLM AIGC + react + transformer.js
    + AI 用户体验)

    破冰 怎么学习的 + 讲AI（大家都关心 ）

- 演示自己的项目
    - react  transforms.js
        - web workers  多线程  单独处理nlp任务
            new Worker('js')    不能做dom   self.postMessage() self.addEventListener
        - 单例模式
            翻译nlp 任务没有必要每次都实例化一次
        - transformer.js   浏览器端nlp任务
            pipeline('translator', model_name)
            all in ai
        - react 组件  进度条  （模型下载）   select组件

    - vue + 全栈项目
        jwt + vue 组件 + 性能优化 + 难点

    部署到服务器

- 作用域和作用域链
    清晰且深入，带入一些实战的理解

    作用域Scope定义了变量、函数等标识符再何处以及如何可以被访问。
    它限定了变量的生命周期和可见性

    三种类型
    - 全局作用域
        - 最外层的变量， 任何地方访问
        - window  node global  let const 不会挂在window
            解决变量提升和变量污染问题
    - 函数作用域
        局部作用域
    - 块级作用域  es6  提供
        - 其他大型语言有
        - 循环 事件监听  i值问题

- 作用域链 scope chain
    当Javascript 引擎需要查找一个变量的值时，它会遵循一定的规则去查找
    这个查找的路径就是作用域链
    VO {a: 1, b: 1, 。。。, scope: window}

    - 函数作用域
    - 块级作用域
    暂时性死区  变量提升的问题

- 深入， 验证下我们的能力 