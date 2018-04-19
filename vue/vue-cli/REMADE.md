##gitHub地址
####vue-cli：https://github.com/vuejs/vue-cli
##一、安装
####npm install -g @vue/cli      全局安装vue/cli手脚架
###or
####yarn global add @vue/cli     或者使用yarn安装
###安装完毕后，先进入自己的工作空间，例如cd e:/workpace/.../
####vue create my-project        my-project为手脚架帮你创建项目的名字
##二、运行
####npm run serve                run执行的serve命令为package.json中script配置下的命令
####local：http://localhost:8080/       本地请求
####network：http://[本机ip]:8080/      局域网请求
##三、注意
###（1）、单文件组件使用ES6语法，Hbuilder加载验证或报错
####第一步：右键该项目——引入框架语法提示——选择ECMAScript2016——应用
####第二步：右键该项目——扫描索引——重新建立索引——OK了
###（2）、git上拉取的项目没有开发环境依赖等，node_modules过滤掉，不传到git上的
####第一步：cd 进入该项目package.json所在目录下
####第二步：npm install             包管理器会根据.json的配置文件下载相应的依赖
###（3）、包管理器npm如何安装
####第一步：安装nodejs即可，版本为偶数即可，是稳定版
###（4）、使用npm命令安装下载文件时，失败，或连接超时等问题，原因需要翻墙，改使用淘宝镜像
####第一步：npm install -g cnpm --registry=https://registry.npm.taobao.org
####第二步：安装成功后，上述过程使用带有npm install ...命令时，换成cnpm install ...即可