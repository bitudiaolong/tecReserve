const mysqlConnect = app.get('mysqlConnect');
exports.regist = (req, res) => {
	const password = DES3.getSha1(req.body.password);
	const keys = {
		name: req.body.name,
		sex: req.body.sex,
		password: password,
		username: req.body.username
	}
	const sql = 'insert into api_user set ?';
	const trans = mysqlConnect.startTransaction();
	trans.query(sql, keys, (err, result) => {
		if(err) {
			log.error(err);
			trans.rollback();
			utils.error(res, "注册失败", "");
		} else {
			trans.commit();
			utils.success(res, "注册成功", "");
		}
	});
	trans.execute();
}