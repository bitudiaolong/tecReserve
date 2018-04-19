const express = require('express');
const router = express.Router();
const controller = require('../controller/projectController');
//添加项目
router.post('/addProject', (req, res, next) => {
	controller.addProject(req, res);
});
//查看详情
router.post('/selectProjectDetail', (req, res, next) => {
	controller.selectProjectDetail(req, res);
});
//修改项目
router.post('/modifyProject', (req, res, next) => {
	controller.modifyProject(req, res);
});
//删除项目
router.post('/deleteProject', (req, res, next) => {
	controller.deleteProject(req, res);
});
//获取项目列表
router.post('/getProjecAllList', (req, res, next) => {
	controller.getProjecAllList(req, res);
});
module.exports = router;