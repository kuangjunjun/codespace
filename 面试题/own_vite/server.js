const Koa = require('koa')
const fs = require('fs')

const app = new Koa();
// 后端路由
// 中间件 middleware 洋葱模型
app.use(async ctx => {
    // 如果
    // 上下文请求 + 响应对象
    const { request: { url, query } } = ctx

    if (url === '/') {
        // 设置响应头
        ctx.type = "text/html"
        let content = fs.readFileSync('./index.html', 'utf-8')
        ctx.body = content
    }
})

app.listen(5173, () => {
    console.log('快来一起写vite,拿下美团');
})