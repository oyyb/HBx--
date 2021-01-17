import http from "@/utils/http.js"

const ReadShopType = {
  //查询当前用户下所有店铺（必须是已登录状态下）
  readshoptype() {
    let url = '/api/store/storetype';
    return http.get(url);
  },
}

export default ReadShopType;
