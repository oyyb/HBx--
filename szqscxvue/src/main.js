// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store' 


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);

// 全局调用axios
Vue.prototype.axios = axios;

Vue.config.productionTip = false


router.beforeEach((to,from,next)=>{
	let isLogin = window.sessionStorage.getItem('isLogin');
	if(to.path == '/logout'){
		// 如果to路径为退出登陆
		window.sessionStorage.clear();
		console.log('清除成功');
		// 清除isLogin,并跳转到登陆页面
		next('/login');
	}else if(to.path == '/login'){
		// 已登录直接跳转到首页
		if (isLogin != null){
			next({path:'/main'});
		}
	}else if (isLogin == null){
		// 设备直接跳转到登陆页
		next('/login');
	}
	next();
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
	store,
	render: h => h(App)
})
