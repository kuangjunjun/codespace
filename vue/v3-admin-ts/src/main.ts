import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './assets/css/main.css'
import './assets/css/color-dark.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { usePermissStore } from './store/permiss'

// export import { }     * as 
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app
    .use(createPinia())
    .use(router)
// {a: 1, b: 2} [[a, 1] [b, 2]]
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)  // 全局组件
}
const permiss = usePermissStore()

app.directive('permiss', {
    mounted(el, binding) {
        if (!permiss.key.includes(String(binding.value))) {
            el['hidden'] = true
        }
    }
})


app.mount('#app')
