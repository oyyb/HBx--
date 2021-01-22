import http from "@/utils/http.js"

const store = {
  //查询当前用户下所有店铺（必须是已登录状态下）
  listdata(params) {
    let url = '/api/store/listdata';
    return http.post(url, params);
  },
  //查询当个店铺
  find(params) {
    let url = '/api/store/find';
    return http.get(url,params);
  },
  //店铺类目下拉选择
  storetype() {
    let url = '/api/store/storetype';
    return http.get(url);
  },
  //店铺修改
  update(params){
    let url = '/api/store/update';
    return http.post(url, params);
  },
  //创建修改
  create(params){
    let url = '/api/store/create';
    return http.post(url, params);
  }
}

export default store;
