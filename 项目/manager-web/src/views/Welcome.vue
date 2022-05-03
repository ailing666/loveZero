<template>
	<div>
		<el-button @click="testReq" type="success">welcome</el-button>
	</div>
</template>

<script setup>
import { test } from '../api/test'
const testReq = () => {
	test().then((res) => {
		console.log('res: ', res)
	})
}
</script>
