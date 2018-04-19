var express = require('express');
var router = express.Router();

//请求根目录跳转login页面
router.get('/', function(req, res, next) {
	res.redirect('login');
});
//请求跳转login页面
router.get('/login', function(req, res, next) {
	res.render('login');
});
module.exports = router;