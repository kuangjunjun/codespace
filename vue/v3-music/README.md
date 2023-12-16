# Vue 网易云音乐

- 界面
    npm init vite 开发脚手架
- 后台
    netsea
    :3000
- 前后端分离的全栈
-npm config set registry https://registry.n   pmmirror.com  
    npm 换了一个源
- npm i -D  安装一个...包， 在开发阶段会用到   devDependencies
- tailwindcss   提升 60% 以上的 css 开发    原子化css开发
    - npm i -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p   初始化
        npx 执行安装或未安装的包
    - 声明开发目录下所有层级中 .vue 等格式文件支持tailwindcss
        - 去tailwind.config.js中   content: ["./src/**/*.{vue, js, ts, jsx, tsx}"],
        - import tailwind.css
        - 可以使用tailwind类名

- 切页面
- 组件化思维
    - 根组件  App.vue
    - layout 组件
        - Menu
        - Header

- vite.config.js 是vite 工程化的配置文件
    - alias 短路径
        @ -> ./src 回城

- 企业级vue开发框架 element-plus PC版
    好多组件拿来就用
    vue 是渐进式的MVVM 开发框架
    element-plus 组件库 找到我们想要的组件

- vite 写了一段让Element plus 自动引入的代码

- 通用组件
    /components/common/
    不属于特定的组件， 极高的复用性 在项目之中可以复用

- 图标字体库
    - 要用到哪些图标
        import {} from '@icon-park/vue-next'

- 断点调试法
    当我们开始想写项目的时候, 在github 上排名vue-music 看不懂的地方，
    一路跟下去， 优秀的代码学习方法
    - 组件和数据接口分离
        让组件干净 template script
    - 数据统一管理
        - api.js
            业务接口， 函数名字自带解释
        - http.js
            复用axios的底层封装

- 开发文档
    - 前端要响应式数据
    - 数据请求要分离到utils/api.js
    - 后端是个黑盒子
        1. 基于http
            axios 提供 封装get 方法
        2. 看后端给的开发文档
            /url GET/POST params {}
            response 什么？
    - 自己的项目
        - Laf 来做后端
            - 数据库
            - 云函数
            - 开发文档 亮点   

- 有哪些种组件？
    - 父子组件
    - 页面组件
        vue-router     views/
    - 通用组件
        components/common/

    - 框架UI组件
    - 业务组件 /components

- 路由的组件流程
    - router 配置文件夹
    - views/ 页面级别组件
    - 路由接管了应用
        会有好多页面的, views 比components 级别高
    - App.vue router-view Root.vue
    - Root.vue 其他各个页面， 多级路由
