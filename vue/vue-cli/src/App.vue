<template>
	<div id="app">
		<img src="./assets/logo.png">
		<!--使用components文件夹下的HelloWorld组件-->
		<ccc msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
	//ccc标签中的msg为传值
	import ccc from './components/HelloWorld.vue'//导入组件，ccc自定义
	export default {
		name: 'app',
		components: {//注册组件
			ccc
		}
	}
	//alert(HelloWorld.name);调用HelloWorld组件暴露出来的name
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