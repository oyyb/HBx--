import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import dashboard from '@/pages/dashboard.vue'
import login from '@/pages/login.vue'
import store from '@/pages/store.vue'
import goods from '@/pages/goods.vue'
import order from '@/pages/order.vue'
import gcate from '@/pages/gcate.vue'
import UpdateShop from "../pages/update/UpdateShop";

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
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
          path: 'gcate',
          name: 'gcate',
          component: gcate
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
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/updateshop',
      name: 'updateshop',
      component: UpdateShop,
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
