var reqUrl = "http://" + window.location.host + "/";
var debug = true;

function myDate(format) {
	var myDate = new Date();
	var yyyy = myDate.getFullYear(),
		mm = myDate.getMonth() + 1,
		dd = myDate.getDay(),
		hh = myDate.getHours(),
		min = myDate.getMinutes(),
		ss = myDate.getSeconds();
	if(format == 'yyyy-mm-dd hh:mm:ss' || format == '') {
		return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ':' + ss;
	} else if(format == 'yyyy-mm-dd') {
		return yyyy + '-' + mm + '-' + dd;
	} else if(format == 'HH:mm:ss') {
		return hh + ':' + min + ':' + ss;
	} else if(format == 'timestamp') {
		return myDate.getTime();
	} else {
		return '时间格式' + format + '未知';
	}
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURIComponent(r[2]);
	return null;
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while(c.charAt(0) == ' ') c = c.substring(1);
		if(c.indexOf(name) != -1) return c.substring(name.length, c.length);
	}
	return "";
}

function clearCookie(name) {
	setCookie(name, "", -1);
}
var $$ = {}
$$.post = function(url, parame, callback) {
	var parame = (debug) ? {
		data: DES3.encrypt(JSON.stringify(parame))
	} : parame;
	$.post(reqUrl + url, parame, function(res) {
		callback((debug) ? JSON.parse(DES3.decrypt(res)) : res);
	}, (debug) ? 'text' : 'json');
}
$$.toPage = function(url, type) {
	var type = arguments[1] ? arguments[1] : '';
	(type == 'open') ? window.open(url, '_self'): window.location.href = url;
}
$$.regTest = function(data, type) {
	var type = arguments[1] ? arguments[1] : 'phone';
	return(type == 'phone') ? /^1[3|4|5|7|8|9][0-9]{9}$/.test(data) : /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(data);
}

$$.terminal = function(type) {
	if(type == 'weixin' || type == 'weChat' || type == 'wechat') {
		return(window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger') ? true : false;
	} else if(type == 'ios' || type == 'IOS' || type == 'iOS') {
		return navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	} else if(type == 'android' || type == 'Android') {
		return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
	}
}
var browser = {
	versions: function() {
		/**
		 * 终端判断
		 * 1、trident：IE内核
		 * 2、presto：opera内核
		 * 3、webKit：苹果、谷歌内核
		 * 4、gecko：火狐内核
		 * 5、mobile：是否为移动终端
		 * 6、ios：ios终端
		 * 7、android：android终端或者uc浏览器
		 * 8、iPhone：是否为iPhone或者QQHD浏览器
		 * 9、iPad：是否iPad
		 * 10、webApp：是否web应该程序，没有头部与底部
		 */
		var u = navigator.userAgent;
		return {
			trident: u.indexOf('Trident') > -1,
			presto: u.indexOf('Presto') > -1,
			webKit: u.indexOf('AppleWebKit') > -1,
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
			mobile: !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('iPad') > -1,
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
			iPhone: u.indexOf('iPhone') > -1,
			iPad: u.indexOf('iPad') > -1,
			webApp: u.indexOf('Safari') == -1
		};
	}()
}