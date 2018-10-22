<template>
	<section id="register">
		<div class="register_wrapper">
			<el-form class="registerForm" label-position="top" label-width="80px" :model="formData" ref="formData" :rules="formDataRules">
			  	<el-form-item label="Email" prop="email">
			    	<el-input v-model="formData.email" size="mini" maxlength="20"></el-input>
			  	</el-form-item>
			  	<el-form-item label="Nickname" prop="nickname">
			    	<el-input v-model="formData.nickname" maxlength="20"></el-input>
			  	</el-form-item>
			  	<el-form-item label="Password" prop="password">
			    	<el-input v-model="formData.password" type="password" maxlength="20"></el-input>
			  	</el-form-item>
			  	<div class="registerBtn_wrapper">
			  		<!-- <el-checkbox class="rememberBtn" v-model="formData.remember">Remember me</el-checkbox> -->
			    	<el-button class="registerBtn" type="success" round @click="handleregister">register</el-button>
			  	</div>
			</el-form>
		</div>
	</section>
</template>

<script>
	import {
		signup
	} from 'api/user.js'

	export default {
		data() {
			return {
				formData: {
					email:'derek@163.com',
					nickname:'derek',
					password:'123456',
					// remember:true,
				},

				formDataRules: {
					email: [{ required: true, message: '请输入账户名称', trigger: 'blur' }],
					nickname: [{ required: true, message: '请输入用户名称', trigger: 'blur' }],
					password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
				}
			}
		},
		methods: {
			//登录接口
			getSignup (params) {
				signup (params).then(res => {
					console.log(res)
				}).catch(err => {

				})	
			},

			//确认登录按钮
			handleregister() {
				this.$refs['formData'].validate((valid) => {
					if(valid) {
						this.getSignup(this.formData)
					}else {
						return false
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#register {
		height:100%;
		width:100%;
		overflow:hidden;
		background:url('/static/images/bg.jpg') no-repeat left top;
		position:relative;
		.register_wrapper {	
			position:absolute;
			top:464px;
			right:284px;
			width:346px;
			height:212px;
			padding:20px;
			box-sizing:border-box;
			border-radius:10px;
			background-color:rgba(255,255,255,0.5);
			.registerBtn_wrapper {
				overflow:hidden;
				display:flex;
			    justify-content: flex-end;
			    align-items: center;
			}
		}
	}
</style>