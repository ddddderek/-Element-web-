<template>
	<section id="aside_wrapper">
		<div class="logo_wrapper">
			<img class="logo_img" src="/static/images/logo.png" alt="个人logo">
		</div>
		<el-menu class="menu_wrapper" :class="menuType?'':'fixedWidth'" :default-active="$route.path" unique-opened router :collapse="menuType" mode="vertical" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
		  	<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
		  		<el-submenu v-if="!item.leaf" :key="index" :index="index + ''">
		  			<template slot="title">
		  				<i :class="item.icon"></i>
		  				<span>{{item.name}}</span>
		  			</template>
		  			<el-menu-item v-for="(child,i) in item.children" v-if="!child.hidden" :index="child.path" :key="i" class="group-item">
		  				<span :title="child.name">{{child.name}}</span>
		  			</el-menu-item>
		  		</el-submenu>
		  		<el-menu-item v-if="item.leaf && item.children.length > 0" :index="item.children[0].path" :key="index" class="single-item">
		  			<i :class="item.icon"></i>
		  			<span>{{item.children[0].name}}</span>
		  		</el-menu-item>
		  	</template>
		</el-menu>
	</section>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {}
		},
		mounted() {},
		computed: {
			...mapGetters([
				'themeColor',
				'menuType',
			])
		},
		watch:{
			themeColor:function(newValuw,oldValue) {
				//这里面可以处理左侧aside跟主题颜色的映射关系
				// console.log(newValuw,oldValue)
			}
		}
	}
</script>

<style lang="scss" scoped="">
	#aside_wrapper {
		height:100%;
    	background-color: #262b2f;
    	overflow-y: auto;
    	overflow-x: hidden;
    	.logo_wrapper {
    		text-align:center;
    		padding:50px 0px 30px 0px;
    	}
    	.menu_wrapper {
    		border:0px;
    		&.fixedWidth {
				width:180px;
				border:0px;
	    	}
    	}
	}
</style>