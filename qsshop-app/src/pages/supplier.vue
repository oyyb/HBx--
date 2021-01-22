<template>
  <div class="all-page">
    <div class="all-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>供应商管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="all-main">
      <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
        <el-form-item>
          <el-button type="primary" @click="addformshow">新增供应商</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" stripe row-key="gcate_id" border :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="sup_id" label="ID" width="100"></el-table-column>
        <el-table-column prop="name" label="姓名" width="150"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="200"></el-table-column>
        <el-table-column prop="goods_total" label="商品总数" width="150"></el-table-column>
        <el-table-column prop="total_turnover" label="总营业额" width="150"></el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="200"></el-table-column>
        <el-table-column prop="company" label="公司名称"></el-table-column>
        <el-table-column prop="wechat_number" label="微信号" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button @click="editformshow(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="delectformsubmit(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import supplier from "@/api/supplier.js"
  export default {
    data() {
      return {
        formInline: {
          name: '',
          phone: '',
          company: ''
        },
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        tabletotal: 0
      }
    },
    mounted() {
      this.listdata();
    },
    methods: {
      //查询所有数据
      listdata() {
        let data = {
          store_id: localStorage.getItem("store_id"),
          name: this.formInline.name,
          phone: this.formInline.phone,
          company: this.formInline.company,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }
        supplier.listdata(data).then((res) => {
          this.tabletotal = res.result.total;
          this.tableData = res.result.data;
        });
      },
      addformshow() {
        this.$router.push('/index/addsupplier');
      },
      editformshow(row) {
        this.$router.push('/index/editsupplier/' + row.sup_id);
      },
      //删除分类
      delectformsubmit(row) {
        let data = {
          store_id: localStorage.getItem("store_id"),
          sup_id: row.sup_id
        };
        this.$confirm('是否删除该数据?', '提示').then(() => {
          supplier.delete(data).then((res) => {
            if (res.success) {
              this.listdata();
              this.$message({
                type: 'success',
                message: '删除成功'
              });
            } else {
              this.$message({
                type: 'info',
                message: res.message
              });
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        })
      }
    }
  }
</script>

<style>
</style>
