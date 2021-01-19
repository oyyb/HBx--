<template>
  <el-card class="box-card loginbox">
    <h1>奇思创想小程序管理系统</h1>
    <div class="h20"></div>
    <el-form :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="formInline.username" prefix-icon="el-icon-user" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formInline.password" type="password" prefix-icon="el-icon-view" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="formInline.checked" class="fl">自动登录</el-checkbox>
        <el-link type="primary" class="fr">忘记密码</el-link>
        <el-link type="primary" class="fr" style="margin-right: 10px;">注册账户</el-link>
      </el-form-item>
      <el-form-item style="text-align: center;">
        <el-button type="primary" @click="onSubmit" style="width: 100%;">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
  import login from "@/api/login.js"
  export default {
    data() {
      return {
        formInline: {
          username: '13760340870',
          password: '#white111',
          checked: ''
        }
      }
    },
    methods: {
      onSubmit() {
        login.onLogin(this.formInline).then((res) => {
          if(res.success){
            localStorage.setItem("token", res.result.token);
            localStorage.setItem("userid", res.result.user.userid);
            localStorage.setItem("username", res.result.user.username);
            localStorage.setItem("fullName", res.result.user.fullName);
            localStorage.setItem("groupid", res.result.user.groupid);
            this.$router.push("/store")
          }else{
            console.log(res.message);
          }
        });
      }
    }
  }
</script>

<style>
  .loginbox {
    width: 400px;
    margin: 0 auto;
    margin-top: 10%;
  }

  .loginbox h1 {
    text-align: center;
    font-size: 20px;
  }

  .loginbox p {
    font-size: 12px;
    height: 40px;
    line-height: 40px;
  }
</style>
