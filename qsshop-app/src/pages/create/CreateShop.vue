<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.store_name"></el-input>
      </el-form-item>
<!--      <el-form-item label="店铺ID">-->
<!--        <el-input v-model="form.store_id" :disabled="true"></el-input>-->
<!--      </el-form-item>-->
      <el-form-item label="创建者ID">
        <el-input v-model="form.creator_id" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="店铺状态">
        <el-select v-model="form.status" placeholder="请选择是否开启店铺">
          <el-option label="关闭店铺" value="0"></el-option>
          <el-option label="开启店铺" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="店铺地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="店铺类目">
        <el-cascader
          expand-trigger="hover"
          :options="options"
          v-model="selectedOptions2"
          @change="handleChange">
        </el-cascader>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
        <el-button @click="prev">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import CreateShop from "../../api/create/CreateShop";

export default {
  name: "CreateShop",
  data() {
    return {
      form: {
        store_name: '',
        creator_id: '',
        status: '',
        address: '',
        classOne:'',
        classTwo:'',
      },
      options: [
        {
          value: "",
          pvalue: "",
          label: "",
          state: "",
          children: [
            {
              value: "",
              pid: "",
              label: ""
            },
            {
              value: "",
              pid: "",
              label: ""
            },
            {
              value: "",
              pid: "",
              label: ""
            },
            {
              value: "",
              pid: "",
              label: ""
            }
          ]
        },
      ],
      selectedOptions2: []
    }
  },
  mounted() {
    this.form.creator_id = localStorage.getItem("userid");
    console.log(localStorage.getItem("userid"));
  },
  methods: {
    onSubmit() {
      CreateShop.createshop(this.form).then((res) => {
        if (res.success) {
          alert('更新成功');
          this.prev();
        } else {
          alert(res.result);
        }
      })
    },
    // 返回
    prev() {
      this.$router.go(-1)
    },
    handleChange(value) {
      console.log(value);
      let i,len;
      for(i = 0,len=value.length; i < len; i++) {
        console.log(value[i])
      }
    },
  }
}
</script>

<style scoped>

</style>

