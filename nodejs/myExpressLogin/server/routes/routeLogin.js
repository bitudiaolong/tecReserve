const express = require('express');
const router = express.Router();
const controller = require('../controller/loginController');
router.post('/login', (req, res, next) => {
	controller.login(req, res);
});
module.exports = router;