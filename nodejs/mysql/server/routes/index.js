const CONFIG = require('../config');//数据库链接配置
const mysql = require('mysql');
const mysql_connect = mysql.createConnection(CONFIG.MYSQL_DB);
const queues = require('mysql-queues');//事务
const DEBUG = true;
mysql_connect.connect((err) => {
	if(err) {
		console.log('mysql数据库连接错误: ' + mysql_connect);
	} else {
		console.log('mysql数据库连接成功,threadId: ' + mysql_connect.threadId);
	}
});
queues(mysql_connect, DEBUG);
global.app.set('mysqlConnect', mysql_connect);
app.all('/api/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
app.use('/api', require('./routeLogin')); //登陆
app.use('/api', require('./routeRegist')); //注册
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});
app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.render('error');
});