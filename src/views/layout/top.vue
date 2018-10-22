<template>
	<section id="header_wrapper">
		<div class="opt_wrapper">
			<div class="operation-item">
				<i v-if="menuType" class="el-icon-menu" @click="handleChangeMenu"></i>
				<i v-else class="el-icon-more-outline" @click="handleChangeMenu"></i>
			</div>
			<div class="opt_logout operation-item">
				<i class="el-icon-setting"></i>
			</div>
		</div>
		<div class="userinfo_wrapper">
			<img class="avatar" src="/static/images/avatar.png" alt="管理员头像">
			<span>管理员姓名</span>
		</div>
	</section>
</template>

<script>
	import { mapGetters } from 'vuex';
	import util from 'common/js/util.js'
	export default {
		data() {
			return {
			}
		},
		mounted() {
		},
		methods:{
			//菜单展示方式
			handleChangeMenu() {
				this.$store.commit('SET_MENUTYPE',!this.menuType)
			},
		},
		computed: {
			...mapGetters([
				'menuType'
			])
		}
	}
</script>

<style lang="scss" scoped="">
	#header_wrapper {
		height: 60px;
		position:relative;
    	box-sizing: border-box;
    	background-color: #fff;
    	box-shadow: 0 10px 20px #e7eaed;
    	.opt_wrapper {
    		display:flex;
    		height: 100%;
			position:absolute;
			left:20px;
			.operation-item {
				display: flex;
            	justify-content: center;
            	align-items: center;
            	padding:0 8px 0 8px;
				height:60px;
				text-align:center;
				cursor:pointer;
				i:not(.el-icon-caret-bottom){
					font-size: 20px;
				}
			}
    	}
    	.userinfo_wrapper {
    		overflow:hidden;
    		position:absolute;
    		top:15px;
    		right:30px;
    		.avatar {
				width:30px;
				height:30px;
				margin-right:5px;
				border-radius:50%;
    		}
    		span {
    			color:#a0a0a0;
    		}
    	}
	}
</style>