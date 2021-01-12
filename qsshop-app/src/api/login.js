import http from "@/utils/http.js"

const login = {
  //用户登录
  onLogin(params) {
    let url = '/api/login/onlogin';
    return http.post(url, params);
  },
  //用户登出
  logout() {
    let url = '/api/login/logout';
    return http.get(url);
  }
}

export default login;
