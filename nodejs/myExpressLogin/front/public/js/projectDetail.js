$(function() {
	function getProjectDetail(key) {
		$.ajax({
			type: "post",
			url: url + "selectProjectDetail",
			async: false,
			data: key.parame,
			success: function(data) {
				(data.errcode == 0) ? key.success(data): layer.msg(data.errmsg);
			}
		});
	}

	function getProjectDevList(key) {
		$.ajax({
			type: "post",
			url: url + "getProjectDevList",
			async: false,
			data: key.parame,
			success: function(data) {
				(data.errcode == 0) ? key.success(data): layer.msg(data.errmsg);
			}
		});
	}
	var vm = new Vue({
		el: "#container",
		data: {
			list: "",
			devList: ""
		},
		methods: {
			init: function() {
				sessionStorage.projectId = GetQueryString('projectId');
				this.projectDetail();
				this.projectDevList();
			},
			projectDetail: function() {
				var _this = this;
				getProjectDetail({
					parame: {
						projectId: sessionStorage.projectId
					},
					success: function(data) {
						_this.list = data.data;
						console.log(data);
					}
				})
			},
			projectDevList: function() {
				var _this = this;
				getProjectDevList({
					parame: {
						projectId: sessionStorage.projectId
					},
					success: function(data) {
						_this.devList = data.data;
					}
				})
			}
		}
	});
	vm.init();
})