require.config({
	baseUrl: './js',
	paths: {
		'jquery': ['https://cdn.bootcss.com/jquery/3.3.1/jquery', 'jquery-2.1.0'],
		'index': 'index'
	},
	urlArgs: "bust=" + (new Date()).getTime()
})
require(['jquery', 'index'], function($) {
	$(function() {
		alert('加载成功');
	})
})