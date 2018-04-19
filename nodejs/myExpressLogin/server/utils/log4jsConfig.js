module.exports = {
	appenders: {
		console: {
			type: 'console'
		},
		error: {
			type: 'dateFile',
			filename: 'logs/error/error.log',
			pattern: '.yyyy-MM-dd-hh',
			compress: false,
			keepFileExt: true
		},
		info: {
			type: 'dateFile',
			filename: 'logs/info/info.log',
			pattern: '.yyyy-MM-dd-hh',
			compress: false,
			keepFileExt: true
		},
		warn: {
			type: 'dateFile',
			filename: 'logs/warn/warn.log',
			pattern: '.yyyy-MM-dd-hh',
			compress: false,
			keepFileExt: true
		}
	},
	categories: {
		default: {
			appenders: ['console', 'error', 'info', 'warn'],
			level: 'debug'
		},
		error: {
			appenders: ['console', 'error'],
			level: 'error'
		},
		info: {
			appenders: ['console', 'info'],
			level: 'info'
		},
		warn: {
			appenders: ['console', 'warn'],
			level: 'warn'
		}
	}
}