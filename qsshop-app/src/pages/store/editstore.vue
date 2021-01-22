<template>
  <div class="all-page">
    <div class="all-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设置</el-breadcrumb-item>
        <el-breadcrumb-item>店铺设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="all-main">
      <div class="w60">
        <el-form :model="form" ref="form" :rules="rules" label-width="120px">
          <el-form-item label="店铺名称" prop="store_name">
            <el-input v-model="form.store_name"></el-input>
          </el-form-item>
          <el-form-item label="店铺状态" prop="status">
            <el-radio-group v-model="form.status">
              <el-radio label="1">启动</el-radio>
              <el-radio label="0">关闭</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="店铺地址" prop="address">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="店铺类型" prop="storetype">
            <el-cascader v-model="form.storetype" :options="options"></el-cascader>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" style="padding-left: 120px;">
          <el-button type="primary" @click="editformsubmit">更 新</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from "@/api/store.js"
  export default {
    data() {
      return {
        form: {
          store_name: '',
          status: '',
          store_id: '',
          address: '',
          storetype: [],
          classOne: '',
          classTwo: '',
        },
        rules: {
          store_name: {
            required: true,
            message: '请输入店铺名称',
            trigger: 'blur'
          },
          status: {
            required: true,
            message: '请输入店铺名称',
            trigger: 'blur'
          },
          storetype: {
            required: true,
            message: '请选择店铺类型',
            trigger: 'blur'
          }
        },
        options: [],
        tabledata: []
      }
    },
    mounted() {
      this.storefind();
      store.storetype().then((res) => {
        this.options = res.result
      });
    },
    methods: {
      //查询单个店铺资料
      storefind() {
        let data = {
          store_id: localStorage.getItem("store_id")
        };
        store.find(data).then((res) => {
          this.form.store_name = res.result.store_name;
          this.form.status = res.result.status;
          this.form.store_id = res.result.store_id;
          this.form.address = res.result.address;
          this.form.storetype = [res.result.classOne, res.result.classTwo];
        });
      },
      //提交更新
      editformsubmit() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.form.classOne = this.form.storetype[0];
            this.form.classTwo = this.form.storetype[1];
            store.update(this.form).then((res) => {
              if (res.success) {
                this.$message({
                  type: 'success',
                  message: '更新成功'
                });
              } else {
                this.$message({
                  type: 'info',
                  message: res.message
                });
              }
            })
          }
        })

      }
    }
  }
</script>

<style>
</style>
