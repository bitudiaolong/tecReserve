const express = require('express'),
	app = express(),
	path = require('path'),
	favicon = require('serve-favicon'),
	ejs = require('ejs'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');
global.app = app;
app.use(bodyParser.json({
	limit: '2mb'
}));
app.use(bodyParser.urlencoded({
	extended: true,
	parameterLimit: '2000'
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const index = require('./routes/index');
module.exports = app;