<template>
	<div class="common-layout home">
		<el-container>
			<!-- 侧边栏 -->
			<el-aside class="home-side" width="200px">
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
					<div class="bread">面包屑</div>
					<div class="user-info">用户</div>
				</el-header>
				<el-main class="wrapper"><router-view></router-view></el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script setup>
import { Promotion, Setting } from '@element-plus/icons-vue'
import { ref } from 'vue'

// 控制菜单是否展开
const isCollapse = ref(false)
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
