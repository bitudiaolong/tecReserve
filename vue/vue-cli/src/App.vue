<template>
	<div id="app">
		<img src="./assets/logo.png">
		<!--使用components文件夹下的HelloWorld组件-->
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'//导入组件，HelloWorld为HelloWorld.vue中export的name
	export default {
		name: 'app',//该组件为入口，所以main.js中render: h => h(App)
		components: {
			HelloWorld
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