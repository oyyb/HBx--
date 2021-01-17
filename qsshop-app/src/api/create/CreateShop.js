import http from "@/utils/http.js"

const CreateShop = {
  //新建店铺（必须是已登录状态下）
  createshop(params) {
    let url = '/api/store/create';
    return http.post(url, params);
  },
}

export default CreateShop;
