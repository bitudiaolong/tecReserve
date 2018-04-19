$(function() {
	var domain = 'http://oz2ruatry.bkt.clouddn.com/';
	//	var uptoken_url = url + 'getUtoken';
	var uptoken_url = '/getUtoken';
	var uptoken = "NViRxaPRV5rtqfYSD6b8N3myf_Hf3KsrurqfUMPJ:GwhxZYvkKwcXHIGD74ANmmEaFDw=:eyJzY29wZSI6ImFwaS1pbWciLCJkZWFkbGluZSI6MTUxMDI5Njg2N30=";
	var uploader = Qiniu.uploader({
		disable_statistics_report: false, // 禁止自动发送上传统计信息到七牛，默认允许发送
		runtimes: 'html5,flash,html4', // 上传模式,依次退化
		browse_button: 'select', // 上传选择的点选按钮，**必需**
		//		uptoken: uptoken,
		uptoken_url: uptoken_url, // Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）
		get_new_uptoken: true, // 设置上传文件的时候是否每次都重新获取新的 uptoken
		// downtoken_url: '/downtoken',
		// Ajax请求downToken的Url，私有空间时使用,JS-SDK 将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
		unique_names: false, // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
		save_key: false, // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `save_key`，则开启，SDK在前端将不对key进行任何处理
		domain: domain, // bucket 域名，下载资源时用到，如：'http://xxx.bkt.clouddn.com/' **必需**
		container: 'container', // 上传区域 DOM ID，默认是 browser_button 的父元素，
		multi_selection: true,
		filters: {
			max_file_size: '100mb',
			prevent_duplicates: false,
			mime_types: [{
				title: "Image files",
				extensions: "jpg,gif,png"
			}]
		},
		flash_swf_url: 'path/of/plupload/Moxie.swf', //引入 flash,相对路径
		max_retries: 3, // 上传失败最大重试次数
		dragdrop: false, // 开启可拖曳上传
		drop_element: 'container-upload', // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
		chunk_size: '4mb', // 分块上传时，每块的体积
		auto_start: true, // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
		init: {
			'FilesAdded': function(up, files) {
				console.info('1--:FilesAdded');
			},
			'FileFiltered': function(up, file) {
				console.info('2--:FileFiltered');
			},
			'BeforeUpload': function(up, file) {
				console.info('3--:BeforeUpload');
			},
			'BeforeChunkUpload': function(up, file) {
				console.info('4--:BeforeChunkUpload');
			},
			'UploadProgress': function(up, file) {
				console.info('5--:UploadProgress');
			},
			'FileUploaded': function(up, file, info) {
				console.info('6--:FileUploaded');
			},
			'UploadComplete': function() {
				console.info('8--:UploadComplete');
			},
			'Key': function(up, file) {
				var d = new Date();
				return file.name;
			},
			'Error': function(up, err) {
				console.info('7--:Error');
			}
		}
	});
	//绑定文件添加进队列事件
	uploader.bind('FilesAdded', function(up, files) {});
	$('#upLoad').on('click', function() {
		uploader.start();
	})
});