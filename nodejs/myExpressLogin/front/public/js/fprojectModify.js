$(function() {
	function modifyProject(key) {
		$.ajax({
			type: "post",
			url: url + "modifyProject",
			async: false,
			data: key.parame,
			success: function(data) {
				(data.errcode == 0) ? key.success(data): layer.msg(data.errmsg);
			}
		});
	}

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
	var vm = new Vue({
		el: '#container',
		data: {
			list: ""
		},
		methods: {
			init: function() {
				sessionStorage.projectId = GetQueryString('projectId');
				this.getProjectDetail();
			},
			laydate: function(id) {
				var start = {
					elem: id,
					format: 'YYYY年MM月DD日',
					max: '2099-06-16 23:59:59', //最大日期
					istime: false,
					istoday: false
				}
				laydate(start);
			},
			getProjectDetail: function() {
				var _this = this;
				getProjectDetail({
					parame: {
						projectId: sessionStorage.projectId
					},
					success: function(data) {
						_this.list = data.data;
						 $('#setTime').val(data.data.createTime);
						  $('#endTime').val(data.data.endTime);
					}
				})
			},
			save: function() {
				var _this = this;
				modifyProject({
					parame: {
						shortName: _this.list.shortName,
						fullName: _this.list.fullName,
						customer: _this.list.customer,
						version: _this.list.version,
						projectManager: _this.list.projectManager,
						description: _this.list.description,
						level: _this.list.level,
						status: _this.list.status,
						devCycle: _this.list.devCycle,
						createTime: $('#setTime').val(),
						endTime: $('#endTime').val(),
						projectId: sessionStorage.projectId
					},
					success: function(data) {
						layer.msg('修改成功');
						setTimeout(function() {
							parent.location.reload();
						}, 1000);
					}
				})
			}
		}
	});
	vm.init();
})