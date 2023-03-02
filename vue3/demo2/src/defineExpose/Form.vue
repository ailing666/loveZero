<script setup>
import { ref } from 'vue'

const count = ref(0)
const validate = () => {
	console.log('表单校验方法')
}
const formClick = () => {
	count.value++
}

// 暴露属性给外部组件使用
defineExpose({ count, validate })
</script>

<template>
	<h3>我是Form组件{{ count }}</h3>
	<button @click="formClick">我是Form组件</button>
</template>
