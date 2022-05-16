<template>
	<el-breadcrumb separator-icon="ArrowRight">
		<el-breadcrumb-item v-for="(item, index) in route.matched" :key="item.path">
			<router-link to="/welcome" v-if="index == 0">{{ item.meta.title }}</router-link>
			<span v-else>{{ item.meta.title }}</span>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
