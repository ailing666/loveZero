<script setup>
import { ref } from 'vue'
import Son from './defineEmits/Son.vue'

const money = ref(100)
const car = ref('法拉利')
const changeMoney = num => {
	money.value = money.value - num
}
</script>

<template>
	<div>
		<h1>我是父组件</h1>
		<div>金钱：{{ money }}</div>
		<div>车辆：{{ car }}</div>
		<hr />
		<Son :money="money" :car="car" @changeMoney="changeMoney"></Son>
	</div>
</template>
