import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'  // 自动设置根字体大小
import './assets/style/reset.css'
import { Button, Form, Field, CellGroup } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
import router from './router';

const app = createApp(App)

app.use(Button)
app.use(router)
app.use(Form);
app.use(Field);
app.use(CellGroup);

app.mount('#app')
