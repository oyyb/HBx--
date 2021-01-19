import http from "@/utils/http.js"

const store = {
  //商品分组列表不分页
  gcatelistdata(params) {
    let url = '/api/gcate/listdata';
    return http.get(url, params);
  },
  //创建商品分类
  gcatecreate(params) {
    let url = '/api/gcate/create';
    return http.post(url,params);
  },
  //编辑商品分类
  gcateupdate(params) {
    let url = '/api/gcate/update';
    return http.post(url,params);
  },
  //删除商品分类
  gcatedelete(params) {
    let url = '/api/gcate/delete';
    return http.get(url,params);
  },
  //商品分类树
  gcatetree(params) {
    let url = '/api/gcate/gcatetree';
    return http.get(url,params);
  },
  //商品分类ID
  gcatefind(params){
    let url = '/api/gcate/find';
    return http.get(url,params);
  }
}

export default store;
