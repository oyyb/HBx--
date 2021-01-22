import http from "@/utils/http.js"

const supplier = {
  //供应商列表不分页
  listdata(params) {
    let url = '/api/supplier/listdata';
    return http.get(url, params);
  },
  //添加供应商
  create(params) {
    let url = '/api/supplier/create';
    return http.post(url, params);
  },
  //修改供应商
  update(params) {
    let url = '/api/supplier/update';
    return http.post(url, params);
  },
  //删除供应商
  delete(params) {
    let url = '/api/supplier/delete';
    return http.get(url, params);
  },
  //查看单个供应商
  find(params) {
    let url = '/api/supplier/find';
    return http.get(url, params);
  }
}

export default supplier;
