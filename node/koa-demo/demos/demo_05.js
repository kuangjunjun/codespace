const Koa = require('koa')
const Router = require('@koa/router')
const router = new Router()
const app = new Koa()

const main = (ctx) => {  // 只要被app use掉的函数一定具有ctx参数    ctx === koa
    ctx.body = '首页页面'
}
const about = (ctx) => {
    ctx.body = 'about page'
}
router.get('/main', main)
router.get('/about', about)
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
    console.log('项目已经运行在3000端口');
})