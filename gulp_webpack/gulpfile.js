// 载入外挂
const gulp = require('gulp')
const mkdirp = require('mkdirp')
const rev = require('gulp-rev')
const revCollector = require('gulp-rev-collector')
const sass = require('gulp-ruby-sass')
const autoprefixer = require('gulp-autoprefixer')
const minifycss = require('gulp-minify-css')
const imagemin = require('gulp-imagemin')
const rename = require('gulp-rename')
const clean = require('gulp-clean')
const notify = require('gulp-notify')
const cache = require('gulp-cache')
const livereload = require('gulp-livereload')
const webpack = require('gulp-webpack')
const webpackConfig = require('./webpack.config.js')
const config = require('./config.js')

//css处理，sass编译、浏览器厂商属性前缀、重命名.min、压缩文件、版本号修改
gulp.task('css', function() {
	return sass(config.css.src)
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(rev())
		.pipe(gulp.dest(config.css.dist))
		.pipe(rev.manifest())
		.pipe(gulp.dest(config.css.rev))
		.pipe(notify({
			message: 'css task complete'
		}));
});
// js处理，调用webpack打包处理、版本号修改
gulp.task('js', function(callback) {
	return gulp.src(config.js.src)
		.pipe(webpack(webpackConfig))
		.pipe(rev())
		.pipe(gulp.dest(config.js.dist))
		.pipe(rev.manifest())
		.pipe(gulp.dest(config.js.rev))
		.pipe(notify({
			message: 'js task complete'
		}));
});
// 图片处理，换成img，构建有变更的img、压缩
gulp.task('img', function() {
	return gulp.src(config.img.src)
		.pipe(cache(imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		})))
		.pipe(gulp.dest(config.img.dist))
		.pipe(notify({
			message: 'Images task complete'
		}));
});
// html处理
gulp.task('html', function() {
	return gulp.src([config.revJson, config.html.src])
		.pipe(revCollector({
			replaceReved: true, //允许替换, 已经被替换过的文件
			dirReplacements: {
				'css': config.css.dist,
				'js': config.js.dist
			}
		}))
		.pipe(gulp.dest(config.html.dist))
		.pipe(notify({
			message: 'html task complete'
		}));
});
// 清理dist目录
gulp.task('clean', function() {
	return gulp.src([config.css.dist, config.js.dist, config.img.dist], {
			read: false
		})
		.pipe(clean());
});
// 预设任务
gulp.task('default', ['clean'], function() {
	gulp.start('css', 'js', 'img', 'html');
});

gulp.task('watch', function() {

	// 看守所有.scss档
	gulp.watch(config.css.src, ['css']);

	// 看守所有.js档
	gulp.watch(config.js.src, ['js']);

	// 看守所有图片档
	gulp.watch(config.img.src, ['img']);

	//看守html
	gulp.watch(config.html.src, ['html']);

	livereload.listen();
	gulp.watch([config.html.dist + '**']).on('change', livereload.changed);

});
//构建项目目录
gulp.task('init', function() {
	let dirs = config.dir;
	dirs.forEach(function(dir) {
		console.log(dir);
		mkdirp.sync(dir);
	});
});
