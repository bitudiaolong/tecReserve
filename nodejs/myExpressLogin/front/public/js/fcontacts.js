function getContacts(key) {
	$.ajax({
		type: "post",
		url: url + "getUserList",
		async: false,
		data: "",
		success: function(data) {
			(data.errcode == 0) ? key.success(data): layer.msg(data.errmsg);
		}
	})
}
var index = '';
var vm = new Vue({
	el: "#container",
	data: {
		nav:nav,
		list: ""
	},
	methods: {
		getContacts: function() {
			var _this = this;
			getContacts({
				success: function(data) {
					_this.list = data.data;
				}
			})
		},
		contactsDetails:function(id){
			index = layer.open({
				type: 2,
				shade: [0],
				area: ['300px', '200px'],
				move: false,
				content: 'fpersonal?id=' + id
			});
			layer.title('', index);
			layer.full(index);
		}
	}
});
vm.getContacts();

