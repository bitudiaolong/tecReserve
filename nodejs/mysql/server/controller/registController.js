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
			res.json({
				errcode: 500,
				errmsg: '注册失败',
				data: ''
			});
		} else {
			trans.commit();
			res.json({
				errcode: 0,
				errmsg: '注册成功',
				data: ''
			});
		}
	});
	trans.execute();
}