(function (doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		if(IsPC()){
			docEl.style.cssText="font-size:32px;width:750px;background: #F4F4F6;margin:0 auto";
		}else{
			docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
		}
	};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
function IsPC(){
     var userAgentInfo = navigator.userAgent;
     var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
     var flag = true;
     for (var v = 0; v < Agents.length; v++) {
         if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
     }
     return flag;
  }
