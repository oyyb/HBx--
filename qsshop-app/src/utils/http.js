// 导入axios
import axios from 'axios';
import router from '@/router'

// 跳转登陆页面
const toLogin = () => {
  router.push({
    name: 'login'
  })
}

const CheckToken = () => {
  if (localStorage.getItem("token")) {
    axios.defaults.headers.common['token'] = localStorage.getItem("token")
  } else {
    //toLogin();
  }
}

// 公共路由(网络请求地址)
axios.defaults.baseURL = 'http://qsshop.szqscx.com/';
axios.defaults.timeout = 5000;
axios.defaults.headers.common['token'] = localStorage.getItem("token")
axios.defaults.headers.post['Content-type'] = "application/x-www-form-urlencoded"

// 错误信息处理

const errorHandle = (status, other) => {
  switch (status) {
    case 400:
      console.log("信息校验失败");
      break;
    case 401:
      toLogin(); // 去登陆
      console.log("认证失败");
      break;
    case 403:
      console.log("无权限操作");
      break;
    case 404:
      console.log("请求的资源不存在");
      break;
    case 500:
      console.log("服务器内部错误");
      break;
    case 503:
      console.log("服务不可用");
      break;
    default:
      console.log(other);
      break;
  }
}


// 封装自己的get/post方法
export default {
  get: function (path = '', data = {}) {
    axios.defaults.headers.common['token'] = localStorage.getItem("token")
    return new Promise(function (resolve, reject) {
      axios.get(path, {
        params: data
      })
        .then(function (response) {
          // 按需求来，这里我需要的是response.data，所以返回response.data，一般直接返回response
          errorHandle(response.data.code, response.data.message);
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  post: function (path = '', data = {}) {
    axios.defaults.headers.common['token'] = localStorage.getItem("token")
    return new Promise(function (resolve, reject) {
      axios.post(path, data)
        .then(function (response) {
          errorHandle(response.data.code, response.data.message);
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
};
