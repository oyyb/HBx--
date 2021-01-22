<template>
  <div class="all-page">
    <div class="all-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/supplier' }">供应商管理</el-breadcrumb-item>
        <el-breadcrumb-item>更新供应商</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="all-main">
      <div class="w60">
        <el-form :model="form" ref="form" :rules="addrules" label-width="120px">
          <el-form-item label="供应商姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="供应商手机号" prop="phone">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="供应商地址" prop="address">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="微信号" prop="wechat_number">
            <el-input v-model="form.wechat_number"></el-input>
          </el-form-item>
          <el-form-item label="公司名称" prop="company">
            <el-input v-model="form.company"></el-input>
          </el-form-item>
          <el-form-item label="营业执照号" prop="business_license">
            <el-input v-model="form.business_license"></el-input>
          </el-form-item>
          <el-form-item label="公司地址" prop="company_address">
            <el-input v-model="form.company_address"></el-input>
          </el-form-item>
          <el-form-item label="开户银行" prop="bank_name">
            <el-input v-model="form.bank_name"></el-input>
          </el-form-item>
          <el-form-item label="银行账号" prop="bank_account">
            <el-input v-model="form.bank_account"></el-input>
          </el-form-item>
          <el-form-item label="开户名" prop="account_name">
            <el-input v-model="form.account_name"></el-input>
          </el-form-item>
          <el-form-item label="银行预留手机号" prop="reserve_phone">
            <el-input v-model="form.reserve_phone"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm">重 置</el-button>
        <el-button type="primary" @click="formsubmit">更 新</el-button>
      </div>

    </div>
  </div>
</template>

<script>
  import supplier from "@/api/supplier.js"
  export default {
    data() {
      return {
        form: {
          name: '',
          sup_id: '',
          store_id: '',
          phone: '',
          address: '',
          company: '',
          business_license: '',
          company_address: '',
          bank_name: '',
          bank_account: '',
          account_name: '',
          reserve_phone: '',
          wechat_number: '',
        },
        addrules: {
          name: {
            required: true,
            message: '请输入供应商姓名',
            trigger: 'blur'
          },
          phone: {
            required: true,
            message: '请输入供应商手机号',
            trigger: 'blur'
          },
          address: {
            required: true,
            message: '请输入供应商地址',
            trigger: 'blur'
          }
        }
      }
    },
    mounted() {
      this.supplierinfo();
    },
    methods: {
      supplierinfo() {
        let data = {
          sup_id: this.$route.params.sup_id,
          store_id: localStorage.getItem("store_id")
        };
        supplier.find(data).then((res) => {
          this.form.name = res.result.name;
          this.form.sup_id = res.result.sup_id;
          this.form.store_id = localStorage.getItem("store_id")
          this.form.phone = res.result.phone;
          this.form.address = res.result.address;
          this.form.company = res.result.company;
          this.form.business_license = res.result.business_license;
          this.form.company_address = res.result.company_address;
          this.form.bank_name = res.result.bank_name;
          this.form.bank_account = res.result.bank_account;
          this.form.account_name = res.result.account_name;
          this.form.reserve_phone = res.result.reserve_phone;
          this.form.wechat_number = res.result.wechat_number;
        });
      },
      formsubmit() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            supplier.update(this.form).then((res) => {
              if (res.success) {
                this.$message({
                  type: 'success',
                  message: '更新成功'
                });
                this.$router.push('/index/supplier');
              } else {
                this.$message({
                  type: 'info',
                  message: res.message
                });
              }
            })
          }
        })
      },
      //重置
      resetForm() {
        this.$refs['form'].resetFields();
      }
    }
  }
</script>

<style>
</style>
