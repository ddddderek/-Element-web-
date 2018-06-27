<template>
	<section id="header_wrapper">
		<div class="opt_wrapper">
			<div class="operation-item">
				<i v-if="menuType" class="el-icon-menu" :style="{color:themeColor}" @click="handleChangeMenu"></i>
				<i v-else class="el-icon-more-outline" :style="{color:themeColor}" @click="handleChangeMenu"></i>
			</div>
			<div class="opt_logout operation-item">
				<i class="el-icon-setting" :style="{color:themeColor}"></i>
			</div>
			<div class="opt_changeColor operation-item" v-if="theme.length != 0">
				<el-dropdown placement="top-start" @command="handleChangeColor">
				  	<span><i class="el-icon-picture" :style="{color:themeColor}"></i></span>
				  	<el-dropdown-menu slot="dropdown">
				   		<el-dropdown-item command="a" v-for="(item,index) in theme" :key="index" :command="item.color">
				   			<template>
				   				<i class="el-icon-circle-check" :style="{color:item.color}"></i>
				   				<span>{{item.name}}</span>
				   			</template>
				   		</el-dropdown-item>
				  	</el-dropdown-menu>
				</el-dropdown>
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
	import { theme } from 'common/js/util.js'
	export default {
		data() {
			return {
				theme:[],
			}
		},
		mounted() {
			this.theme = theme
		},
		methods:{
			//菜单展示方式
			handleChangeMenu() {
				this.$store.commit('SET_MENUTYPE',!this.menuType)
			},

			//换肤
			handleChangeColor(command) {
				this.$store.commit('SET_THEMECOLOR',command)
				util.toggleClassName(document.body,command)
			}
		},
		computed: {
			...mapGetters([
				'themeColor',
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