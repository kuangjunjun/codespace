const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const { koaBody } = require('koa-body');

const token = '31231312312321';

app.use(koaBody({ multipart: true }));

// 设置跨域访问
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (ctx.method === 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
});

/// 获取前端传递过来的 token
app.use(async (ctx, next) => {
    if (ctx.url === '/login') { // 登录接口不需要校验 token
        await next();
        return;
    }

    const cookie = ctx.cookies.get('token'); // 不需要指定 httpOnly 选项
    console.log(cookie);

    if (cookie && cookie === token) {
        await next();
    } else {
        ctx.body = {
            code: 401,
            msg: '权限不足',
        };
        return;
    }
});

// 登录接口
router.post('/login', async (ctx) => {
    // 检验用户名和密码是否正确
    // 如果正确，返回登录成功 
    // 给前端设置登录凭证 cookie
    ctx.cookies.set('token', token, {
        expires: new Date(+new Date() + 1000 * 60 * 60 * 24 * 7),
        httpOnly: true,
        signed: false,
        sameSite: 'none',
        secure: true // 确保安全传输
    });

    ctx.body = {
        code: 200,
        msg: '登录成功',
    };
});

// 首页接口
router.get('/home', async (ctx) => {
    ctx.body = {
        code: 200,
        msg: '首页数据',
    };
});

app.use(router.routes());
app.listen(3000, () => {
    console.log('server is running at port 3000');
});