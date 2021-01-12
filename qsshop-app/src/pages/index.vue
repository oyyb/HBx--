<template>
  <el-container :style="{ height: winheight+'px'}">
    <el-aside width="200px">
      <Nav></Nav>
    </el-aside>
    <el-container>
      <el-header height="64px">
        <Header></Header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Nav from "@/components/nav.vue"
  import Header from "@/components/header.vue"
  export default {
    name: 'Index',
    components: {
      Nav,
      Header
    },
    data() {
      return {
        winheight: 1000
      }
    },
    mounted() {
      this.winheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
    },
    methods: {}
  }
</script>

<style>
  .el-aside {
    background-color: #444;
    height: 100%;
    border-bottom: 1px solid #b4b4b41c;
    box-shadow: 0 10px 20px #b4b4b41c;
  }

  .el-submenu .el-menu-item {
    min-width: 100%;
  }

  .el-header,
  .el-footer {
    border-bottom: 1px solid #b4b4b41c;
    box-shadow: 0 10px 20px #b4b4b41c;
    background-color: #fff;
  }

  .el-main {
    background-color: #f7f8fa;
  }

  .all-page {
    background-color: #fff;
    min-height: 500px;
    border-radius: 3px;
  }
</style>
