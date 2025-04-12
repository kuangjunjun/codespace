# Vite 原生 HTML/CSS/JS 项目

这是一个使用 Vite 构建的原生 HTML、CSS 和 JavaScript 项目。

## 功能特点

- 使用原生 HTML、CSS 和 JavaScript
- 由 Vite 提供开发服务器和构建工具
- 热模块替换 (HMR)
- 在 8080 端口运行

## 开始使用

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 开发模式

\`\`\`bash
npm run dev
\`\`\`

这将启动开发服务器在 http://localhost:8080

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

### 预览生产构建

\`\`\`bash
npm run preview
\`\`\`

## 项目结构

\`\`\`
/
├── index.html      # 主HTML文件
├── style.css       # 全局样式
├── main.js         # 主JavaScript文件
├── public/         # 静态资源目录
│   └── favicon.svg # 网站图标
├── vite.config.js  # Vite配置
└── package.json    # 项目配置和依赖
\`\`\`

## 自定义

- 编辑 `index.html` 修改HTML结构
- 编辑 `style.css` 修改样式
- 编辑 `main.js` 添加JavaScript功能