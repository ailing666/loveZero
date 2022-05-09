<template>
	<div class="common-layout home">
		<el-container>
			<!-- 侧边栏 -->
			<el-aside :class="['home-side', isCollapse ? 'fold' : 'unfold']">
				<h1 class="logo">
					<img src="../assets/logo.png" alt="" />
				</h1>
				<el-menu class="nav-menu" active-text-color="#ffd04b" background-color="#001529" :collapse="isCollapse" text-color="#fff">
					<el-sub-menu index="1">
						<template #title>
							<el-icon><Setting /></el-icon>
							<span>系统管理</span>
						</template>
						<el-menu-item index="1-1">用户管理</el-menu-item>
						<el-menu-item index="1-2">菜单管理</el-menu-item>
					</el-sub-menu>
					<el-sub-menu index="2">
						<template #title>
							<el-icon><Promotion /></el-icon>
							<span>审批管理</span>
						</template>
						<el-menu-item index="2-1">休假审批</el-menu-item>
						<el-menu-item index="2-2">待办审批</el-menu-item>
					</el-sub-menu>
				</el-menu>
			</el-aside>

			<el-container>
				<el-header class="home-header">
					<div class="header-left">
						<el-icon class="menu-fold" @click="toggleIsCollapse"><Menu /></el-icon>
						<span>面包屑</span>
					</div>

					<div class="user-info">
						<el-badge :is-dot="isDot" class="notice">
							<el-icon><Bell /></el-icon>
						</el-badge>
						<el-dropdown @command="handleCommand">
							<span class="user-link">
								{{ store.state.userInfo.userName }}
								<el-icon class="el-icon--right">
									<arrow-down />
								</el-icon>
							</span>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item command="email">邮箱：{{ store.state.userInfo.userEmail }}</el-dropdown-item>
									<el-dropdown-item command="logout">退出</el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</div>
				</el-header>

				<el-main class="wrapper"><router-view></router-view></el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script setup>
import { useStore } from 'vuex'
import { Promotion, Setting, Menu, Bell, ArrowDown } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { noticeCount } from '../api/user'
import { ref } from 'vue'
import { onMounted } from 'vue'
// onMounted生命周期
onMounted(() => {
	getNoticeCount()
})
// 控制是否有通知
const isDot = ref(false)

const getNoticeCount = async () => {
	const res = await noticeCount()
	isDot.value = !!res
}
// 控制菜单是否展开
const isCollapse = ref(false)

// vuex
const store = useStore()

// 路由
const router = useRouter()
const route = useRoute()

// 切换菜单是否展开
const toggleIsCollapse = () => {
	isCollapse.value = !isCollapse.value
}
// 退出
const handleCommand = (command) => {
	if (command === 'logout') {
		store.commit('saveUserInfo', '')
		router.push({ name: 'login' })
	}
}
</script>

<style lang="scss">
.home {
	.home-side {
		width: 200px;
		height: 100vh;
		background-color: #001529;
		color: #fff;
		overflow-y: auto;
		transition: width 0.5s;
		.logo {
			display: flex;
			align-items: center;
			font-size: 18px;
			height: 50px;
			img {
				margin: 0 16px;
				width: 32px;
				height: 32px;
			}
		}
		.nav-menu {
			height: calc(100vh - 50px);
			border-right: none;
		}
		// 合并
		&.fold {
			width: 64px;
		}
		// 展开
		&.unfold {
			width: 200px;
		}
	}

	.home-header {
		height: 50px;
		line-height: 50px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ddd;
		padding: 0 20px;

		.header-left {
			display: flex;
			align-items: center;
			.menu-fold {
				margin-right: 8px;
				font-size: 18px;
				cursor: pointer;
			}
		}

		.user-info {
			display: flex;
			align-items: center;

			.notice {
				margin-top: 10px;
				margin-right: 20px;
				line-height: 30px;
				cursor: pointer;
			}
			.user-link {
				cursor: pointer;
				color: #409eff;
			}
		}
	}
	.wrapper {
		background: #eef0f3;
		padding: 20px;
		height: calc(100vh - 50px);
		.main-page {
			background: #fff;
			height: 100%;
		}
	}
}
</style>
