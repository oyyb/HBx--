<template>
  <div>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" background-color="#444" text-color="#c8c9cc" active-text-color="#ffd04b" :router="true">
      <p class="logo">奇思创想</p>
      <el-menu-item index="/index/dashboard">
        <i class="el-icon-data-line"></i>
        <span slot="title">概况</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-shopping-bag-1"></i>
          <span slot="title">商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/goods">商品管理</el-menu-item>
          <el-menu-item index="/index/gcate">商品分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-truck"></i>
          <span slot="title">供应商</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/supplier">供应商管理</el-menu-item>
          <el-menu-item index="/index/addsupplier">添加供应商</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/index/order">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">订单</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-user"></i>
        <span slot="title">客户</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-bank-card"></i>
        <span slot="title">资产</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-coin"></i>
        <span slot="title">营销</span>
      </el-menu-item>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/editstore">店铺设置</el-menu-item>
          <el-menu-item index="/index/wxprograms">小程序设置</el-menu-item>
          <el-menu-item index="/index/wxprograms">管理员</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .logo {
    font-size: 16px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    text-align: center;
  }

  .el-menu {
    border-right: none;
  }

  .el-menu-vertical-demo .is-active {
    /*background-color: #1890ff !important;*/
  }
</style>
