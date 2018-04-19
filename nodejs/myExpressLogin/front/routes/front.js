var express = require('express');
var router = express.Router();
var qiniu = require('./qiniu');
router.get('/getUtoken', function(req, res, next) {
	qiniu.getUtoken(req, res);
});
//首页
router.get('/findex', function(req, res, next) {
	res.render('findex');
});
//日程
router.get('/fcalendar', function(req, res, next) {
	res.render('fcalendar');
});
//联系人
router.get('/fcontacts', function(req, res, next) {
	res.render('fcontacts');
});
//个人资料
router.get('/fpersonal', function(req, res, next) {
	res.render('fpersonal');
});
//个人设置
router.get('/fpersonalSet', function(req, res, next) {
	res.render('fpersonalSet');
});
//我自己
router.get('/fpersonalMy', function(req, res, next) {
	res.render('fpersonalMy');
});
//项目详情
router.get('/fprojectDetail', function(req, res, next) {
	res.render('fprojectDetail');
});
//项目列表
router.get('/fprojectList', function(req, res, next) {
	res.render('fprojectList');
});
//项目修改
router.get('/fprojectModify', function(req, res, next) {
	res.render('fprojectModify');
});
//项目创建
router.get('/fprojectAdd', function(req, res, next) {
	res.render('fprojectAdd');
});
//周报
router.get('/fweekly', function(req, res, next) {
	res.render('fweekly');
});
//写周报
router.get('/fweeklyAdd', function(req, res, next) {
	res.render('fweeklyAdd');
});
//更新周报
router.get('/fweeklyUpdate', function(req, res, next) {
	res.render('fweeklyUpdate');
});
module.exports = router;