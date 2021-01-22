<template>
	<div id="app">
		<!-- 展示路由组件 -->
		<router-view></router-view>
	</div>
</template>


<script>
	export default {
		name: 'App',
		mounted() {
			window.addEventListener('unload', this.saveState);
		},
		methods: {
			saveState() {
				window.sessionStorage.setItem('state', JSON.stringify(this.$store.state.user))
			}
		},
    beforeCreate: function() {
      console.log("data属性光声明没有赋值的时候");
    },
    created: function() {
      console.log("data属性完成了赋值");
    },
    beforeMount: function() {
      console.log("页面上的{{name}}还没有被渲染成真正的数据");
    },
    mounted: function() {
      console.log("页面上的{{name}}被渲染成真正的数据");
    },
    beforeUpdate: function() {
      console.log(" 数据（data属性）更新之前会执行的函数");
    },
    updated: function() {
      console.log("数据（data属性）更新完会执行的函数");
    },
    beforeDestroy: function() {
      console.log("实例被销毁之前会执行的函数");
    },
    destroyed: function() {
      console.log("实例被销毁后会执行的函数");
    }
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
