<template>
	<div class="login-container">
		<el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
			<div class="title-container">
				<h3 class="title">用户登录</h3>
			</div>

			<el-form-item prop="username">
				<span class="svg-container">
					<!-- 外部图标 -->
					<svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
				</span>
				<el-input v-model="loginForm.username" placeholder="username" name="username" type="text" />
			</el-form-item>

			<el-form-item prop="password">
				<span class="svg-container">
					<!-- elemnetPlus自带图标 -->
					<el-icon><lock /></el-icon>
				</span>
				<el-input :type="passwordType" v-model="loginForm.password" placeholder="password" name="password" />
				<span class="svg-container">
					<!-- 本地图标 -->
					<svg-icon @click="passwordClick" :icon="passwordType === 'password' ? 'eye' : 'eye-open'" />
				</span>
			</el-form-item>

			<el-button type="primary" style="width: 100%; margin-bottom: 30px" :loading="loginLoading" @click="handleLogin">登录</el-button>
		</el-form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useStore } from 'vuex'

// loginForm
const loginForm = ref({
	username: 'super-admin',
	password: '123456'
})

// loginRules校验
const loginRules = ref({
	username: [{ required: true, message: '用户名必填', trigger: 'blur' }],
	password: [
		{
			required: true,
			trigger: 'blur',
			validator: validatePassword()
		}
	]
})

// 密码框类型,默认是password
const passwordType = ref('password')

// 点击小眼睛，切换 passwordType
const passwordClick = () => (passwordType.value = passwordType.value === 'password' ? 'text' : 'password')

// 获取ref实例
const loginFormRef = ref(null)

// 按钮loading状态
const loginLoading = ref(false)

// 使用vuex
const store = useStore()
// 点击登录
const handleLogin = () => {
	// 表单验证
	loginFormRef.value.validate((valid) => {
		if (!valid) return
		loginLoading.value = true
		store
			.dispatch('user/Login', loginForm.value)
			.then(() => {
				loginLoading.value = false
			})
			.catch((err) => {
				console.log(err)
				loginLoading.value = false
			})
	})
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
	min-height: 100%;
	width: 100%;
	background-color: $bg;
	overflow: hidden;

	.login-form {
		position: relative;
		width: 520px;
		max-width: 100%;
		padding: 160px 35px 0;
		margin: 0 auto;
		overflow: hidden;

		::v-deep .el-form-item {
			border: 1px solid rgba(255, 255, 255, 0.1) !important;
			background: rgba(0, 0, 0, 0.1);
			border-radius: 5px;
			color: #454545;
		}
		::v-deep .el-input__wrapper {
			padding: 0;
		}

		::v-deep .el-input {
			display: inline-block;
			height: 47px;
			width: 85%;

			input {
				background: #283443;
				border: none;
				-webkit-appearance: none;
				border-radius: 0px;
				padding: 12px 5px 12px 15px;
				color: $light_gray;
				height: 47px;
				caret-color: $cursor;
			}
		}
	}

	.svg-container {
		padding: 6px 5px 6px 15px;
		color: $dark_gray;
		vertical-align: middle;
		display: inline-block;
	}

	.title-container {
		position: relative;

		.title {
			font-size: 26px;
			color: $light_gray;
			margin: 0px auto 40px auto;
			text-align: center;
			font-weight: bold;
		}
	}

	.show-pwd {
		position: absolute;
		right: 10px;
		top: 7px;
		font-size: 16px;
		color: $dark_gray;
		cursor: pointer;
		user-select: none;
	}
}
</style>
