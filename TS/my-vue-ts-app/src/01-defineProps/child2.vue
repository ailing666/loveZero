<script setup lang="ts">
const { name, age = 999 } = defineProps<{
	name: string
	age?: number
}>()
</script>

<template>
	<div>child---{{ name }}---{{ age }}</div>
</template>
