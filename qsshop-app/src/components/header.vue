<template>
  <div class="header-top"><span class="el-icon-s-fold"></span>
    <div class="user">
      <span class="xiaoxi el-icon-chat-dot-round"></span>
      <span class="circleUrl el-icon-user"></span>
      <el-dropdown>
        <span class="el-dropdown-link">何鹏<i class="el-icon-arrow-down el-icon--right"></i></span>
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
      }
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
    width: 50%;
    float: right;
    text-align: right;
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
