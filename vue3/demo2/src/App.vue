<script setup>
import { ref } from 'vue'
import Son from './defineProps/Son.vue'

const money = ref(100)
const car = ref('法拉利')
</script>

<template>
	<div>
		<h1>我是父组件</h1>
		<div>金钱：{{ money }}</div>
		<div>车辆：{{ car }}</div>
		<hr />
		<Son :money="money" :car="car"></Son>
	</div>
</template>
