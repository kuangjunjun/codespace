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
        
