const qiniu = require('qiniu');
const accessKey = 'NViRxaPRV5rtqfYSD6b8N3myf_Hf3KsrurqfUMPJ';
const secretKey = 'hT2DqaqX5rslxy3eBW23c4dqC1NZwJhGimis5fcl';
const putPolicy = new qiniu.rs.PutPolicy({
	scope: 'api-img'
});
exports.getUtoken = (req, res) => {
	let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
	let uploadToken = putPolicy.uploadToken(mac);
	res.send({
		uptoken: uploadToken
	});
}