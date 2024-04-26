import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '商城首页'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于我们'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局的前置钩子
// router.beforeEach((to, from, next) => {
//   // console.log(to, from);
//   document.title = to.meta.title
//   if (to.path !== '/') {
//     const isLogin = localStorage.getItem('isLogin')
//     if (isLogin) {
//       next()
//     } else {
//       // router.push('/')
//       alert('请先登录')
//       return
//     }
//   }
//   next()
// })

// router.beforeResolve((to, from, next) => {
//   console.log(to, from);
// })

// router.afterEach((to, from) => {
//   console.log(to, from);
// })

export default router