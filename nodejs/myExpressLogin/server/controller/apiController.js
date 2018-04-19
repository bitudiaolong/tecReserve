const mysqlConnect = app.get('mysqlConnect');

exports.apiModify = (req, res) => {
	const keys = {
		name: req.body.name,
		path: req.body.path,
		status: req.body.status
	}
	const sql = 'update api_api set ? where id=?';
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
exports.apiDelete = (req, res) => {
	const keys = {
		api_disabled: 1
	}
	const sql = 'update api_api set ? where id=?';
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, [keys, req.body.id], (err, result) => {
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
}
exports.apiAdd = (req, res) => {
	const keys = {
		api_name: req.body.apiName,
		api_type: req.body.apiType,
		api_path: req.body.apiPath,
		api_parame: req.body.apiParame
	}
	const sql = 'insert into api_project_api_list set ?';
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, [keys, req.body.id], (err, result) => {
		if(err) {
			log.error(err);
			trans.rollback();
			utils.error(res, "添加失败", "");
		} else {
			trans.commit();
			utils.success(res, "添加成功", "");
		}
	});
	trans.execute();
}
exports.apiSelect = (req, res) => {
	const sql = 'select * from api_api where api_disabled=0';
	mysqlConnect.query(sql, (err, result) => {
		if(err) {
			utils.error(res, "获取失败", "");
		} else {
			utils.success(res, "获取成功", result);
		}
	});
}