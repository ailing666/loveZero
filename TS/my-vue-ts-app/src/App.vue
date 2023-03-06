<script setup lang="ts">
import { ref } from 'vue'
import child from './02-defineEmits/child.vue'
const money = ref(0)
const msg = ref('你好')
</script>

<template>
	<child @change-money="money = $event" @change-msg="msg = $event"></child>
	{{ money }}---{{ msg }}
</template>
