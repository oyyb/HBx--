<template>
	<div>
		<el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px" class="login-box">
			<h3 class="login-title">欢迎登陆</h3>
			<el-form-item label="用户名" prop="username">
				<el-input v-model="form.username"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="form.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				form: {
					username: 'oyyb',
					password: '12345678'
				},
				rules: {
					username: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur' //失去焦点
						},
						{
							min: 2,
							max: 6,
							message: '长度在 2 到 6 个字符',
							trigger: 'blur'
						}
					],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							min: 8,
							max: 13,
							message: '长度在 8 到 13 个字符',
							trigger: 'blur'
						}
					]

				}
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						window.sessionStorage.setItem('isLogin','ture');
						this.$store.dispatch('asyncUpdateUser',{username:this.form.username});
						this.$router.push({
							name:'Main',params:{username:this.form.username}
							});
					} else {
						alert('error submit!!');
						return false;
					}
				});
			},
		}
	}
</script>

<style scoped>
	.login-box {
		width: 480px;
		margin: 200px auto;
		border: 1px solid #dcdfe6;
		padding: 40px;
		border-radius: 10px;
		box-shadow: 0 0 30px #dcdfe6;
	}

	.login-title {
		text-align: center;
	}
</style>
