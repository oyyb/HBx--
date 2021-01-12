import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import dashboard from '@/pages/dashboard.vue'
import login from '@/pages/login.vue'
import goods from '@/pages/goods.vue'
import order from '@/pages/order.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect: '/index/dashboard',
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: dashboard
        },
        {
          path: 'goods',
          name: 'goods',
          component: goods
        },
        {
          path: 'order',
          name: 'order',
          component: order
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
});
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// true 需要登陆
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if (to.matched.some(item => item.meta.requireAuth)) {
    if (token) {
      next();
    } else {
      next({
        name: "login"
      })
    }
  } else {
    next();
  }
});
export default router;
