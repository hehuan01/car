//页面请求方式封装
import service from './service'

export default {
  //登录
  login: function(params,callback) {
    service.post("/api/goods",params,callback)
  },
  Ajax: function(params,callback,errorback) {
    service.post("",params,callback,errorback)
  }
}
