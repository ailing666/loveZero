<script setup lang="ts">
const emit = defineEmits<{
	(e: 'changeMoney', money: number): void
	(e: 'changeMsg', msg: string): void
}>()
</script>

<template>
	<div>child</div>
	<button @click="emit('changeMoney', 9999)">changeMoney</button>
	<button @click="emit('changeMsg', 'hello')">changeMsg</button>
</template>
