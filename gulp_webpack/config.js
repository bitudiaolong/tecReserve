const REV = './rev/';
const SRC = './src/';
const DIST = './dist/';

const REV_CSS = './rev/css/';
const REV_JS = './rev/js/';

const SRC_CSS = SRC + 'css/';
const SRC_JS = SRC + 'js/';
const SRC_IMG = SRC + 'img/';

const DIST_CSS = DIST + 'css/';
const DIST_JS = DIST + 'js/';
const DIST_IMG = DIST + 'img/';

module.exports = {
	rev: REV,
	src: SRC,
	dist: DIST,
	dir: [
		REV_CSS,
		REV_JS,
		SRC_CSS,
		SRC_JS,
		SRC_IMG,
		DIST_CSS,
		DIST_JS,
		DIST_IMG
	],
	srcJs: SRC_JS,
	revJson: REV + '**/*.json', //匹配目录下的json文件
	js: {
		src: SRC_JS + '**/*.js', //匹配目录下js文件
		dist: DIST_JS, //匹配输出到该js目录下
		rev: REV_JS //json文件输出到该js目录下
	},
	css: {
		src: SRC_CSS + '**/*.scss', //匹配目录下scss文件
		dist: DIST_CSS, //匹配输出到该css目录下
		rev: REV_CSS //json文件输出到该css目录下
	},
	img: {
		src: SRC_IMG + '**/*', //匹配目录下img文件
		dist: DIST_IMG //匹配输出到该img目录下
	},
	html: {
		src: SRC + '**/*.html', //匹配目录下html文件
		dist: DIST + '' //匹配输出到该dist目录下
	}
}