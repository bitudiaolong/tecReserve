const express = require('express');
const router = express.Router();
const controller = require('../controller/registController');
router.post('/regist', (req, res, next) => {
	if(!req.body.username) {
		utils.success(res, "用户名不能为空", "");
		return;
	} else if(!req.body.password) {
		utils.success(res, "密码不能为空", "");
		return;
	} else if(!req.body.name) {
		utils.success(res, "用户的名字不能为空", "");
		return;
	}
	controller.regist(req, res);
});

module.exports = router;