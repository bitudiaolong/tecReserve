const mysqlConnect = app.get('mysqlConnect');
//获取用户信息
exports.getUserInfo = (req, res) => {
	const userId = req.body.userId;
	const sql = 'select * from api_user where id=? limit 1';
	mysqlConnect.query(sql, userId, (err, result) => {
		if(err) {
			utils.error(res, "获取失败", "");
		} else {
			utils.success(res, "获取成功", result[0]);
		}
	});
}
//获取所有用户列表
exports.getUserList = (req, res) => {
	const sql = 'select * from api_user';
	mysqlConnect.query(sql, (err, result) => {
		if(err) {
			utils.error(res, "获取失败", "");
		} else {
			utils.success(res, "获取成功", result);
		}
	});
}
//修改用户状态，启用禁用
exports.modifyStatus = (req, res) => {
	const errmsg = (req.body.status == 0) ? "启用成功" : "禁用成功";
	const keys = {
		status: req.body.status
	}
	const sql = 'update api_user set ? where id=?';
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, [keys, req.body.id], (err, result) => {
		if(err) {
			log.error(err);
			trans.rollback();
			utils.error(res, "操作失败", "");
		} else {
			trans.commit();
			utils.success(res, errmsg, "");
		}
	});
	trans.execute();
}
//修改用户角色
exports.roleModify = (req, res) => {
	const keys = {
		role: req.body.role
	}
	const sql = 'update api_user set ? where id=?';
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, [keys, req.body.id], (err, result) => {
		if(err) {
			log.error(err);
			trans.rollback();
			utils.error(res, "修改成功", "");
		} else {
			trans.commit();
			utils.success(res, "修改失败", "");
		}
	});
	trans.execute();
}
//获取项目组下用户列表
exports.getProjectDevList = (req, res) => {
	const sql = 'SELECT u.id,u.name,u.devGroup FROM api_user u,api_projectList p,api_project_user pu WHERE u.id=pu.userId AND p.id=pu.projectId AND p.id=？';
	mysqlConnect.query(sql, [req.body.projectId], (err, result) => {
		if(err) {
			utils.error(res, "获取失败", "");
		} else {
			utils.success(res, "获取成功", result);
		}
	});
}

//修改发人员
exports.modifyDevGroup = (req, res) => {
	//	Sync(() {
	//		try {
	//			const projectId = req.body.projectId;
	//			const userId = req.body.userIdList;
	//			for(const i = 0; i < userId.length; i++) {
	//				const keys = {
	//					status: 0
	//				}
	//				const sql = 'update api_project_user set ? where userId=' + userId[i] + ' and projectId=' + projectId;
	//				const result = mysqlConnect.query.sync(mysqlConnect, sql, keys);
	//			}
	//			res.json({
	//				errcode: 0,
	//				errmsg: "分配成功",
	//				data: result
	//			});
	//		} catch(e) {
	//			res.json({
	//				errcode: 401,
	//				errmsg: "分配失败",
	//				data: ""
	//			});
	//		}
	//	})
}
//删除用户
exports.deleteUser = (req, res) => {
	const sql = 'delete from api_project_user where id=?';
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, [req.body.id], (err, result) => {
		if(err) {
			log.error(err);
			trans.rollback();
			utils.error(res, "删除成功", "");
		} else {
			trans.commit();
			utils.success(res, "删除失败", "");
		}
	});
	trans.execute();
}
//修改用户
exports.modifyUser = (req, res) => {
	const keys = {
		name: req.body.name,
		sex: req.body.sex,
		devGroup: req.body.devGroup,
		jobPosition: req.body.jobPosition,
		path: req.body.path,
		email: req.body.email,
		address: req.body.address,
		phone: req.body.phone,
		nickName: req.body.nickName
	}
	const sql = 'update api_user set ? where id=?';
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, [keys, req.body.id], (err, result) => {
		if(err) {
			log.error(err);
			trans.rollback();
			utils.error(res, "修改失败", "");
		} else {
			trans.commit();
			utils.success(res, "修改成功", "");
		}
	});
	trans.execute();
}