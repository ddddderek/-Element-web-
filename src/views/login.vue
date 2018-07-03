<template>
	<section id="login">
		<div class="login_wrapper">
			<el-form class="loginForm" label-position="top" label-width="80px" :model="formData" ref="formData" :rules="formDataRules">
			  	<el-form-item label="Username" prop="username">
			    	<el-input v-model="formData.username" size="mini" maxlength="20"></el-input>
			  	</el-form-item>
			  	<el-form-item label="Password" prop="password">
			    	<el-input v-model="formData.password" type="password" maxlength="20"></el-input>
			  	</el-form-item>
			  	<div class="loginBtn_wrapper">
			  		<el-checkbox class="rememberBtn" v-model="formData.remember">Remember me</el-checkbox>
			    	<el-button class="loginBtn" type="success" round @click="handleLogin">Login</el-button>
			  	</div>
			</el-form>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					username:'',
					password:'',
					remember:true,
				},

				formDataRules: {
					username: [{ required: true, message: '请输入账户名称', trigger: 'blur' }],
					password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
				}
			}
		},
		methods: {
			handleLogin() {
				this.$refs['formData'].validate((valid) => {
					if(valid) {

					}else {
						return false
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#login {
		height:100%;
		width:100%;
		overflow:hidden;
		background:url('/static/images/bg.jpg') no-repeat left top;
		position:relative;
		.login_wrapper {	
			position:absolute;
			top:464px;
			right:284px;
			width:346px;
			height:160px;
			padding:20px;
			box-sizing:border-box;
			border-radius:10px;
			background-color:rgba(255,255,255,0.5);
			.loginBtn_wrapper {
				overflow:hidden;
				display:flex;
			    justify-content: space-between;
			    align-items: center;
			}
		}
	}
</style>