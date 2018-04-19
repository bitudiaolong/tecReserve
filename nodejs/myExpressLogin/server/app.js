const express = require('express'),
	app = express(),
	log = require('./utils/log4js'),
	DES3 = require('./utils/encrpyt'),
	utils = require('./utils/utils'),
	qiniu = require('./utils/qiniu'),
	path = require('path'),
	favicon = require('serve-favicon'),
	ejs = require('ejs'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');
global.log = log;
global.app = app;
global.DES3 = DES3;
global.utils = utils;
global.qiniu = qiniu;
app.use(bodyParser.json({
	limit: '2mb'
}));
app.use(bodyParser.urlencoded({
	extended: true,
	parameterLimit: '2000'
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
//app.use((req, res, next) => {
//	try {
//		req.cookies.user = JSON.parse(req.cookies.user);
//	} catch(ex) {}
//	next();
//});
const index = require('./routes/index');
module.exports = app;