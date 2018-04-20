import Vue from 'vue'
import App from './App'//（./）当前目录（../）上级目录
import router from './router'
//默认true，设置为 false 以阻止 vue 在启动时生成生产提示
//全局配置文档https://cn.vuejs.org/v2/api/#
Vue.config.productionTip = false
//开启debug模式
Vue.config.debug = true
/* eslint-disable no-new */
new Vue({
	mode: 'history', //开启history模式保证spa可以和以前的网页一样可以前进和后退
	el: '#app',//这个app是哪个，绕来绕去都懵了，别怕，它就是index.html，独生子，没有第二份
	router,
	render: h => h(App)//别问这里是个啥，App就是第二行代码，不懂写法，看下面注释的演变
})
//好像发现点不一样的地方，vue-cli中这里.$mount('#app')有个挂载动作，淡定淡定，这个导入了router了

// 写法演变如下
// render: h => h(App);
// render: h => {
//      return h(App);
// }
// render: function(h) {
//      return h(App);
// }
// render: function(createElement) {
//      return createElement(App);
// }