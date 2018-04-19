$(function() {
	function getProjcet() {
		$.ajax({
			type: "post",
			url: url + "getProjectList",
			async: false,
			data: {
				userId: sessionStorage.userId
			},
			success: function(data) {
				(data.errcode == 0) ? renderList(data.data): layer.msg(data.errmsg);
			}
		});
	}
	getProjcet();

	function renderList(data) {
		var columns = [{
			"data": 'id',
			"title": "项目ID",
			"class": "text-center",
			"sortable": true,
			"render": function(data, type, row) {
				return data;
			}
		}, {
			"data": 'shortName',
			"title": "项目简称",
			"class": "text-center",
			"sortable": true,
			"render": function(data, type, row) {
				return data;
			}
		}, {
			"data": 'fullName',
			"title": "项目全称",
			"class": "text-center",
			"sortable": true,
			"render": function(data, type, row) {
				return data;
			}
		}, {
			"data": 'projectManager',
			"title": "项目经理",
			"class": "text-center",
			"sortable": true,
			"render": function(data, type, row) {
				return data;
			}
		}, {
			"data": 'customer',
			"title": "客户",
			"class": "text-center",
			"sortable": true,
			"render": function(data, type, row) {
				return data;
			}
		}, {
			"data": 'version',
			"title": "版本",
			"class": "text-center",
			"sortable": true,
			"render": function(data, type, row) {
				return data;
			}
		}, {
			"data": 'createTime',
			"title": "立项时间",
			"class": "text-center",
			"sortable": true,
			"render": function(data, type, row) {
				return data;
			}
		}, {
			"data": 'devCycle',
			"title": "开发周期",
			"class": "text-center",
			"sortable": true,
			"render": function(data, type, row) {
				return data;
			}
		}, {
			"data": 'id',
			"title": "开发团队",
			"class": "text-center",
			"sortable": true,
			"render": function(data, type, row) {
				return '<a onclick="userSelect(' + data + ');"><i class="fa fa-eye"></i>查看</a>' +
					'<a onclick="userModify(' + data + ');" class="m-l"><i class="fa fa-edit"></i>分配</a>';
			}
		}, {
			"data": 'id',
			"title": "操作",
			"class": "text-center",
			"sortable": true,
			"width": "",
			"render": function(data, type, row, meta) {
				return '<a onclick="projectSelect(' + data + ');"><i class="fa fa-eye"></i>查看</a>' +
					'<a onclick="projectModify(' + data + ');" class="m-l"><i class="fa fa-edit"></i>修改</a>' +
					'<a onclick="projectDetele()" class="m-l"><i class="fa fa-trash"></i>删除</a>';
			}
		}]
		$('.dataTables-example').DataTable({
			"data": data,
			"searching": false,
			"bLengthChange": false,
			"ordering": false,
			"paging": true,
			"info": true,
			"aoColumns": columns,
			"fnDrawCallback": function() {},
		});
	}
})
//创建项目
function createProject() {
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '150px'],
		move: false,
		content: 'projectAdd'
	});
	layer.title('修改项目信息', index);
	layer.full(index);
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