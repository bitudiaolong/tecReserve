$('#summernote').summernote({
	lang: 'zh-CN',
	height: "200",
	toolbar: [
		['style', ['bold', 'italic', 'underline', 'clear']],
		['fontsize', ['fontsize']],
		['color', ['color']],
		['height', ['height']]
	]
});

function getUpdate(key) {
	$.ajax({
		type: "post",
		url: url + "fweeklyUpdateCallback",
		async: false,
		data: key.parame,
		success: function(data) {
			(data.errcode == 0) ? key.success(data): layer.msg(data.errmsg);
		}
	});
}

function updateSave(key) {
	$.ajax({
		type: "post",
		url: url + "fweeklyUpdate",
		async: false,
		data:key.parame,
		success:function(data){
			(data.errcode == 0) ? key.success(data): layer.msg(data.errmsg);
		}
	});
}
var vm = new Vue({
	el: "#container",
	data: {
		title: ""
	},
	methods: {
		init: function() {
			var _this = this;
			getUpdate({
				parame: {
					id: Number(GetQueryString("id"))
				},
				success: function(data) {
					_this.title = data.data.title;
					$('#summernote').code(data.data.content);
				}
			})
		},
		save: function() {
			var _this = this;
			updateSave({
				parame:{
					id: Number(GetQueryString("id")),
					content:$('#summernote').code(),
					title:_this.title
				},
				success:function(data){
					layer.msg(data.errmsg);
					setTimeout(function(){
						parent.updateWeeklyList();
					},1000);
				}
			})
		}
	}
});
vm.init();