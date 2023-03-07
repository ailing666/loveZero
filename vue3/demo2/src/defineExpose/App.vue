<script setup>
import { ref } from 'vue'
import Form from './defineExpose/Form.vue'

// 提供一个ref
const formRef = ref(null)
// 使用组件组件和方法
const fn = () => {
	formRef.value.count++
	formRef.value.validate()
}
</script>

<template>
	<h2>app count{{ formRef }}</h2>
	<button @click="fn">button</button>
	<Form ref="formRef"></Form>
</template>
