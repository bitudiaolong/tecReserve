# vue2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 一、构建vue项目
#### 1、安装nodejs，选择偶数版本
#### 2、安装淘宝镜像npm install -g cnpm --registry=https://registry.npm.taobao.org
#### 3、cnpm install -g vue-cli或cnpm install -g @vue/cli-init
#### 4、vue init webpack vue2
#### 5、这里需要进行一些配置，默认回车即可
``` bash
# 项目名字
? Project name vue2  
# 项目描述
? Project description A Vue.js project  

# 项目作者
? Author    

# 是否安装编译器
? Vue build runtime 

# 是否安装vue路由
? Install vue-router? Yes 

# 是否使用ESLint检查js代码
? Use ESLint to lint your code? Yes 

# 选择一个ESLint预设的标准，这里可以选择standard
? Pick an ESLint preset none   

# 安装单元测试工具
? Set up unit tests Yes 

# 选择一个测试运行者
? Pick a test runner noTest 

# 是否设置使用Nightwatch进行端到端自动化测试
? Setup e2e tests with Nightwatch? Yes 

# 是否创建完项目后为你运行npm install，选择no回车，自己用淘宝镜像cnpm install
? Should we run `npm install` for you after the project has been created? (recommended) no 
​
# 手脚架已经生成vue2
   vue-cli · Generated "vue2".    
​
# 项目初始化已经完成
Project initialization finished!
```

> 进入项目目录：cd vue2
> 安装项目所需要的依赖：cnpm install 这个时候就可以做一个安静的美男子，静静的等待了
> 启动项目：npm run dev

``` bash
$ npm run dev

> vue2@1.0.0 dev /Users/gagc/mobile/h5/vue/vue2
> webpack-dev-server --inline --progress --config build/webpack.dev.conf.js

 95% emitting                                                                 b      
 DONE  Compiled successfully in 4196ms (运行耗费4196ms时间)                                 17:07:26

 I  Your application is running here: http://localhost:8080(运行成功后的项目请求地址)
```
 
#### 运行ok，在浏览器中输入http://localhost:8080，回车，就看到构建好的项目了

# 二、目录结构
>├── README.md                       // 项目说明文档
>├── node_modules                    // 项目依赖包文件夹（当你化身美男子时，node_modules它已经悄悄cnpm install生成了）
>├── build                           // 编译配置文件，一般不用管（webpack的东西便用边学吧）
>│   ├── build.js
>│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                          // 项目基本设置文件夹
│   ├── dev.env.js              // 开发配置文件
│   ├── index.js                    // 配置主文件
│   └── prod.env.js             // 编译配置文件
├── index.html                      // 项目入口文件（这才是真正的入口，尽管它衣不蔽体，清洁溜溜，但是缺它不可）
├── package-lock.json           // npm5 新增文件，优化性能
├── package.json                    // 项目依赖包配置文件(神奇的事情发生了，cnpm install怎么知道我要安装什么，原来是它们暗中勾结)
├── src                             // 我们的项目的源码编写文件（开启编程的巅峰之路吧，放下美男子的矜持，在广阔的组件大地上尽情的奔跑吧）
│   ├── App.vue                 // APP入口文件
│   ├── assets                      // 初始项目资源目录，回头删掉
│   │   └── logo.png
│   ├── components              // 组件目录
│   │   └── Hello.vue           // 测试组件，回头删除
│   ├── page                    // 页面组件文件夹
│   ├── main.js                 // 主配置文件
│   └── router                      // 路由配置文件夹（这个路由，不是路由器，也不是交换机，跟光线电缆没有关系）
│       └── index.js            // 路由配置文件
│   ├── style                   // 样式文件夹
└── static                          // 资源放置目录