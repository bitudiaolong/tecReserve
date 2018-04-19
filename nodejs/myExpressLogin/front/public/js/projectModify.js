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
					}
				})
			},
			save: function() {
				var _this = this;
				modifyProject({
					parame: {
						shortName: _this.list.shortName,
						projectManager: _this.list.projectManager,
						customer: _this.list.customer,
						version: _this.list.version,
						fullName: _this.list.fullName,
						status: _this.list.status,
						devCycle: _this.list.devCycle,
						createTime: $('#setTime').val(),
						projectId: sessionStorage.projectId
					},
					success: function(data) {
						window.location.href = 'projectManager?projectId=' + sessionStorage.projectId;
					}
				})
			}
		}
	});
	vm.init();
})