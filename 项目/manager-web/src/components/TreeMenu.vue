<template>
	<template v-for="menu in userMenu" :key="menu._id">
		<el-sub-menu v-if="menu.children && menu.children.length > 0 && menu.children[0].menuType === '1'" :index="menu.path">
			<template #title>
				<component class="menu-icon" :is="menu.icon"></component>
				<span>{{ menu.menuName }}</span>
			</template>
			<TreeMenu :userMenu="menu.children" />
		</el-sub-menu>
		<el-menu-item v-else :index="menu.path" :key="menu._id">{{ menu.menuName }}</el-menu-item>
	</template>
</template>

<script setup>
const props = defineProps({
	userMenu: {
		type: Array,
		default: () => []
	}
})

const iconName = 'Search'
</script>

<style scoped>
.menu-icon {
	width: 24px;
	height: 24px;
	margin-right: 16px;
}
</style>
