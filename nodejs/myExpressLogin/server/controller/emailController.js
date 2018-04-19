const CONFIG = require('../config')
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport');
const smtp = nodemailer.createTransport(smtpTransport({
	service: CONFIG.EMAIL.SERVER,
	auth: {
		user: CONFIG.EMAIL.USER,
		pass: CONFIG.EMAIL.PASS
	}
}));
/**
 * 调用方法:sendMail('amor_zhang@qq.com','这是测试邮件', 'Hi Amor,这是一封测试邮件');
 * @param {String} recipient 收件人amor_zhang@qq.com
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
exports.sendEamil = (recipient, subject, html) => {
	smtp.sendMail({
		from: CONFIG.EMAIL.USER,
		to: recipient,
		subject: subject,
		html: html
	}, (error, response) => {
		if(error) {
			console.log(error);
		}
		console.log('发送成功')
	});
};