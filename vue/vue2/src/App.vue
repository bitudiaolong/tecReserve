<template>
	<div id="app">
		<img src="./assets/logo.png">
		<!--如果不懂这里如何传值的，隔壁的隔壁vue-component这里，看看vueGlobal.html全局组件或看看vue文档，如果还不行，记得找我美男子-->
		<router-view :msg="msg" />
		<!--据了解路由像是tab来回切换似的功能，然而网上把它说的更牛，那它到底是个啥-->
		<!--vue的单页面应用是基于路由和组件的，路由是用于设定访问路径，并将路径和组件映射起来。传统的页面应用，是用一些超链接来实现页面切换和跳转的-->
		<!--在vue-router单页面应用中，则是路径之间的切换，也就是组件的切换。-->
		<!--vue-router首先会去查找v-link指令的路由映射，然后根据路由映射找到匹配的组件，最后将组件渲染到<router-view>标签-->
		<!--所以呢，我们的localhost：8080/直接映射到这里了，你看到的内容就是渲染到<router-view>出来的结果-->
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() { //再次强调，这里只接受函数，如果你直接返回json，除了能证明你写错了，还能证明你懒
			return {
				msg: '组件中的data只接受函数'
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>