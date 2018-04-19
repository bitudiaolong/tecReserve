$(function() {
	function createProject(key) {
		$.ajax({
			type: "post",
			url: url + "addProject",
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
			list: {
				shortName: "",
				projectManager: "",
				customer: "",
				version: "",
				fullName: "",
				status: "",
				level: "",
				description: ""
			}
		},
		methods: {
			init: function() {
			},
			laydate: function(id) {
				var start = {
					elem: id,
					format: 'YYYY-MM-DD',
					max: '2099-06-16 23:59:59', //最大日期
					istime: false,
					istoday: true
				}
				laydate(start);
			},
			create: function() {
				var _this = this;
				createProject({
					parame: {
						shortName: _this.list.shortName,
						fullName: _this.list.fullName,
						customer: _this.list.customer,
						version: _this.list.version,
						projectManager: _this.list.projectManager,
						description: _this.list.description,
						level: _this.list.level,
						status: _this.list.status,
						createTime: $('#setTime').val(),
						endTime: $('#endTime').val()
					},
					success: function(data) {
						layer.msg('创建成功');
						setTimeout(function() {
							parent.location.reload();
						}, 1000);
					}
				});
			},
			resetInfo: function() {
				this.list.shortName = "";
				this.list.projectManager = "";
				this.list.customer = "";
				this.list.version = "";
				this.list.fullName = "";
				this.list.status = "";
				this.list.devCycle = "";
				$('#setTime').val("");
				$('#endTime').val("");
			}
		}
	});
	vm.init();
})