var express = require('express');
var router = express.Router();

//首页
router.get('/sindex', function(req, res, next) {
	res.render('sindex');
});
//项目管理
router.get('/sprojectManager', function(req, res, next) {
	res.render('sprojectManager');
});
//用户管理
router.get('/suserManager', function(req, res, next) {
	res.render('suserManager');
});
//角色管理
router.get('/sroleManager', function(req, res, next) {
	res.render('sroleManager');
});
//接口文档
router.get('/sapiManager', function(req, res, next) {
	res.render('sapiManager');
});
//系统设置
router.get('/systerManager', function(req, res, next) {
	res.render('systerManager');
});
//创建项目
router.get('/sprojectAdd', function(req, res, next) {
	res.render('sprojectAdd');
});
//项目详情
router.get('/sprojectDetail', function(req, res, next) {
	res.render('sprojectDetail');
});
//项目修改
router.get('/sprojectModify', function(req, res, next) {
	res.render('sprojectModify');
});
//开发团队详情
router.get('/sdevloperDetail', function(req, res, next) {
	res.render('sdevloperDetail');
});
//修改项目组内开发人员
router.get('/sdevloperModify', function(req, res, next) {
	res.render('sdevloperModify');
});
//创建接口
router.get('/sapiCreate', function(req, res, next) {
	res.render('sapiCreate');
});
//项目接口文档
router.get('/sapiText', function(req, res, next) {
	res.render('sapiText');
});
//修改用户角色
router.get('/sroleModify', function(req, res, next) {
	res.render('sroleModify');
});
//个人设置
router.get('/spersonalSet', function(req, res, next) {
	res.render('spersonalSet');
});
//修改密码
router.get('/smodifyPassword', function(req, res, next) {
	res.render('smodifyPassword');
});
//忘记密码
router.get('/sforgotPassword', function(req, res, next) {
	res.render('sforgotPassword');
});
module.exports = router;