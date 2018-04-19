function selectProjectDetail(projectId, callback) {
	$.ajax({
		type: "post",
		url: url + "selectProjectDetail",
		async: false,
		data: {
			projectId: projectId
		},
		success: function(data) {
			(data.errcode == 0) ? callback(data): layer.msg(data.errmsg);
		}
	});
}

var vm = new Vue({
	el: "#container",
	data: {
		data: ""
	},
	methods: {
		init: function() {
			var _this = this;
			var id = GetQueryString('projectId');
			selectProjectDetail(id, function(data) {
				_this.data = data.data;
			});
		}
	}
});
vm.init();
//
//function detail(projectId) {
//	var index = layer.open({
//		type: 2,
//		shade: [0],
//		area: ['300px', '200px'],
//		move: false,
//		content: 'fprojectDetail?projectId=' + projectId
//	});
//	layer.title("", index);
//	layer.full(index);
//}