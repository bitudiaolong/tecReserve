$(function() {})
//查看接口文档
function apiSelect(url) {
	var url = url.getAttribute("data-url");
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '150px'],
		move: false,
		content: url,
		success: function(layero, index) {
			var body = layer.getChildFrame('body', index);
			var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
			console.log(body.html()) //得到iframe页的body内容
		}
	});
	layer.title('', index);
	layer.full(index);
}
//开发团队详情
function fweeklyAdd() {
	var index = layer.open({
		type: 2,
		shade: [0],
		area: ['300px', '150px'],
		move: false,
		content: 'fweeklyAdd?userId=' + sessionStorage.userId
	});
	layer.title('开发团队详情', index);
	layer.full(index);
}