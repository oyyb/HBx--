<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'APP',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .h20 {
    height: 20px;
  }

  body {
    color: #666;
  }

  .fr {
    float: right;
  }

  .fl {
    float: left;
  }

  a:focus,
  a:hover {
    color: #666;
    text-decoration: none;
  }

  a {
    color: #666;
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

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
    padding: 0;
  }

  .all-page {
    min-height: 500px;
    border-radius: 3px;
  }

  .all-page .all-header {
    padding: 20px;
    background-color: #fff;
    margin-bottom: 20px;
  }

  .all-page .all-main {
    background-color: #fff;
    margin: 0px 20px;
    padding: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }
</style>
