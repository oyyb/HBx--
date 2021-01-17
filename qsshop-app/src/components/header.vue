<template>
  <div class="header-top"><span class="el-icon-s-fold"></span>
    <div class="user">
      <el-dropdown>
        <span class="el-dropdown-link"><img :src="circleUrl" width="20px" height="20px" class="fl"
                                            style="padding-top: 22px; padding-right: 5px;"/>{{ fullName }}<i
          class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/Editpass">修改密码</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/Userinfo">个人中心</router-link>
          </el-dropdown-item>
          <el-dropdown-item><span @click="logout()">退出登录</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-link type="primary" href="/store">[切换店铺]</el-link>
    </div>
  </div>
</template>

<script>
import login from "@/api/login.js"

export default {
  name: "Header",
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      fullName: null,
      username: null
    }
  },
  mounted() {
    this.username = localStorage.getItem("username")
    this.fullName = localStorage.getItem("fullName")
  },
  methods: {
    logout() {
      login.logout().then((res) => {
        localStorage.clear();
        this.$router.push('/login');
      })
    }
  }
}
</script>

<style>
.header-top {
  line-height: 64px;
}

.circleUrl {
  display: inline-block;
  line-height: 64px;
  font-size: 20px;
}

.user {
  float: right;
  padding-right: 50px;
}

.xiaoxi {
  margin-right: 10px;
  display: inline-block;
  line-height: 64px;
  font-size: 20px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #666;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>
