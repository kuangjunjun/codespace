const Koa = require('koa')

const app = new Koa()

app.listen(3000, () => {
    console.log('项目已经运行在3000端口');
})