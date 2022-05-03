<template>
	<div class="common-layout home">
		<el-container>
			<el-aside class="home-side" width="200px">Aside</el-aside>
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
