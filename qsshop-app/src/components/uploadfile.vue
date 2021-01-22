<template>
  <el-dialog title="图片库" :visible.sync="uploadboxVisible" class="upload_box" :before-close="handleDialogClose" width="980px" @open="imageslistdata">
    <div class="demo-image">
      <div class="imgblock" v-for="(item,i) in imgdata" :key="item.fileid" @click="fileurl(i)">
        <el-image style="width: 100px; height: 100px" :src="item.file_url" fit="fill"></el-image>
        <i class="el-icon-check" v-if="item.checked"></i>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-pagination background layout="prev, pager, next" :total="tabletotal" :page-size="pageSize" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" :current-page="currentPage"></el-pagination>
      <el-button class="fr" type="primary" @click="selectImgData">选 择</el-button>
      <el-upload class="upload-demo fr" name="imgFile" :headers="token" :data="uploadsdata" :action="baseURL"
        :on-change="onchange" :on-success="onsuccess" :show-file-list="false">
        <el-button type="primary">上传图片</el-button>
      </el-upload>
    </div>
  </el-dialog>
</template>

<script>
  import uploads from "@/api/uploads.js"
  import config from '@/api/config.js'
  export default {
    name: 'uploadfile',
    props: {
      uploadboxVisible: false
    },
    data() {
      return {
        token: {
          token: localStorage.getItem("token")
        },
        uploadsdata: {
          store_id: localStorage.getItem("store_id")
        },
        baseURL: config.baseURL + '/api/obsfile',
        imgdata: [],
        selectdata: [],
        tabletotal: 0,
        currentPage: 1,
        pageSize: 32,
      }
    },
    methods: {
      selectImgData() {
        this.$parent.calluploaddata(this.selectdata);
        this.$parent.uploadboxVisible = false;
        this.selectdata = [];
      },
      //点击
      fileurl(i) {
        this.$set(this.imgdata[i], 'checked', !this.imgdata[i]['checked']);
        if (this.selectdata.includes(this.imgdata[i]['file_url'])) {
          this.selectdata.splice(this.imgdata[i]['file_url'], 1);
        } else {
          this.selectdata.push(this.imgdata[i]['file_url']);
        }
      },
      //查询所有图片
      imageslistdata() {
        let data = {
          store_id: localStorage.getItem("store_id"),
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }
        uploads.imageslist(data).then((res) => {
          this.tabletotal = res.result.total;
          /*if (this.selectdata.length > 0 && res.result.data.length > 0) {
            for (let i = 0; i < res.result.data.length; i++) {
              for (let n = 0; n < this.selectdata.length; n++) {
                if (this.selectdata[n] == res.result.data[i]['file_url']) {
                  res.result.data[i]['checked'] = true
                }
              }
            }
          }*/
          this.imgdata = res.result.data;
        });
      },
      //关闭弹窗
      handleDialogClose() {
        this.$parent.uploadboxVisible = false;
      },
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(e) {
        console.log(e);
      },
      //切换分页
      handleCurrentChange(e) {
        this.currentPage = e;
        this.imageslistdata();
      },
      //选择文件时触发
      onchange(file, fileList) {},
      //上传成功时触发
      onsuccess(response, file, fileList) {
        if (response.success) {
          this.imageslistdata();
        } else {
          this.$message({
            type: 'info',
            message: response.message
          });
        }
      }
    }
  }
</script>

<style>
  .upload_box .demo-image,
  .upload_box .dialog-footer {
    height: auto;
    overflow: hidden;
  }

  .upload_box .el-dialog__body {
    padding: 0;
    min-height: 400px;
  }

  .upload_box .imgblock {
    float: left;
    display: block;
    overflow: hidden;
    margin-left: 20px;
    margin-top: 20px;
    cursor: pointer;
    position: relative;
  }

  .upload_box .imgblock:nth-child(8),
  .upload_box .imgblock:nth-child(16),
  .upload_box .imgblock:nth-child(24),
  .upload_box .imgblock:nth-child(32),
  .upload_box .imgblock:nth-child(40) {
    margin-right: 0;
  }

  .upload_box .el-pagination {
    padding-top: 4px;
    float: left;
  }

  .upload_box .upload-demo {
    width: 120px;
    margin-right: 20px;
  }

  .upload_box .imgblock i {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    line-height: 100px;
    z-index: 99;
    color: #fff;
    font-size: 50px;
  }
</style>
