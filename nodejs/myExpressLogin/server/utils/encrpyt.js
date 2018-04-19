const crypto = require('crypto');
const CryptoJS = require('crypto-js');
const iv = CryptoJS.enc.Utf8.parse('01234567');
const options = {
	iv,
	padding: CryptoJS.pad.Pkcs7,
	mode: CryptoJS.mode.CBC
};
module.exports = {
	/**
	 * @aes192加密模块
	 * @param str string 要加密的字符串
	 * @param secret string 要使用的加密密钥(要记住,不然就解不了密啦)
	 * @retrun string 加密后的字符串
	 * */
	getEncAse192: (str, secret) => {
		const cipher = crypto.createCipher("aes192", secret); //设置加密类型 和 要使用的加密密钥
		const enc = cipher.update(str, "utf8", "hex"); //编码方式从utf-8转为hex;
		enc += cipher.final("hex"); //编码方式从转为hex;
		return enc; //返回加密后的字符串
	},
	/**
	 * @aes192解密模块
	 * @param str string 要解密的字符串
	 * @param secret string 要使用的解密密钥(要和密码的加密密钥对应,不然就解不了密啦)
	 * @retrun string 解密后的字符串
	 * */
	getDecAse192: (str, secret) => {
		const decipher = crypto.createDecipher("aes192", secret);
		const dec = decipher.update(str, "hex", "utf8"); //编码方式从hex转为utf-8;
		dec += decipher.final("utf8"); //编码方式从utf-8;
		return dec;
	},
	/**
	 * @Hmac-sha1加密模块 (每次加密随机,不可逆)
	 * @param str string 要加密的字符串
	 * @param secret string 要使用的加密密钥
	 * @retrun string 加密后的字符串
	 * */
	getHmac: (str, secret) => {
		const buf = crypto.randomBytes(16);
		secret = buf.toString("hex"); //密钥加密；
		const Signture = crypto.createHmac("sha1", secret); //定义加密方式
		Signture.update(str);
		const miwen = Signture.digest().toString("base64"); //生成的密文后将再次作为明文再通过pbkdf2算法迭代加密；
		return miwen;
	},
	/**
	 * @sha1加密模块 (加密固定,不可逆)
	 * @param str string 要加密的字符串
	 * @retrun string 加密后的字符串
	 * */
	getSha1: (str) => {
		const sha1 = crypto.createHash("sha1"); //定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
		sha1.update(str);
		const res = sha1.digest("hex"); //加密后的值d
		return res;
	},
	/**
	 * 3des密码
	 */
	key: 'gagc#2017ABCDgagc#2017ABCD',
	/**
	 *初始向量iv必须要CryptoJS.Utf8编码parse一下。
	 *加解密用的key也需要用CryptoJS.Utf8编码parse一下。
	 *加密后的对象要调用toString方法，否则返回的是CryptoJS库中的一个对象。
	 */
	encrypt: (plaintext, key) => {
		const utf8Key = CryptoJS.enc.Utf8.parse(key);
		const encrypted = CryptoJS.TripleDES.encrypt(plaintext, utf8Key, options);
		return encrypted.toString();
	},
	/**
	 *解密时，加密后的字符串( secret )不需要做base64的decode，直接用base64 encode过的字符串即可。这点和Java相关的API不太一样。
	 *解密后的对象要用CryptoJS.Utf8 stringify一下来返回最终的字符串。
	 */
	decrypt: (secret, key) => {
		const utf8Key = CryptoJS.enc.Utf8.parse(key);
		const decrypted = CryptoJS.TripleDES.decrypt(secret, utf8Key, options);
		return CryptoJS.enc.Utf8.stringify(decrypted);
	}
}