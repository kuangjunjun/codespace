import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register.vue'),
        meta: {
            title: '注册'
        }
    },
    {
        path: '/noteClass',
        name: 'noteClass',
        component: () => import('../views/NoteClass.vue'),
        meta: {
            title: '笔记分类'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫
const whitePath = ['/login', '/register']
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (!whitePath.includes(to.path)) {  // 你想去详情页
        if (!sessionStorage.getItem('userInfo')) {  // 没登录
            router.push('/login')
        }
    }
    next()
})

export default router