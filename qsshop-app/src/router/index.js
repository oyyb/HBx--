import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import dashboard from '@/pages/dashboard.vue'
import login from '@/pages/login.vue'
import store from '@/pages/store.vue'
import editstore from '@/pages/store/editstore.vue'
import createstore from '@/pages/store/createstore.vue'
import goods from '@/pages/goods.vue'
import order from '@/pages/order.vue'
import gcate from '@/pages/gcate.vue'
import supplier from '@/pages/supplier.vue'
import addsupplier from '@/pages/supplier/addsupplier.vue'
import editsupplier from '@/pages/supplier/editsupplier.vue'

Vue.use(Router)
const router = new Router({
  routes: [{
      path: '*',
      redirect: '/index'
    }, {
      path: '/index',
      name: 'index',
      component: index,
      redirect: '/index/dashboard',
      meta: {
        requireAuth: true
      },
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: dashboard
      }, {
        path: 'goods',
        name: 'goods',
        component: goods
      }, {
        path: 'gcate',
        name: 'gcate',
        component: gcate
      }, {
        path: 'order',
        name: 'order',
        component: order
      }, {
        path: 'editstore',
        name: 'editstore',
        component: editstore
      }, {
        path: 'supplier',
        name: 'supplier',
        component: supplier
      }, {
        path: 'addsupplier',
        name: 'addsupplier',
        component: addsupplier
      }, {
        path: 'editsupplier/:sup_id',
        name: 'editsupplier',
        component: editsupplier
      }]
    },
    {
      path: '/store',
      name: 'store',
      component: store,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/createstore',
      name: 'createstore',
      component: createstore,
      meta: {
        requireAuth: true
      }
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
