<template>
	<el-card class="login-card" shadow="always">
		<el-form ref="userForm" :model="user" :rules="rules">
			<div class="title">火星</div>
			<el-form-item prop="userName">
				<el-input type="text" :prefix-icon="User" v-model="user.userName" />
			</el-form-item>
			<el-form-item prop="userPwd">
				<el-input type="password" :prefix-icon="Lock" v-model="user.userPwd" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" class="btn-login" @click="userLogin">登录</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script setup>
import { login } from '@/api/user'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
// 数据源
const user = ref({
	userName: 'admin',
	userPwd: 'admin'
})

// 校验规则
const rules = ref({
	userName: [{ required: true, message: '用户名必填', trigger: 'blur' }],
	userPwd: [{ required: true, message: '密码必填', trigger: 'blur' }]
})

// 表单dom
const userForm = ref(null)
// 使用vuex的store
const store = useStore()
// 路由
const router = useRouter()
const route = useRoute()
const userLogin = () => {
	// 表单校验
	userForm.value.validate((valid) => {
		if (valid) {
			// 校验通过发送请求
			login(user.value).then((res) => {
				store.commit('saveUserInfo', res)
				router.push({ name: 'welcome' })
			})
		}
	})
}
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
