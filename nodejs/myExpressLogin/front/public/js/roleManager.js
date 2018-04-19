getUserRoleList();

function renderList(data) {
	var columns = [{
		"data": 'id',
		"title": "用户id",
		"class": "text-center",
		"width": "100px",
		"sortable": true,
		"render": function(data, type, row) {
			return data;
		}
	}, {
		"data": 'account',
		"title": "用户名",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			return data;
		}
	}, {
		"data": 'name',
		"title": "姓名",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			return data;
		}
	}, {
		"data": "role",
		"title": "角色",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			var role = "";
			switch(data) {
				case 1:
					role = "超级管理员"
					break;
				case 2:
					role = "管理员"
					break;
				case 3:
					role = "普通用户"
					break;
			}
			return role;
		}
	}, {
		"data": 'id',
		"title": "操作",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			return '<a onclick="roleModify(' + data + ');" class="m-l"><i class="fa fa-edit"></i>修改</a>';
		}
	}]
	$('.dataTables-example').DataTable({
		"data": data,
		"searching": true,
		"bLengthChange": true,
		"ordering": true,
		"paging": true,
		"info": true,
		"aoColumns": columns,
		"fnDrawCallback": function() {},
	});
}
//获取用户角色列表
function getUserRoleList() {
	$.ajax({
		type: "post",
		url: url + "getUserList",
		async: false,
		data: "",
		success: function(data) {
			(data.errcode == 0) ? renderList(data.data): layer.msg(data.errmsg);
		}
	});
}
//重置厂商table
function resetTable() {
	dttable = $('.dataTables-example').dataTable();
	dttable.fnClearTable();
	dttable.fnDestroy();
}
//项目修改
function roleModify(userId) {
	var index = layer.open({
		type: 2,
		shade: [0.6],
		shadeClose: true,
		offset: '100px',
		area: ['500px', '250px'],
		move: false,
		content: 'roleModify?userId=' + userId
	});
	layer.title('修改用户角色', index);
	layer.full(index);
}
function msg(txt){
	layer.msg(txt);
}
