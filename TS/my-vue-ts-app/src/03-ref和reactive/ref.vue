<script setup lang="ts">
import { ref } from 'vue'
// 简单类型 使用类型推导
const msg = ref('你好')

// 复杂类型 使用泛型
type User = {
	id: number
	name: string
}
const list = ref<User[]>([])

setTimeout(() => {
	list.value = [
		{ id: 1, name: '007' },
		{ id: 2, name: 'loveZero' },
	]
}, 1000)
</script>

<template>
	{{ msg }}
	<ul>
		<li v-for="item in list" :key="item.id">{{ item.name }}</li>
	</ul>
</template>
