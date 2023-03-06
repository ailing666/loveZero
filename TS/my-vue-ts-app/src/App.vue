<script setup lang="ts">
import { ref } from 'vue'
import child from './01-defineProps/child.vue'
const name = ref('loveZero')
</script>

<template>
	<child :name="name"></child>
</template>
