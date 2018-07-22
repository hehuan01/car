//页面请求方式封装
import service from './service'

export default {
  //登录
  login: function(params,callback) {
    service.post("/api/goods",params,callback)
  },
  //获取短信验证码
  userGetMobileAuthCode: function(params,callback,errorback) {
    service.post("/h5/ycshop/userAuthLoginService/userGetMobileAuthCode",params,callback,errorback)
  },
  //登陆
  userLogin: function(params,callback,errorback){
    service.post("/h5/ycshop/userAuthLoginService/userLogin",params,callback,errorback)
  },
  //发布帖子
  publishPost: function(params,callback,errorback){
    service.post("/h5/ycshop/postInfoService/publishPost",params,callback,errorback)
  },
  // 上传图片
  uplodFile: function(params,callback,errorback){
    service.post("/h5/ycshop/fileService/uplodFile",params,callback,errorback)
  },
}
