const express = require('express');
const router = express.Router();
const controller = require('../controller/frontController');
//写周报
router.post('/fweeklyAdd', (req, res, next) => {
	controller.fweeklyAdd(req, res);
});
//更新周报
router.post('/fweeklyUpdate', (req, res, next) => {
	controller.fweeklyUpdate(req, res);
});
//更新回显
router.post('/fweeklyUpdateCallback', (req, res, next) => {
	controller.fweeklyUpdateCallback(req, res);
});
//查看周报
router.post('/fweeklySelect', (req, res, next) => {
	controller.fweeklySelect(req, res);
});
//添加日程
router.post('/fcalendarAdd', (req, res, next) => {
	controller.fcalendarAdd(req, res);
});
//删除日程
router.post('/fcalendarDelete', (req, res, next) => {
	controller.fcalendarDelete(req, res);
});
//更新日程
router.post('/fcalendarUpdate', (req, res, next) => {
	controller.fcalendarUpdate(req, res);
});
//查看日程
router.post('/fcalendarSelect', (req, res, next) => {
	controller.fcalendarSelect(req, res);
});
module.exports = router;