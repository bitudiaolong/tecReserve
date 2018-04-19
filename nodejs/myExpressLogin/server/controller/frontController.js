const mysqlConnect = app.get('mysqlConnect');
//周报添加
exports.fweeklyAdd = (req, res) => {
	const keys = {
		userId: req.body.userId,
		title: req.body.title,
		content: req.body.content,
		devGroup: req.body.devGroup
	}
	const sql = 'insert into api_weekly set ?';
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, keys, (err, result) => {
		if(err) {
			trans.rollback();
			utils.error(res, "添加失败", "");
		} else {
			trans.commit();
			utils.success(res, "添加成功", result);
		}
	});
	trans.execute();
}
//周报更新
exports.fweeklyUpdate = (req, res) => {
	const keys = {
		title: req.body.title,
		content: req.body.content
	}
	const sql = 'update api_weekly set ? where id=?';
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, [keys, req.body.id], (err, result) => {
		if(err) {
			trans.rollback();
			utils.error(res, "更新失败", "");
		} else {
			trans.commit();
			utils.success(res, "更新成功箭头", result);
		}
	});
	trans.execute();
}
//周报更新回填
exports.fweeklyUpdateCallback = (req, res) => {
	const sql = 'select * from api_weekly where id=?';
	mysqlConnect.query(sql, [req.body.id], (err, result) => {
		if(err) {
			utils.error(res, "获取失败", "");
		} else {
			utils.success(res, "获取成功", result[0]);
		}
	});
}
//周报查看
exports.fweeklySelect = (req, res) => {
	const sql = 'select * from api_weekly where userId=? and devGroup=?';
	mysqlConnect.query(sql, [req.body.userId, req.body.devGroup], (err, result) => {
		if(err) {
			utils.error(res, "获取失败", "");
		} else {
			utils.success(res, "获取成功", result);
		}
	});
}
//添加日程
exports.fcalendarAdd = (req, res) => {
	const keys = {
		title: req.body.title,
		allDay: req.body.allDay,
		start: req.body.start,
		userId: req.body.userId
	}
	const sql = 'insert into api_calendar set ?';
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, keys, (err, result) => {
		if(err) {
			console.log(err);
			trans.rollback();
			utils.error(res, "添加失败", "");
		} else {
			trans.commit();
			utils.success(res, "添加成功", result);
		}
	});
	trans.execute();
}
//删除日程
exports.fcalendarDelete = (req, res) => {
	const keys = {
		status: 1
	}
	const sql = 'update api_calendar set ? where id=?';
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, [keys, req.body.id], (err, result) => {
		if(err) {
			trans.rollback();
			utils.error(res, "删除失败", "");
		} else {
			trans.commit();
			utils.success(res, "删除成功", result);
		}
	});
	trans.execute();
}
//更新日程
exports.fcalendarUpdate = (req, res) => {
	const keys = {
		start: req.body.start,
	}
	const sql = 'update api_calendar set ? where id=' + req.body.id;
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, keys, (err, result) => {
		if(err) {
			trans.rollback();
			utils.error(res, "更新失败", "");
		} else {
			trans.commit();
			utils.success(res, "更新成功", result);
		}
	});
	trans.execute();
}
//查看日程
exports.fcalendarSelect = (req, res) => {
	const sql = 'select * from api_calendar where status=0';
	mysqlConnect.query(sql, [0],  (err, result) => {
		if(err) {
			utils.error(res, "获取失败", "");
		} else {
			utils.success(res, "获取成功", result);
		}
	});
}