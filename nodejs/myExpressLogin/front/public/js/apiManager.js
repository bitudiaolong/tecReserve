function getProjcetApi() {
	$.ajax({
		type: "post",
		url: url + "apiSelect",
		async: false,
		data: "",
		success: function(data) {
			(data.errcode == 0) ? renderList(data.data): layer.msg(data.errmsg);
		}
	});
}
getProjcetApi();

function renderList(data) {
	var columns = [{
		"data": "id",
		"title": "id",
		"visible": false,
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			return data;
		}
	}, {
		"data": "api_name",
		"title": "项目接口文档",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			return data;
		}
	}, {
		"data": "api_status",
		"title": "文档状态",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			return(data == 0) ? "完善补充中" : "已完成";
		}
	}, {
		"data": "api_path",
		"title": "操作",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			return '<a onclick="parent.apiSelect(this);" data-url="'+data+'"><i class="fa fa-eye"></i>查看</a>' +
				'<a onclick="apiModify(' + row.api_id + ');" class="m-l"><i class="fa fa-eye"></i>更新</a>' +
				'<a onclick="apiDelete(' + row.api_id + ');" class="m-l"><i class="fa fa-edit"></i>删除</a>';
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
//创建文档
function createProjectApi() {
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '150px'],
		move: false,
		content: 'apiAdd'
	});
	layer.title('添加项目接口文档', index);
	layer.full(index);
}
//修改接口信息
function apiModify(id) {
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '150px'],
		move: false,
		content: 'apiModify?id=' + id
	});
	layer.title('修改项目信息', index);
	layer.full(index);
}
//删除文档
function apiDetele(id) {
	layer.confirm('您确定要删除该项目的接口文档吗？', {
		btn: ['确定', '取消'] //按钮
	}, function() {
		layer.msg('删除成功');
	}, function() {}, );

}