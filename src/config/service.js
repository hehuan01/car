
//http请求配置
import axios from 'axios'
import config from './base'

export default {
  post:function(url,params,successCallBack,errorCallBack){
    //axios拦截器(loading)
    axios.interceptors.request.use(function (config) {
      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    //设置请求参数
    config.serviceConfig.data = params;
    //返回请求数据
    axios.get(url,{},config.serviceConfig)
    .then((response)=> {
      //成功回调
      successCallBack(response.data);
    })
    .catch(function(error) {
      //失败回调
      errorCallBack && errorCallBack(error);
    });
  }

}
