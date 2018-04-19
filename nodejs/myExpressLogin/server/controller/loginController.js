const mysqlConnect = app.get('mysqlConnect');
const email = require('../controller/emailController');
exports.login = (req, res)=>{
	const username = req.body.username;
	const password = req.body.password;
	const sql = 'select * from api_user where account=? and password=? limit 1';
	mysqlConnect.query(sql, [username, password], (err, result) => {
		if(err) {
			log.error("查询报错:" + err);
		} else {
			log.info("查询成功:" + err);
			if(result.length) {
				email.sendEamil('gc_xuanku@gagc.tv', '测试', '这是个测试');
				const re = result[0];
				delete re.password;
				utils.success(res, "", re);
			} else {
				utils.error(res, "用户名或密码错误", "");
			}
		}
	})
}