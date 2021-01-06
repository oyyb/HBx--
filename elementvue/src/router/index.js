import Vue from 'vue';
import Router from 'vue-router';
import Login from "../views/Login";
import Main from "../views/Main";
import MemberLevel from "../views/members/MemberLevel";
import MemberList from "../views/members/MemberList";
import NotFound from "../views/NotFound";

Vue.use(Router)

export default new Router({
	mode:'history',
	base: '/dist/',
	routes:[
		// 重定向空白页至登陆
		{
			path:'/',
			name:'ToLogin',
			redirect:'/login',
		},
		// 登陆页面
		{
			path:'/login',
			name:'Login',
			component:Login,
		},
		{
			path:'/logout',
			name:'Logout',
		},
		// 首页
		{
			path:'/main/:username',
			name:'Main',
			component:Main,
			// 嵌套路由,子路由前面不要加"/"
			children:[
				{
					path:'member/level/:id',  
					name:'MemberLevel',
					component:MemberLevel,
				},
				{
					path:'member/list/:id',
					name:'MemberList',
					component:MemberList,
					props:true,
				}
			],
			props:true,
		},
		// 带参数的组件路由重定向
		{
			path:'/backMain/:username',
			name:'backMain',
			redirect:'/main/:username',
		},
		{
			path:'*',
			name:'NotFound',
			component:NotFound,
		}
	]
})