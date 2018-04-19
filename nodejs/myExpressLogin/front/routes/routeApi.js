var express = require('express');
var router = express.Router();

app.use('/', require('./login'));
app.use('/', require('./regist'));
app.use('/', require('./manager'));
app.use('/', require('./front'));
module.exports = router;