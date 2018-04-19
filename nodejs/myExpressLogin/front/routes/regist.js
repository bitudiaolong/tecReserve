var express = require('express');
var router = express.Router();
//请求跳转login页面
router.get('/regist', function(req, res, next) {
	res.render('regist');
});
module.exports = router;