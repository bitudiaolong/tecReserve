function getUserInfo(key) {
	$.ajax({
		type: "post",
		url: url + "getUserInfo",
		async: false,
		data: key.parame,
		success: function(data) {
			(data.errcode == 0) ? key.success(data): layer.msg(data.errmsg);
		}
	});
}

function modifyUserInfo(parame) {
	$.ajax({
		type: "post",
		url: url + "modifyUser",
		async: false,
		data: parame,
		success: function(data) {
			layer.msg(data.errmsg);
		}
	});
}
var vm = new Vue({
	el: '#container',
	data: {
		info: ''
	},
	methods: {
		init: function() {
			var _this = this;
			getUserInfo({
				parame: {
					userId: sessionStorage.userId
				},
				success: function(data) {
					_this.info = data.data;
					data.data.sex == '男' ? $('#man').iCheck('check') : $('#weman').iCheck('check');
				}
			})
		},
		modifyUserInfo: function() {
			modifyUserInfo(this.info);
		}
	},
	filters: {
		isGroup: function(val) {
			switch(val) {
				case 1:
					val = 'java组'
					break;
				case 2:
					val = 'H5组'
					break;
				case 3:
					val = '测试组'
					break;
				case 4:
					val = '设计组'
					break;
				case 5:
					val = '产品组'
					break;
				case 6:
					val = '运维组'
					break;
				case 7:
					val = 'android组'
					break;
				case 8:
					val = 'iOS组'
					break;
			}
			return val;
		}
	}
});
vm.init();
$('.i-checks').iCheck({
	checkboxClass: 'icheckbox_square-green',
	radioClass: 'iradio_square-green',
});