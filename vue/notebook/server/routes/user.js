const Router = require('@koa/router')
const router = new Router()
const { userLogin } = require('../controllers/mysqlControl.js')

// 定义登录接口
router.post('/login', async (ctx) => {
    // 获取到前端传递的账号密码，去数据库中校验账号密码的正确性
    const { username, password } = ctx.request.body
    try {
        const result = await userLogin(username, password)
        // console.log(result);
        if (result.length) {   // 账号密码存在
            let data = {
                id: result[0].id,
                nickname: result[0].nickname,
                username: result[0].username
            }
            ctx.body = {
                code: '8000',
                data: data,
                msg: '登陆成功'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '账号或密码错误'
            }
        }
    } catch (err) {
        ctx.body = {
            code: '8005',
            data: err,
            msg: '服务器异常'
        }
    }
})

// 定义注册接口
router.post('/register', async (ctx) => {
    // 拿到前端传来的 username, password, nickname
    // 在数据库中校验 username 是否存在， 如果不存在
    // 往数据库中植入一条新的数据

    
})

module.exports = router