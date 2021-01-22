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

  .w60 {
    width: 60%;
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

  .store_list {
    width: 900px;
    margin: 0 auto;
  }

  .store_list .store_top {
    position: relative;
    height: 40px;
  }

  .xhlogo {}

  .xhlogo_title {
    line-height: 40px;
    display: inline-block;
    padding-left: 10px;
    border-left: 1px solid #f5f5f5;
    margin-left: 10px;
  }

  .store_left {}

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
