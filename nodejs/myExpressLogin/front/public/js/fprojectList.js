function getProjectList(userId, callback) {
	$.ajax({
		type: "post",
		url: url + "getProjecAllList",
		async: false,
		data: {
			userId: userId
		},
		success: function(data) {
			(data.errcode == 0) ? callback(data.data): layer.msg(data.errmsg);
		}
	});
}

function selectProjectDetail(projectId) {
	$.ajax({
		type: "post",
		url: url + "selectProjectDetail",
		async: false,
		data: {
			projectId: projectId
		},
		success: function(data) {}
	});
}

function deleteProject(projectId) {
	$.ajax({
		type: "post",
		url: url + "deleteProject",
		async: false,
		data: {
			userId: sessionStorage.userId,
			projectId: projectId
		},
		success: function(data) {
			layer.msg(data.errmsg);
		}
	});
}

function renderList(data) {
	var columns = [{
		"data": 'status',
		"title": "状态",
		"class": "project-status",
		"sortable": true,
		"render": function(data, type, row) {
			return '<span class="label label-primary">' + data + '</span>';;
		}
	}, {
		"data": 'fullName',
		"title": "项目全称",
		"class": "project-title",
		"sortable": true,
		"render": function(data, type, row) {
			return '<a onclick="detail(' + row.id + ')">' + data + '</a><br/>' +
				'<small>创建于' + row.createTime + '</small>';
		}
	}, {
		"data": null,
		"title": "完成进度",
		"class": "project-completion",
		"sortable": true,
		"render": function(data, type, row) {
			return '<small>当前进度：48%</small><div class="progress progress-mini"><div style="width: 48%;" class="progress-bar"></div></div>';
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
		"data": 'projectManager',
		"title": "项目经理",
		"class": "text-center",
		"sortable": true,
		"render": function(data, type, row) {
			return '<a href="fprojects">' + data + '</a>';
		}
	}, {
		"data": 'id',
		"title": "操作",
		"class": "text-center",
		"sortable": true,
		"width": "",
		"render": function(data, type, row, meta) {
			var isDisplay = (Number(sessionStorage.role) > 2) ? 'display:none' : '';
			return '<a onclick="detail(' + data + ')" class="btn btn-white btn-xs m-r"><i class="fa fa-eye"></i></a>' +
				'<a onclick="modify(' + data + ')" class="btn btn-white btn-xs"><i class="fa fa-pencil"></i></a>' +
				'<a onclick="deletes(' + data + ')" class="btn btn-white btn-xs m-l" style="' + isDisplay + '"><i class="fa fa-trash-o"></i></a>';
		}
	}]
	$('.dataTables-example').DataTable({
		"data": data,
		"searching": true,
		"bLengthChange": true,
		"ordering": false,
		"paging": true,
		"info": true,
		"dom": '<"hide"f>rt<"bottom"lp><"text-center"i><"clear">',
		"aoColumns": columns,
		"fnDrawCallback": function() {},
	});
}
//重置厂商table
function resetTable() {
	dttable = $('.dataTables-example').dataTable();
	dttable.fnClearTable();
	dttable.fnDestroy();
}
var vm = new Vue({
	el: "#container",
	data: {
		nav: nav,
		list: "",
		search: "",
		userId: sessionStorage.userId
	},
	methods: {
		init: function() {
			$('.external-event').removeClass('navy-bg');
			$('#allProject').addClass('navy-bg');
			getProjectList('', function(data) {
				renderList(data);
			});
		},
		look: function(userId,id) {
			$('.external-event').removeClass('navy-bg');
			$(id).addClass('navy-bg');
			getProjectList(userId, function(data) {
				resetTable();
				renderList(data);
			});
		},
		searchBtn: function() {
			$('label .input-sm').val(this.search).keyup();
		}
	}
});
vm.init();

function detail(projectId) {
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '200px'],
		move: false,
		content: 'fprojectDetail?projectId=' + projectId
	});
	layer.title("", index);
	layer.full(index);
}

function deletes(projectId) {
	layer.confirm('您确定要删除该项目？', {
		btn: ['删除', '取消'] //按钮
	}, function() {
		deleteProject(projectId);
		vm.look('');
	});
}

function modify(projectId) {
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '200px'],
		move: false,
		content: 'fprojectModify?projectId=' + projectId
	});
	layer.title("", index);
	layer.full(index);
}

function add() {
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '200px'],
		move: false,
		content: 'fprojectAdd'
	});
	layer.title("", index);
	layer.full(index);
}