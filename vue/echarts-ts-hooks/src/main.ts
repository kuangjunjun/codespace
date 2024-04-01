import { createApp } from 'vue'
import './assets/styles/index.css'
import App from './App.vue'

createApp(App).mount('#app');
/**
 * 响应式适配  大屏应用
 * 动态设置html fontSize, 使用rem
 * em, vw/vh, 
 */
(function (doc, win) {
    const fn = () => {
        const docEl = doc.documentElement,  // html 标签
            clientWidth = docEl.clientWidth // 宽度
        if (!clientWidth) return 
        //设计稿件 1920px
        docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px'
    }
    // 非浏览器环境  SSR
    if (!doc.documentElement) return
    doc.addEventListener('resize', fn)
    // html下载完后就立即执行，不用等到css, script 执行
    doc.addEventListener('DOMContentLoaded', fn)
})(document, window)
