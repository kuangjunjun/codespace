# SSR 服务器端渲染

- /  网络请求
    - index.html root挂载点  script main.js
        vue js
    - 对SEO十分不友好
        爬虫只会爬取index.html,不能爬取js并执行
    - PC or Mobile
        PC端流量来自百度 SEO非常重要
        Mobile 来自链接分享，App的内嵌页， SEO 没那么
        重要 VUE SPA 主流开发?  CSR  client Side Rendering
    - PC站  google/baidu   除了挂载其它都做
       Server Side Rendering
    - vue 可以在服务器端运行吗？

- 平台无关性渲染
    - VUE除了客户端渲染挂载不能做之外，其它的都可以在服务器端运行
    - 响应式/组件/虚拟DOM 可以在node 环境运行
    - 虚拟DOM渲染为何种界面，可以由平台决定
        uniapp 小程序
        html 
    - 怎么样把SEO ?
        组件内容以界面需要的string的方式返回
        爬虫就能拿到
- CSR SSR 平台无关性渲染 @vue/server-renderer VDOM -> 渲染字符串
