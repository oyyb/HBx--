import http from "@/utils/http.js"

const UpdateShop = {
  //查询当前用户下所有店铺（必须是已登录状态下）
  updatashop(params) {
    let url = '/api/store/update';
    return http.post(url, params);
  },
}

export default UpdateShop;
