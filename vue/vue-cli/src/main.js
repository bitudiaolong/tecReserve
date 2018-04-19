import Vue from 'vue' //导入vue核心依赖
import App from './App.vue' //导入组件定义为App，实例vue中render: h => h(App)

Vue.config.productionTip = false
//创建vue实例
const vm = new Vue({
	render: h => h(App)//渲染实例的 DOM 树
})
vm.$mount('#app')
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