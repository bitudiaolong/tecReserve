const mysqlConnect = app.get('mysqlConnect');
exports.login = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const sql = 'select * from api_user where account=? and password=? limit 1';
	mysqlConnect.query(sql, [username, password], (err, result) => {
		if(err) {
			console.log("查询报错:" + err);
		} else {
			console.log("查询成功:" + err);
			if(result.length) {
				const re = result[0];
				delete re.password;
				res.json({
					errcode: 0,
					errmsg: errmsg,
					data: re
				});
			} else {
				res.json({
					errcode: 500,
					errmsg: '用户名或密码错误',
					data: ''
				});
			}
		}
	})
}