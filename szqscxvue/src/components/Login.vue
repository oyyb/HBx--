<template>
	<div>
		<el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px" class="login-box">
			<h3 class="login-title">欢迎登陆</h3>
			<el-form-item label="手机号" prop="username">
				<el-input v-model.number="form.username" placeholder="请输入手机号码"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="form.password" placeholder="请输入8至13位密码"></el-input>
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
			let telCheck = (rule, value, callback) => {
			      if (value === "") {
			        return callback(new Error("电话号码是必须的"));
			      } else if (!Number.isInteger(value)) {
			        return callback(new Error("电话号码必须是数字"));
			      } else if (value.toString().length !== 11) {
			        return callback(new Error("电话号码必须是11位数字"));
			      } else {
			        callback();
			      }
			    };
			return {
				form: {
					username: '',
					password: ''
				},
				rules: {
					username: [{
							required: true,
							validator: telCheck,
							trigger: 'blur' //失去焦点
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
							name:'Main',
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