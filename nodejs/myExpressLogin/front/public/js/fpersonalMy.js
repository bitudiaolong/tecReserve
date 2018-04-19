var index = '';

function toPage(url) {
	index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '200px'],
		move: false,
		content: url
	});
	layer.title('', index);
	layer.full(index);
}

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
var vm = new Vue({
	el: '#container',
	data: {
		nav:nav,
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
				}
			})
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