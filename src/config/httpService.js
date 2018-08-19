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
  //获取帖子列表
  postList: function(params,callback,errorback){
    service.post("/h5/ycshop/postInfoService/postList",params,callback,errorback)
  },
  //个人中心
  personalInfo: function(params,callback,errorback){
    service.post("/h5/ycshop/personalInfoService/personalInfo",params,callback,errorback)
  },
  //关注他人
  payAttentionToUser: function(params,callback,errorback){
    service.post("/h5/ycshop/personalInfoService/payAttentionToUser",params,callback,errorback)
  },
  //修改个人信息
  editPersonInfo: function(params,callback,errorback){
    service.post("/h5/ycshop/personalInfoService/editPersonInfo",params,callback,errorback)
  },
  //关注列表 动态
  concernedUserList: function(params,callback,errorback){
    service.post("/h5/ycshop/concernedService/concernedUserList",params,callback,errorback)
  },
  //品牌关注
  concernedCarBrandInfoList: function(params,callback,errorback){
    service.post("/h5/ycshop/concernedService/concernedCarBrandInfoList",params,callback,errorback)
  },
  //收藏帖子
  concernedPostList(params,callback,errorback){
    service.post("/h5/ycshop/concernedService/concernedPostList",params,callback,errorback)
  },
  //点赞帖子
  raisePost(params,callback,errorback){
    service.post("/h5/ycshop/postInfoService/raisePost",params,callback,errorback)
  },
  //收藏帖子 评论详情
  storePost(params,callback,errorback){
    service.post("/h5/ycshop/postInfoService/storePost",params,callback,errorback)
  },
}
