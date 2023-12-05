import { createApp } from 'vue'
import App from './App.vue'
import router from './router'     // 默认寻找index 文件


createApp(App).use(router).mount('#app')
