<template>
  <div class="all-page">
    <div class="all-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品分组</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="all-main">
      <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
        <el-button type="primary" style="margin-right: 20px;" @click="dialogFormVisible = true">新增分组</el-button>
        <el-form-item prop="name">
          <el-input v-model="formInline.name" placeholder="请输入分销商名称"></el-input>
        </el-form-item>
        <el-form-item prop="userName">
          <el-input v-model="formInline.userName" placeholder="请输入联系人"></el-input>
        </el-form-item>
        <el-form-item prop="phoneNumber">
          <el-input v-model="formInline.phoneNumber" placeholder="请输入联系方式"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" stripe row-key="id" border>
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: [],
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      }
    },
    methods: {

    },
  }
</script>

<style>
</style>
