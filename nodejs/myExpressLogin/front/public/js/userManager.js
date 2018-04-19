getUserList();

function renderList(data) {
	var columns = [{
		"data": 'id',
		"title": "用户id",
		"class": "text-center",
		"width":"100px",
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
		"data": 'sex',
		"title": "性别",
		"class": "text-center",
		"width":"50px",
		"sortable": true,
		"render": function(data, type, row) {
			return data;
		}
	}, {
		"data": 'devGroup',
		"title": "部门",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			var groupStr = "";
			switch(data) {
				case 1:
					groupStr = "java组";
					break;
				case 2:
					groupStr = "HTML5组";
					break;
				case 3:
					groupStr = "测试组";
					break;
				case 4:
					groupStr = "设计组";
					break;
				case 5:
					groupStr = "架构组";
					break;
				case 6:
					groupStr = "产品组";
					break;
				case 7:
					groupStr = "安卓组";
					break;
				case 8:
					groupStr = "iOS组";
					break;
			}
			return groupStr;
		}
	}, {
		"data": "role",
		"title": "角色",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			var role = "";
			switch(data) {
				case 1:role="超级管理员"
					break;
				case 2:role="管理员"
					break;
				case 3:role="普通用户"
					break;
			}
			return role;
		}
	}, {
		"data": "status",
		"title": "状态",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			return(data == 0) ? "启用" : "禁用";
		}
	}, {
		"data": 'id',
		"title": "操作",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			var status = (row.status == 0) ? "禁用" : "启用";
			var isDisalbe = (row.status == 0) ? 1 : 0;
			return '<a onclick="userSelect(' + row.id + ');"><i class="fa fa-eye"></i>查看</a>' +
				'<a onclick="userModify(' + row.id + ');" class="m-l"><i class="fa fa-edit"></i>编辑</a>' +
				'<a onclick="modifyStatus(' + row.id + ',' + isDisalbe + ');" class="m-l"><i class="fa fa-edit"></i>' + status + '</a>';
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

function getUserList() {
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

function modifyStatus(id, status) {
	$.ajax({
		type: "post",
		url: url + "modifyStatus",
		async: false,
		data: {
			id: id,
			status: status
		},
		success: function(data) {
			if(data.errcode == 0) {
				resetTable();
				getUserList()
			} else {
				layer.msg(data.errmsg);
			}
		}
	});
}
//项目详情
function projectSelect(projectId) {
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '150px'],
		move: false,
		content: 'projectDetail?projectId=' + projectId
	});
	layer.title('修改项目信息', index);
	layer.full(index);
}
//项目修改
function projectModify(projectId) {
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '150px'],
		move: false,
		content: 'projectModify?projectId=' + projectId
	});
	layer.title('修改项目信息', index);
	layer.full(index);
}
//删除项目
function projectDetele(id) {
	layer.confirm('您确定要删除该项目？', {
		btn: ['确定', '取消'] //按钮
	}, function() {
		layer.msg('删除成功');
	}, function() {});
}
//开发团队详情
function userSelect(projectId) {
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '150px'],
		move: false,
		content: 'devloperDetail?projectId=' + projectId
	});
	layer.title('开发团队详情', index);
	layer.full(index);
}
//分配开发人员
function userModify(projectId) {
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '150px'],
		move: false,
		content: 'devloperModify?projectId=' + projectId
	});
	layer.title('分配开发人员', index);
	layer.full(index);
}