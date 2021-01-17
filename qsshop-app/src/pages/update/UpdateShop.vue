<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.store_name"></el-input>
      </el-form-item>
      <el-form-item label="店铺ID">
        <el-input v-model="form.store_id" :disabled="true"></el-input>
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
import UpdateShop from "@/api/update/UpdateShop.js"
import store from "@/api/store.js"
import ReadShopType from "@/api/read/ReadShopType.js"

export default {
  name: "UpdateShop",
  data() {
    return {
      form: {
        store_name: '',
        store_id: '',
        status: '',
        address: '',
      },
      options: [
        {
          value: "1",
          pid: "1",
          label: "一",
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
    store.listdata().then((res) => {
      if (res.success) {
        this.form = res.result[localStorage.getItem("store_id") - 1];
      } else {

      }
    })
    ReadShopType.readshoptype().then((res) => {
      if (res.success) {
        console.log('店铺类目');
        console.log(JSON.parse(JSON.stringify(res.result).replace(/id/g,'value').replace(/name/g,'label')));
        // let j;
        // for(j = 0; j < res.result.length; j++) {
        //   // this.options[j].value = res.result[j].id;
        //   console.log(typeof res.result[j].id);
        //   console.log(typeof this.options[0].value);
        //   // this.options[j].label = res.result[j].name;
        // }
      }
    })
  },
  methods: {
    onSubmit() {
      UpdateShop.updatashop(this.form).then((res) => {
        if (res.success) {
          alert('更新成功');
          this.prev();
        }
      })
    },
    // 返回
    prev() {
      this.$router.go(-1)
    },
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>

<style scoped>

</style>
