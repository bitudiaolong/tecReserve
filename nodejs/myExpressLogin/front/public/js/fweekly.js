function fweeklySelect(key) {
	$.ajax({
		type: "post",
		url: url + "fweeklySelect",
		async: false,
		data: key.parame,
		success: function(data) {
			(data.errcode == 0) ? key.success(data.data): layer.msg(data.errmsg);
		}
	});
}
var index = "";
var vm = new Vue({
	el: "#container",
	data: {
		nav:nav,
		weekList: ""
	},
	methods: {
		getWeeklyList: function() {
			var _this = this;
			fweeklySelect({
				parame: {
					userId: Number(sessionStorage.userId),
					devGroup: Number(sessionStorage.devGroup)
				},
				success: function(data) {
					data.reverse();
					_this.weekList = data;
				}
			})
		},
		openWeekly: function(path, id, title) {
			index = layer.open({
				type: 2,
				shade: [0],
				area: ['300px', '200px'],
				move: false,
				content: path + '?id=' + id
			});
			layer.title(title, index);
			layer.full(index);
		}
	},
	filters: {
		weekformat: function(value) {
			value = value.substring(0, value.indexOf("T"));
			var dateTime = new Date(value);
			var weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
			var week = weekArray[dateTime.getDay()]; // 这个就是你想要的结果吧
			return week;
		},
		dateFormat: function(value) {
			value = value.substring(0, value.indexOf("T"));
			return value;
		},
		timeFormat: function(value) {
			value = value.substring(value.indexOf("T") + 1, value.indexOf("."));
			return value;
		}
	}
});
vm.getWeeklyList();
function updateWeeklyList() {
	layer.close(index);
	vm.getWeeklyList();
}