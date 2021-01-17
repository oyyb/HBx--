import http from "@/utils/http.js"

const store = {
  //查询当前用户下所有店铺（必须是已登录状态下）
  listdata(params) {
    let url = '/api/store/listdata';
    return http.post(url, params);
  },
  //用户登出
  logout() {
    let url = '/api/login/logout';
    return http.get(url);
  },
  //忘记密码
  test(){

  }
}

export default store;
