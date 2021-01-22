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
        <el-form-item>
          <el-button type="primary" @click="addformshow">新增类目</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" stripe row-key="gcate_id" border :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="gcate_id" label="分类ID" width="100"></el-table-column>
        <el-table-column prop="fulltitle" label="分类名">
          <template slot-scope="scope">
            <span v-html="scope.row.fulltitle"></span>
          </template>
        </el-table-column>
        <el-table-column prop="order_num" label="分类排序" width="150"></el-table-column>
        <el-table-column prop="is_show" label="是否显示" width="180">
          <template slot-scope="scope">
            <el-tag :type="scope.row.is_show=='1'?'success':'danger'">{{scope.row.is_show=='1'?'显示':'隐藏'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="total_num" label="商品数" width="180"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button @click="editformshow(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="delectformsubmit(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--新增商品分组-->
    <el-dialog title="新增商品分类" :visible.sync="addformVisible">
      <el-form :model="addform" ref="addform" :rules="addrules" label-width="120px">
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="addform.name"></el-input>
        </el-form-item>
        <el-form-item label="所属分类" prop="cate_pid">
          <el-select v-model="addform.cate_pid" placeholder="请选择">
            <el-option label="一级分类" value="0"></el-option>
            <el-option v-for="item in gcatetree" :key="item.gcate_id" :label="item.name" :value="item.gcate_id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否显示" prop="is_show">
          <el-radio-group v-model="addform.is_show">
            <el-radio :label="1">显示</el-radio>
            <el-radio :label="0">隐藏</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类图标" prop="img_url">
          <el-input v-model="addform.img_url" style="width: 80%; float: left; margin-right: 15px;"></el-input>
          <el-button type="primary" @click="uploadboxVisible = true">选择图片<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-form-item>
        <el-form-item label="分类排序" prop="order_num">
          <el-input v-model="addform.order_num"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addformVisible = false">取 消</el-button>
        <el-button type="primary" @click="addformsubmit">保 存</el-button>
      </div>
    </el-dialog>
    <!--编辑商品分组-->
    <el-dialog title="编辑商品分类" :visible.sync="editformVisible">
      <el-form :model="editform" ref="editform" :rules="addrules" label-width="120px">
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="editform.name"></el-input>
        </el-form-item>
        <el-form-item label="所属分类" prop="cate_pid">
          <el-select v-model="editform.cate_pid" placeholder="请选择">
            <el-option label="一级分类" value="0"></el-option>
            <el-option v-for="item in gcatetree" :key="item.gcate_id" :label="item.name" :value="item.gcate_id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否显示" prop="is_show">
          <el-radio-group v-model="editform.is_show">
            <el-radio label="1">显示</el-radio>
            <el-radio label="0">隐藏</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类图标" prop="img_url">
          <el-input v-model="editform.img_url" style="width: 80%; float: left; margin-right: 15px;"></el-input>
          <el-button type="primary" @click="uploadboxVisible = true">选择图片<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-form-item>
        <el-form-item label="分类排序" prop="order_num">
          <el-input v-model="editform.order_num"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editformVisible = false">取 消</el-button>
        <el-button type="primary" @click="editformsubmit">更 新</el-button>
      </div>
    </el-dialog>
    <uploadfile ref="uploadfile" :uploadboxVisible="uploadboxVisible"></uploadfile>
  </div>
</template>

<script>
  import goods from "@/api/goods.js"
  import config from '@/api/config.js'
  import uploadfile from '@/components/uploadfile.vue'
  export default {
    name: 'gcate',
    components: {
      uploadfile
    },
    data() {
      return {
        formInline: {},
        uploadboxVisible: false,
        uploadsdata: {},
        gcatetree: [],
        addform: {
          name: '',
          is_show: 1,
          img_url: '',
          cate_pid: '',
          store_id: '',
          order_num: 0
        },
        addrules: {
          name: {
            required: true,
            message: '请输入分组名称',
            trigger: 'blur'
          },
          cate_pid: {
            required: true,
            message: '请选择所属分组',
            trigger: 'blur'
          }
        },
        addformVisible: false,
        editformVisible: false,
        tableData: [],
        editform: {
          name: '',
          is_show: '',
          img_url: '',
          cate_pid: '',
          store_id: '',
          order_num: ''
        }
      }
    },
    mounted() {
      this.listdata();
    },
    methods: {
      listdata() {
        let data = {
          store_id: localStorage.getItem("store_id")
        };
        goods.gcatelistdata(data).then((res) => {
          this.tableData = res.result;
        });
      },
      onSearch() {
        //this.$refs.uploadfile.test();
        this.uploadboxVisible = true;
      },
      resetForm() {
        this.uploadboxVisible = false;
      },
      //创建分类
      addformshow() {
        this.addformVisible = true;
        let data = {
          store_id: localStorage.getItem("store_id")
        };
        goods.gcatetree(data).then((res) => {
          this.gcatetree = res.result;
        })
      },
      //编辑分类
      editformshow(row) {
        this.editformVisible = true;
        let data = {
          store_id: localStorage.getItem("store_id")
        };
        goods.gcatetree(data).then((res) => {
          this.gcatetree = res.result;
        })
        this.editform.name = row.name;
        this.editform.is_show = row.is_show;
        this.editform.img_url = row.img_url;
        this.editform.cate_pid = row.cate_pid;
        this.editform.order_num = row.order_num;
        this.editform.gcate_id = row.gcate_id;
        this.editform.store_id = localStorage.getItem("store_id")
      },
      //编辑保存
      editformsubmit() {
        this.$refs['editform'].validate((valid) => {
          if (valid) {
            goods.gcateupdate(this.editform).then((res) => {
              if (res.success) {
                this.$refs['editform'].resetFields();
                this.listdata();
                this.editformVisible = false;
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
            });
          }
        })
      },
      //保存分类
      addformsubmit() {
        this.$refs['addform'].validate((valid) => {
          if (valid) {
            this.addform.store_id = localStorage.getItem("store_id");
            goods.gcatecreate(this.addform).then((res) => {
              if (res.success) {
                this.$refs['addform'].resetFields();
                this.listdata();
                this.addformVisible = false;
                this.$message({
                  type: 'success',
                  message: '创建成功'
                });
              } else {
                this.$message({
                  type: 'info',
                  message: res.message
                });
              }
            });
          }
        })
      },
      //删除分类
      delectformsubmit(row) {
        let data = {
          store_id: localStorage.getItem("store_id"),
          gcate_id: row.gcate_id
        };
        this.$confirm('是否删除该数据?', '提示').then(() => {
          goods.gcatedelete(data).then((res) => {
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
      },
      onchange(file, fileList) {},
      onsuccess(response, file, fileList) {
        if (response.success) {
          this.addform.img_url = response.result
        } else {
          this.$message({
            type: 'info',
            message: response.message
          });
        }
      },
      //选中图片回调
      calluploaddata(data) {
        if (this.addformVisible) {
          this.addform.img_url = data[0];
        }
        if (this.editformVisible) {
          this.editform.img_url = data[0];
        }
      }
    }
  }
</script>

<style>
</style>
