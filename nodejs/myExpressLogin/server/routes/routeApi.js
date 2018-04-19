const express = require('express');
const router = express.Router();
const controller = require('../controller/apiController');
//修改接口文档
router.post('/apiModify', (req, res, next) => {
	controller.apiModify(req, res);
});
//删除接口文档
router.post('/apiDelete', (req, res, next) => {
	controller.apiDelete(req, res);
});
//添加接口文档
router.post('/apiAdd', (req, res, next) => {
	controller.apiAdd(req, res);
});
//接口列表
router.post('/apiSelect', (req, res, next) => {
	controller.apiAelect(req, res);
});
module.exports = router;