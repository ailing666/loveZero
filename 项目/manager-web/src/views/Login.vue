<template>
	<el-card class="login-card" shadow="always">
		<el-form ref="userForm" :model="user" status-icon>
			<div class="title">火星</div>
			<el-form-item prop="userName">
				<el-input type="text" :prefix-icon="User" v-model="user.userName" />
			</el-form-item>
			<el-form-item prop="userPwd">
				<el-input type="password" :prefix-icon="Lock" v-model="user.userPwd" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" class="btn-login" @click="login">登录</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
const user = ref({
	userName: 'admin',
	userPwd: 'admin'
})
</script>

<style lang="scss" scoped>
.login-card {
	width: 500px;
	padding: 50px;
	margin: 0 auto;
	transform: translateY(50%);
	background-color: #fff;
	border-radius: 4px;

	.title {
		font-size: 50px;
		line-height: 1.5;
		text-align: center;
		margin-bottom: 30px;
	}

	.btn-login {
		width: 100%;
	}
}
</style>
