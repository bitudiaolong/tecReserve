## gitHub地址
> vue-cli：https://github.com/vuejs/vue-cli
## 一、安装
1. 全局安装vue/cli手脚架
``` bash
npm install -g @vue/cli      
```
2. 安装完毕后，进入工作空间
``` bash
cd e:/workpace/.../  
```
3. 构建项目
``` bash
vue create my-project
```
4. 运行
``` bash
npm run serve
```
5. 浏览器打开
>本地请求http://localhost:8080/   
>局域网请求http://[本机ip]:8080/  

## 二、注意
1. 单文件组件使用ES6语法，Hbuilder加载验证或报错  
``` bash
#第一步：右键该项目——引入框架语法提示——选择ECMAScript2016——应用  

#第二步：右键该项目——扫描索引——重新建立索引——OK了  
```
2. git上拉取的项目没有开发环境依赖等，node_modules过滤掉，不传到git上的  
``` bash
# 第一步：cd 进入该项目package.json所在目录下  
cd my-project

# 第二步：包管理器会根据.json的配置文件下载相应的依赖  
cnpm install
```
3. 安装淘宝镜像
``` bash
# 第一步：
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 第二步：安装成功后，上述过程使用带有npm install ...命令时，换成cnpm install ...即可
cnpm install
```
4. mac终端问题、Hbuilder、sublime、webstorm均具备
``` bash
# HBuilder配置终端为内置控制台中，终端提示信息基本少等可怜，使用不便，推荐使用本机terminal

# sublime配置终端为内置命令，可定位目录启动终端，install-package  terminal，推荐使用

# webstorm内置终端控制台，使用起来较为简单，但更适合新手，不推荐使用、
```