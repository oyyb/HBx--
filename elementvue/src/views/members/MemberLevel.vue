<template>
	<div>
		会员等级 ID={{this.$route.params.id}}
	</div>
</template>

<script>
	export default {
		name:"MemberLevel",
		props:['id'],
		// beforeRouteEnter: (to,from,next) => {
		// 	console.log(to);
		// 	next((vm)=>{
		// 		vm.getData();
		// 	});
		// },
		// beforeRouteLeave: (to,from,next) => {
		// 	console.log(to);
		// 	next();
		// },
		// methods:{
		// 	getData:function(){
		// 		this.axios({
		// 			methods:'get',
		// 			// url:'http://localhost:8080/data.json',
		// 		}),then(function(repos){
		// 			console.log(repos);
		// 		}),catch(function(error){
		// 			console.log(error);
		// 		})
		// 	}
		// }
	}
</script>

<style>
</style>
