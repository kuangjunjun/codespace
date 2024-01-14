const Koa = require('koa')
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser')  // 为了让 koa 可以解析出来 post 请求传递的参数
const app = new Koa()
const mongoose = require('mongoose')   // 用来连接mongodb
// 消除严格模式
mongoose.set("strictQuery", true)

const config = require('./config.js')

mongoose.connect(config.db, { useNewUrlParser: true },(err)=> {
    if (err) {
        console.error(err)
    } else {
        console.log('数据库连接成功');
    }
})
// mongoose.connect(config.db).catch(error=>handleError(error))

app.use(bodyParser())
app.use(cors())

const login_router = require('./routes/login/index.js')
const register_router = require('./routes/register/index.js')
const shoppingcart_router=require('./routes/shoppingcart/index.js')


// 让路由与koa联系起来
app.use(login_router.routes()).use(login_router.allowedMethods())
app.use(register_router.routes()).use(register_router.allowedMethods())
app.use(shoppingcart_router.routes()).use(shoppingcart_router.allowedMethods())

app.listen(config.port, () => {
    console.log('项目已启动');
})