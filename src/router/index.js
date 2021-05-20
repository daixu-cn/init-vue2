import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// 路由守卫--路由跳转之后触发;
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0) //跳转之后回到顶部
})
// 路由守卫--路由跳转之前触发;
router.beforeEach((to, from, next) => {
  // if (localStorage.getItem('token')) {
  //   //判断是否需要登录
  //   next()
  // } else {
  //   if (to.name !== 'Login') {
  //     next('/login')
  //   } else {
  //     next()
  //   }
  // }
  next()
})
export default router
