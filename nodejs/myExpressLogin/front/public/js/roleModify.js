//修改用户角色
function roleModify() {
	$.ajax({
		type: "post",
		url: url + "roleModify",
		async: false,
		data: {
			id: GetQueryString("userId"),
			role: $('#select').val()
		},
		success: function(data) {
			if(data.errcode == 0) {
				var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
				parent.resetTable();
				parent.getUserRoleList();
				parent.msg(data.errmsg);
				parent.layer.close(index);
			} else {
				layer.msg(data.errmsg);
			}
		}
	});
}