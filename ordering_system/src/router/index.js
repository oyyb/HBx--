import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Main_Customer from "../components/Customer/Main_Customer";
import Main_Merchant from "../components/Merchant/Main_Merchant";

Vue.use(Router)

export default new Router({
  mode:'history',   //隐藏默认的‘/#/’
  base: '/',
  routes: [
    // 进入后重定向至登陆页
    {
      path: '/',
      name: 'ToLogin',
      redirect:'/login'
    },
    // 登陆
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    // 顾客主页
    {
      path: '/main_customer',
      name: 'Main_Customer',
      component: Main_Customer
    },
    {
      path: '/main_merchant',
      name: 'Main_Merchant',
      component: Main_Merchant
    },
    // 错误页面重定向至404NotFound
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
