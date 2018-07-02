const webpack = require('webpack')
const config = require('./config.js')
let SRC_JS = config.srcJs;
module.exports = {
	entry: {
		index: SRC_JS + 'index.js',
		main: SRC_JS + 'main.js'
	},
	output: {
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}]
	},
	jshint: {
		// 查询jslint配置项，请参考 http://www.jshint.com/docs/options/
		// 例如
		camelcase: true,
		//jslint的错误信息在默认情况下会显示为warning（警告）类信息
		//将emitErrors参数设置为true可使错误显示为error（错误）类信息
		emitErrors: false,
		//jshint默认情况下不会打断webpack编译
		//如果你想在jshint出现错误时，立刻停止编译
		//请设置failOnHint参数为true
		failOnHint: false,

		// 自定义报告函数
		reporter: function(errors) {}
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
		}), //压缩和丑化

		new webpack.ProvidePlugin({
			$: 'jquery'
		}), //直接定义第三方库

		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: "commons.js",
			minChunks: 2,
			chunks: ["index", "main"]
		}) //定义公共chunk

	]
};