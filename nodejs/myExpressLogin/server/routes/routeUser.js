const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
router.get('/getUtoken', (req, res, next) => {
	qiniu.getUtoken(req, res);
});
//获取用户列表
router.post('/getUserInfo', (req, res, next) => {
	controller.getUserInfo(req, res);
});
//获取用户列表
router.post('/getUserList', (req, res, next) => {
	controller.getUserList(req, res);
});
//禁用用户
router.post('/modifyStatus', (req, res, next) => {
	controller.modifyStatus(req, res);
});
//获取项目组开发人员列表
router.post('/getProjectDevList', (req, res, next) => {
	controller.getProjectDevList(req, res);
});
//用户角色修改
router.post('/roleModify', (req, res, next) => {
	controller.roleModify(req, res);
});
//删除用户
router.post('/deleteUser', (req, res, next) => {
	controller.deleteUser(req, res);
});
//修改用户信息
router.post('/modifyUser', (req, res, next) => {
	controller.modifyUser(req, res);
});
//修改用户信息
router.post('/modifyDevGroup', (req, res, next) => {
	controller.modifyDevGroup(req, res);
});
module.exports = router;