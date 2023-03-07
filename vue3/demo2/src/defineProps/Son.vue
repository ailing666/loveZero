<script setup>
// defineProps: 接收父组件传递的数据
const props = defineProps({
	money: Number,
	car: String,
})
// 使用props
console.log(props.money)
</script>

<template>
	<div>
		<h3>我是子组件</h3>
		<div>{{ money }} --- {{ car }}</div>
	</div>
</template>
