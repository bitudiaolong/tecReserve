设置国内镜像
cnpm config set registry https://registry.npm.taobao.org 

## 使用构建项目目录
``` bash
# 第一步：新建项目文件，导入config.js、gulpfile.js、webpack.config.js、package.json
$ copy to project
# 第二步：进入项目根目录，安装依赖
$ cd project
$ npm install
# 第三步：使用gulp构建项目目录
$ gulp init
$ npm run init
```

## gulp与webpack引入的插件
``` bash
# gulp
require('gulp') gulp核心依赖

require('mkdirp') node内置文件处理

require('gulp-rev') gulp版本控制插件

require('gulp-rev-collector') gulp版本控制替换html中引用

require('gulp-ruby-sass') gulp的css预处理器插件

require('gulp-autoprefixer') gulp的浏览器厂商私有属性前缀插件，如：-webkit、-moz、-ms、-o

require('gulp-minify-css') gulp的压缩css插件

require('gulp-imagemin') gulp的压缩图片插件

require('gulp-rename') gulp的重命名插件，如压缩index.js后重命名index.min.js

require('gulp-clean') gulp的清空文件目录插件，为了避免输出目录项目文件冗余，所以每次输入时先清空文件

require('gulp-notify') gulp的提示音插件，每个task执行完毕后，执行，是为了给出提示，可能有写复杂情况task执行缓慢，不能及时分辨出是否执行成功

require('gulp-cache') gulp的缓存插件，缓存img图片，只构建有变更的img图片

require('gulp-livereload') gulp的热更新插件，配合谷歌浏览器同名插件，实现实时更新

require('gulp-webpack') gulp的webpack引用插件，用来配置执行webpack打包

require('./webpack.config.js') webpack的配置文件

require('./config.js') gulp与webpack使用的统一项目目录结构配置

# webpack
require('webpack') webpack核心依赖

require('./config.js') gulp与webpack使用的统一项目目录结构配置

```

## gulp都做了哪些task？

``` bash
# css 
1、预处理编译scss文件
2、补全浏览器厂商私有属性前缀
3、重命名.min.css
4、控制版本，如index.JLKJ872JasdfHKJH8Yaskldj.css
5、输入版本文件的版本信息到对应的json文件中，用于后面更新html中引用的依赖

# js
1、调用webpack打包

# img
1、缓存图片，只构建有变更的图片
2、压缩图片

# html
1、索引版本信息json文件，替换html文件中的引用

# clean
1、清空dist下的css、js、img目录，只有第一次运行gulp执行一次，热更新不会执行

# default
1、运行'css', 'js', 'img', 'html'这4个task

# watch
1、热更新，看守有变更的文件，并执行上述对应的四个task
2、刷新浏览器已经打开的，当前所编辑的页面

# init
1、创建src下的js、css、img、rev文件夹
2、创建dist下的js、css、img文件夹

```

## webpack做了哪些配置？
``` bash
# 需手动配置，哪些js需要打包，entry

# babel-loader，对ES6语法做降级处理

# jshint，启用js语法检查

# UglifyJsPlugin插件压缩js代码

```