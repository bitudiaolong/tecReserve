$(function() {
	function getUserList(key) {
		$.ajax({
			type: "post",
			url: url + "getUserList",
			async: false,
			data: key.parame,
			success: function(data) {
				(data.errcode == 0) ? key.success(data): layer.msg(data.errmsg);
			}
		});
	}

	function modifyDevGroup(key) {
		$.ajax({
			type: "post",
			url: url + "modifyDevGroup",
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
			userIdList: []
		},
		methods: {
			init: function() {
				this.userList();
			},
			userList: function() {
				var _this = this;
				getUserList({
					parame: "",
					success: function(data) {
						_this.list = data.data;
					}
				});
			},
			selectId: function(userId) {
				this.userIdList.push(userId);
			},
			createDevAdd: function() {
				var _this = this;
				modifyDevGroup({
					parame: {
						projectId: sessionStorage.projectId,
						userIdList: _this.userIdList
					},
					success: function(data) {
						layer.msg('添加成功');
						setTimeout(function() {
							parent.location.reload();
						}, 1000);
					}
				});
			}
		}
	});
	vm.init();
})