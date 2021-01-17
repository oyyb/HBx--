<template>
  <div>
    <el-card class="store_list">
      <div slot="header" class="clearfix store_top">
        <div class="store_left">
          <img src="../assets/xhlogo.png" width="40px" height="40px" class="xhlogo fl"/>
          <span class="xhlogo_title fl">选择店铺</span>
        </div>
        <ul class="store_right">
          <li><img :src="circleUrl" width="20px" height="20px"/></li>
          <li>{{ fullName }}</li>
          <li>
            <el-link type="primary" :underline="false" @click="logout">退出</el-link>
          </li>
          <li>
            <el-button type="primary" @click="createshop">创建店铺</el-button>
          </li>
        </ul>
      </div>
      <div class="stote-item">
        <div class="item" v-for="item in tabledata" :key="item.store_id">
          <div class="box">
            <p class="name">{{ item.store_name }}</p>
            <p class="txt">店铺状态：
              <el-tag type="success" v-if="item.status==1">正常营业</el-tag>
              <el-tag type="danger" v-if="item.status==0">已打烊</el-tag>
            </p>
            <p class="txt">创建时间：{{ item.create_time }}</p>
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
import store from "@/api/store.js";
import login from "@/api/login.js";

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
        } else {

        }
      })
    },
    sele(store_id) {
      localStorage.setItem("store_id", store_id);
      this.$router.push("/index")
    },
    edit(store_id) {
      localStorage.setItem("store_id", store_id);
      this.$router.push("/updateshop")
    },
    logout() {
      login.logout().then((res) => {
        localStorage.clear();
        this.$router.push('/login');
      })
    },
    createshop() {
      this.$router.push("/createshop");
    }
  }
}
</script>

<style>
.store_list {
  width: 900px;
  margin: 0 auto;
}

.store_list .store_top {
  position: relative;
  height: 40px;
}

.xhlogo {
}

.xhlogo_title {
  line-height: 40px;
  display: inline-block;
  padding-left: 10px;
  border-left: 1px solid #f5f5f5;
  margin-left: 10px;
}

.store_left {
}

.store_right {
  position: absolute;
  right: 0;
  font-size: 12px;
}

.store_right li {
  float: left;
  padding-left: 5px;
  line-height: 40px;
  height: 40px;
}

.store_right li img {
  padding-top: 10px;
}

.store_right .el-link {
  font-size: 12px;
  padding-right: 10px;
}

.stote-item {
  height: auto;
  overflow: hidden;
  cursor: pointer;
}

.stote-item .item {
  line-height: 30px;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  border-top: 3px solid #f5f5f5;
  overflow: hidden;
  width: 273.333px;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
}

.stote-item .item:nth-child(3),
.stote-item .item:nth-child(6),
.stote-item .item:nth-child(9),
.stote-item .item:nth-child(12),
.stote-item .item:nth-child(15) {
  margin-right: 0;
}

.stote-item .item .box {
  padding: 15px;
  position: relative;
}

.stote-item .item p.name {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
}

.stote-item .item p.txt {
  color: #999;
  font-size: 12px;
}

.stote-item .item p.act .el-link {
  margin-right: 10px;
  font-size: 12px;
  z-index: 999;
}
</style>
