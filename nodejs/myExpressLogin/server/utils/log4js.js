const log4js = require('log4js');
log4js.configure(require('./log4jsConfig'));
const logger = (type) => {
	return log4js.getLogger(type);
}
exports.debug = (app) => {
	logger('debug').debug(app);
}
exports.info = (app) => {
	logger('info').info(app);
}
exports.warn = (app) => {
	logger('warn').warn(app);
}
exports.error = (app) => {
	logger('error').error(app);
}
exports.log = () => {
	return log4js.connectLogger(logger('debug'), {
		level: 'auto'
	});
}