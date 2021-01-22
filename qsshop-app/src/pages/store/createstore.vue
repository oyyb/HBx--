<template>
  <div>
    <el-card class="store_list">
      <div slot="header" class="clearfix store_top">
        <div class="store_left">
          <img src="@/assets/xhlogo.png" width="40px" height="40px" class="xhlogo fl" />
          <span class="xhlogo_title fl">创建店铺</span>
        </div>
        <ul class="store_right">
          <li><img :src="circleUrl" width="20px" height="20px" /></li>
          <li>
            <el-link :underline="false">{{username}}</el-link>
          </li>
          <li>
            <el-link type="primary" :underline="false" @click="logout">退出</el-link>
          </li>
          <li>
            <el-link type="primary" :underline="false" href="#/store">返回店铺</el-link>
          </li>
        </ul>
      </div>
      <div class="w60">
        <el-form :model="form" ref="form" :rules="rules" label-width="120px">
          <el-form-item label="店铺类型" prop="storetype">
            <el-cascader v-model="form.storetype" :options="options"></el-cascader>
          </el-form-item>
          <el-form-item label="店铺名称" prop="store_name">
            <el-input v-model="form.store_name"></el-input>
          </el-form-item>
          <el-form-item label="店铺状态" prop="status">
            <el-radio-group v-model="form.status">
              <el-radio label="1">启动</el-radio>
              <el-radio label="0">关闭</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="店铺地址" prop="address">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" style="padding-left: 120px;">
          <el-button type="primary" @click="addformsubmit">创 建</el-button>
        </div>
      </div>
    </el-card>
    <div style="text-align: center; line-height: 50px; font-size: 12px; color: #666;">© 2013 - 2021 szqscx.com</div>
  </div>
</template>

<script>
  import store from "@/api/store.js"
  import login from "@/api/login.js"
  export default {
    data() {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        username: localStorage.getItem("username"),
        fullName: localStorage.getItem("fullName"),
        form: {
          store_name: '',
          status: '1',
          address: '',
          storetype: [],
          classOne: '',
          classTwo: '',
          creator_id:'',
        },
        rules: {
          store_name: {
            required: true,
            message: '请输入店铺名称',
            trigger: 'blur'
          },
          status: {
            required: true,
            message: '请输入店铺名称',
            trigger: 'blur'
          },
          storetype: {
            required: true,
            message: '请选择店铺类型',
            trigger: 'blur'
          }
        },
        options: [],
        tabledata: []
      }
    },
    mounted() {
      store.storetype().then((res) => {
        this.options = res.result
      });
    },
    methods: {
      logout() {
        login.logout().then((res) => {
          localStorage.clear();
          this.$router.push('/login');
        })
      },
      //提交更新
      addformsubmit() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.form.classOne = this.form.storetype[0];
            this.form.classTwo = this.form.storetype[1];
            this.form.creator_id = localStorage.getItem("userid");
            store.create(this.form).then((res) => {
              if (res.success) {
                this.$message({
                  type: 'success',
                  message: '创建成功'
                });
                this.$router.push("/store");
              } else {
                this.$message({
                  type: 'info',
                  message: res.message
                });
              }
            })
          }
        })

      }
    }
  }
</script>

<style>
</style>
