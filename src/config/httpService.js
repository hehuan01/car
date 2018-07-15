//页面请求方式封装
import service from './service'

export default {
  //登录
  login: function(params,callback) {
    service.post("/api/goods",params,callback)
  },
  userGetMobileAuthCode: function(params,callback,errorback) {
    service.post("/h5/ycshop/userAuthLoginService/userGetMobileAuthCode",params,callback,errorback)
  },
  userLogin: function(params,callback,errorback){
    service.post("/h5/ycshop/userAuthLoginService/userLogin",params,callback,errorback)
  }
}
