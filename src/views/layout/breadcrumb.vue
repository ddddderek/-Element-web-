<template>
	<section id="breadcrumb">
		<i class="el-icon-location"></i>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item v-for="(item,index) in $route.matched" :to="item.path" :key="index">{{item.name}}</el-breadcrumb-item>
			</el-breadcrumb>
	</section>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {}
	}
</script>

<style lang="scss" scoped>
	#breadcrumb {
		height: 50px;
	    padding-left: 30px;
	    .el-icon-location{
	    	float:left;
	    	line-height:50px;
	 			font-size:18px;
	 			margin-right:10px;
	    }
	    .el-breadcrumb {
	    	float:left;
	    	line-height: 50px;
				height:100%;
	    }
	}
</style>