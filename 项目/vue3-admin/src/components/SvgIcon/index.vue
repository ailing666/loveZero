<template>
	<!-- 外部图标 -->
	<div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" :class="className" />
	<!-- element内部图标 -->
	<component v-else :is="props.icon" class="svg-icon" :class="className" />
</template>

<script setup>
import { isExternalUrl } from '../../utils/validate'
import { defineProps, computed } from 'vue'
// 接受外部变量
const props = defineProps({
	// icon 图标
	icon: {
		type: String,
		required: true
	},
	// 图标类名
	className: {
		type: String,
		default: ''
	}
})

// 判断是否为外部图标
const isExternal = computed(() => isExternalUrl(props.icon))

// 外部图标样式
const styleExternalIcon = computed(() => ({
	mask: `url(${props.icon}) no-repeat 50% 50%`,
	'-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
</script>

<style scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}

.svg-external-icon {
	background-color: currentColor;
	mask-size: cover !important;
	display: inline-block;
}
</style>
