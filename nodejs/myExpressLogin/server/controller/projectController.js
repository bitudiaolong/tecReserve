const mysqlConnect = app.get('mysqlConnect');
module.exports = {
	addProject: (req, res) => {
		for(var key in req.body) {
			if(!(req.body)[key]) {
				utils.error(res, utils.trans(key) + "必填项不能为空", "");
			}
		}
		const sql = 'insert into api_projectList set ?';
		const trans = mysqlConnect.startTransaction();
		trans.query(sql, req.body, (err, result) => {
			if(err) {
				log.error(err);
				trans.rollback();
				utils.error(res, "创建失败", "");
			} else {
				trans.commit();
				utils.success(res, "创建成功", "");
			}
		});
		trans.execute();
	},
	modifyProject: (req, res) => {
		for(var key in req.body) {
			if(!(req.body)[key]) {
				utils.error(res, utils.trans(key) + "必填项不能为空", "");
			}
		}
		const keys = {
			fullName: req.body.fullName,
			shortName: req.body.shortName,
			projectManager: req.body.projectManager,
			customer: req.body.customer,
			version: req.body.version,
			status: req.body.status,
			description: req.body.createTime,
			level: req.body.level,
			createTime: req.body.createTime,
			endTime: req.body.endTime
		}
		const sql = 'update api_projectList set ? where id=?';
		const trans = mysqlConnect.startTransaction();
		trans.query(sql, [keys, req.body.projectId], (err, result) => {
			if(err) {
				log.error(err);
				trans.rollback();
				utils.error(res, "修改失败", "");
			} else {
				trans.commit();
				utils.success(res, "修改成功", result[0]);
			}
		});
		trans.execute();
	},
	deleteProject: (req, res) => {
		let sql = 'SELECT role FROM api_user where id=?';
		mysqlConnect.query(sql, req.body.userId, (err, result) => {
			if(err) {
				utils.error(res, "鉴权失败", "");
			} else {
				console.log(result);
				if(result > 2) {
					utils.error(res, "权限不足，请联系管理员", "");
				}
			}
		});
		let sqlu = 'update api_projectList set isDelete=1 where id=?';
		const trans = mysqlConnect.startTransaction();
		trans.query(sqlu, req.body.projectId, (err, result) => {
			if(err) {
				log.error(err);
				trans.rollback();
				utils.error(res, "删除失败", "");
			} else {
				trans.commit();
				utils.success(res, "删除成功", "");
			}
		});
		trans.execute();

	},
	getProjecAllList: (req, res) => {
		const userId = req.body.userId;
		let sql = (!userId) ? 'SELECT * FROM api_projectList where isDelete=0' : 'SELECT apl.* FROM api_projectList apl,api_project_user apu where apl.id=apu.projectId and apl.isDelete=0 and apu.userId=' + userId;
		mysqlConnect.query(sql, (err, result) => {
			if(err) {
				utils.error(res, "获取失败", "");
			} else {
				utils.success(res, "获取成功", result);
			}
		});
	},
	selectProjectDetail: (req, res) => {
		const sql = 'select * from api_projectList where id=? and isDelete=0';
		mysqlConnect.query(sql, [req.body.projectId], (err, result) => {
			if(err) {
				utils.error(res, "获取失败", "");
			} else {
				utils.success(res, "获取成功", result[0]);
			}
		});
	}
}

//删除项目
//deleteProject
//获取所有项目列表

//获取项目详情
//selectProjectDetail