import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import Main from '../components/Main'

// 使用VueRouter
Vue.use(Router);

export default new Router({
	mode:'history',
	base: '/',
	routes:[
		// 重定向空白页至登陆
		{
			path:'/',
			name:'ToLogin',
			redirect:'/login',
		},
		{
			path:'/login',
			name:'Login',
			component:Login,
		},
		// 首页
		{
			path:'/main',
			name:'Main',
			component:Main,
		},
		// 退出登陆
		{
			path:'/logout',
			name:'Logout',
		},
		// 回到首页
		{
			path:'/backMain',
			name:'backMain',
			redirect:'/main',
		},
		// 重定向空白页至404
		{
			path:'*',
			name:'NotFound',
			component:NotFound,
		}
	]
})