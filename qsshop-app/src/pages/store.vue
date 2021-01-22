<template>
  <div>
    <el-card class="store_list">
      <div slot="header" class="clearfix store_top">
        <div class="store_left">
          <img src="@/assets/xhlogo.png" width="40px" height="40px" class="xhlogo fl" />
          <span class="xhlogo_title fl">选择店铺</span>
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
            <el-button type="primary" @click="createstore">创建店铺</el-button>
          </li>
        </ul>
      </div>
      <div class="stote-item">
        <div class="item" v-for="item in tabledata" :key="item.store_id">
          <div class="box">
            <p class="name">{{item.store_name}}</p>
            <p class="txt">店铺状态：
              <el-tag type="success" v-if="item.status==1">正常营业</el-tag>
              <el-tag type="danger" v-if="item.status==0">已打烊</el-tag>
            </p>
            <p class="txt">创建时间：{{item.create_time}}</p>
            <p class="act">
              <el-link type="primary" :underline="false" @click="sele(item.store_id)">选择</el-link>
              <el-link type="primary" :underline="false" @click="edit(item.store_id)">编辑</el-link>
            </p>
          </div>
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
        username: null,
        fullName: null,
        tabledata: [],
      }
    },
    mounted() {
      this.username = localStorage.getItem("username")
      this.fullName = localStorage.getItem("fullName")
      this.storelist()
    },
    methods: {
      storelist() {
        store.listdata().then((res) => {
          if (res.success) {
            this.tabledata = res.result
          }
        })
      },
      sele(store_id) {
        localStorage.setItem("store_id", store_id);
        this.$router.push("/index")
      },
      edit(store_id) {
        localStorage.setItem("store_id", store_id);
        this.$router.push("/index/editstore")
      },
      logout() {
        login.logout().then((res) => {
          localStorage.clear();
          this.$router.push('/login');
        })
      },
      createstore() {
        this.$router.push('/createstore');
      }
    }
  }
</script>

<style>
</style>
