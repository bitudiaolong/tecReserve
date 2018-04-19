const fs = require('fs');
module.exports = {
	isError: (obj) => {
		return obj instanceof Error;
	},
	isNull: (obj) => {
		return(obj) ? false : true;
	},
	trans: (obj) => {
		const str = {
			"shortName": "项目简称",
			"fullName": "项目全称",
			"projectManager": "项目经理",
			"customer": "项目客户",
			"version": "项目版本",
			"status": "项目状态",
			"devCycle": "项目周期",
			"createTime": "立项时间",
			"endTime": "结束时间",
			"description": "项目描述",
			"level": "优先级"
		}
		return str[obj];
	},
	success: (res, errmsg, data) => {
		res.json({
			errcode: 0,
			errmsg: errmsg,
			data: data
		});
	},
	error: (res, errmsg, data) => {
		res.json({
			errcode: 401,
			errmsg: errmsg,
			data: data
		});
	},
	mkdir: (path) => {
		fs.exists(path, (exists) => {
			if(exists) {
				console.log("目录存在");
			} else {
				console.log("目录不存在");
				fs.mkdir(path, (err) => {
					if(err) {
						console.log('创建文件夹出错！');
					} else {
						console.log('文件夹-创建成功！');
					}
				});
			}
		})
	}
};