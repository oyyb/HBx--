import http from "@/utils/http.js"

const uploads = {
  //所有图片
  imageslist(params) {
    let url = '/api/uploads/index';
    return http.get(url, params);
  }
}

export default uploads;
