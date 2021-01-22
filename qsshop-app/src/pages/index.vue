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
</style>
