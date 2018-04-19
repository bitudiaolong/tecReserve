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

function fweeklyAdd(key) {
	$.ajax({
		type: "post",
		url: url + "fweeklyAdd",
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
		title: "",
		content: ""
	},
	methods: {
		fweeklyAdd: function() {
			var _this = this;
			fweeklyAdd({
				parame: {
					userId: Number(sessionStorage.userId),
					devGroup: Number(sessionStorage.devGroup),
					title: _this.title,
					content: $('#summernote').code()
				},
				success: function(data) {
					layer.msg(data.errmsg);
					setTimeout(function(){
						parent.updateWeeklyList();
					},1000);
				}
			})
		}
	}
})