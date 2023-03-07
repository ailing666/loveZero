<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		name: string
		age?: number
	}>(),
	{
		age: 999,
	}
)
</script>

<template>
	<div>child---{{ props.name }}---{{ props.age }}</div>
</template>
