import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
//在vue里面使用别人开发的组件，第一步就是install,第二步在main.js里面引入，第三步Vue.use这个组件
//刚刚发现这个Vue.use(),跟app.use()很像啊，前者是vue的，后者是express的，后者被看成是调用中间件的方法，两者确有异曲同工之效啊
//安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
//当 install 方法被同一个插件多次调用，插件将只会被安装一次。
//有点迷糊，但是发现它就是调用某个js中的函数，两个js文件之间的情感交流
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
