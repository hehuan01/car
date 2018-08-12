let common = {
  "appId":"100000",
  "version":"1.0.0",
  "source":'h5',
  getCookie: function(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null){
      return unescape(arr[2]);
    } else{
      return null;
    }
  },
  getQueryString(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURIComponent(r[2]);
    return null;
  },
  uploadImg(e){
    let file = e.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function(e){
      let result = e.target.result;
      console.log(typeof result)
      return result;
    }
  }
}
export default common
