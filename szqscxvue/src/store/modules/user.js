const user = {
	
	// 公共state对象,存储所有组件的状态
	state : null!=window.sessionStorage.getItem('state') ? JSON.parse(window.sessionStorage.getItem('state')) : {
		user: {
			username: ''
		}
	},
	
	// 唯一取值的方法,计算属性
	getters : {
		getUser(state) {
			return state.user;
		}
	},
	
	// 唯一可以修改state值的方法,同步阻塞
	mutations : {
		updateUser(state, user) {
			state.user = user;
		}
	},
	
	// 异步调用mutations方法,只有用commit去调用mutations方法
	actions : {
		asyncUpdateUser(context, user) {
			context.commit('updateUser', user);
		}
	}
}

export default user;