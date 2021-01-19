<template>
  <div class="all-page">
    <div class="all-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设置</el-breadcrumb-item>
        <el-breadcrumb-item>店铺信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="all-main">
      <ul>
        <li>店铺名称：{{ storeinfo.store_name }}</li>
        <li v-if="storeinfo.status == 1">店铺状态：营业</li>
        <li v-else>店铺状态：关闭</li>
        <li>店铺ID：{{ storeinfo.store_id }}</li>
        <li>店铺创建时间：{{ storeinfo.create_time }}</li>
      </ul>
      <el-button @click="editstore" type="text" size="small">编辑店铺信息</el-button>
    </div>

    <!--  编辑店铺信息  -->
    <el-dialog title="编辑此店铺信息" :visible.sync="dialogFormVisible">
      <el-form :model="editstoreinfo" :rules="editstorerules" ref="editstoreinfo">
        <el-form-item label="店铺名称" :label-width="formLabelWidth" prop="store_name">
          <el-input v-model="editstoreinfo.store_name"></el-input>
        </el-form-item>
        <el-form-item label="店铺ID" :label-width="formLabelWidth">
          <el-input v-model="editstoreinfo.store_id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="是否开启店铺" :label-width="formLabelWidth">
          <el-radio-group v-model="editstoreinfo.status">
            <el-radio label="1">开启</el-radio>
            <el-radio label="0">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="店铺地址" :label-width="formLabelWidth">
          <el-input v-model="editstoreinfo.address"></el-input>
        </el-form-item>
        <el-form-item label="店铺类目" :label-width="formLabelWidth">
          <el-cascader
            expand-trigger="hover"
            :options="options"
            v-model="selectedOptions2"
            @change="handleChange">
          </el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editstoresubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import store from "@/api/store.js";


export default {
  name: "setting",
  data() {
    return {
      formLabelWidth: '120px',
      dialogFormVisible: false,
      storeinfo: [
        {store_name: '', status: '', store_id: '', create_time: '',}
      ],
      editstoreinfo: [
        {store_name: '', status: '', store_id: '', create_time: '',}
      ],
      editstorerules: {
        store_name: {required: true, message: '请输入分组名称', trigger: 'blur'},
      },
      options: [
        {
          value: "", pvalue: "", label: "", state: "", children: [
            {value: "", pvalue: "", label: ""},
          ]
        },
      ],
      selectedOptions2: []
    }
  },
  mounted() {
    this.storelist();
  },
  methods: {
    storelist() {
      store.listdata().then((res) => {
        if (res.success) {
          // this.tabledata = res.result;
          console.log(res.result);
          let storeinfo = res.result.filter(function (obj) {
            return obj.store_id == localStorage.getItem("store_id");
          });
          console.log(storeinfo);
          this.storeinfo = storeinfo[0];
          this.editstoreinfo = storeinfo[0];
        } else {
        }
      })
    },
    editstore() {
      this.dialogFormVisible = true;
      store.storetype().then((res) => {
        if (res.success) {
          console.log('店铺类目');
          this.options = JSON.parse(JSON.stringify(res.result).replace(/id/g,'value').replace(/name/g,'label'))
          console.log(this.options);
        }
      })
    },
    editstoresubmit() {
      this.$refs['editstoreinfo'].validate((valid) => {
        if (valid) {
          store.update(this.editstoreinfo).then((res) => {
            if (res.success) {
              this.storelist();
              this.dialogFormVisible = false;
              this.$message({
                type: 'success',
                message: '更新成功'
              })
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleChange(value) {
      console.log(value);
      let i,len;
      for(i = 0,len=value.length; i < len; i++) {
        console.log(value[i])
      }
    },
  },
}
</script>

<style scoped>

</style>
