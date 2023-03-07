<script setup>
const props = defineProps({
	money: Number,
})
// 得到emit函数，显性声明事件名称
const emit = defineEmits(['changeMoney'])
const change = () => {
	emit('changeMoney', 10)
}
</script>

<template>
	<div>
		<h3>我是子组件</h3>
		<button @click="change">change</button>
		<div>{{ money }}</div>
	</div>
</template>
