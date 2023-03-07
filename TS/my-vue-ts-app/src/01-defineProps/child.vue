<script setup lang="ts">
const props = defineProps<{
	name: string
	age?: number
}>()
</script>

<template>
	<div>child---{{ props.name }}---{{ props.age }}</div>
</template>
