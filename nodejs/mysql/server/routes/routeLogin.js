const express = require('express');
const router = express.Router();
const controller = require('../controller/loginController');
router.post('/login', (req, res, next) => {//post请求
	controller.login(req, res);
});
module.exports = router;