<template>
	<div>
		显示边框
		<ysyz-switch :model-value="border" @click="handleClick()" />
		<ysyz-grid :border="border">
			<ysyz-grid-item>1</ysyz-grid-item>
			<ysyz-grid-item>2</ysyz-grid-item>
			<ysyz-grid-item>3</ysyz-grid-item>
			<ysyz-grid-item>4</ysyz-grid-item>
			<ysyz-grid-item>5</ysyz-grid-item>
			<ysyz-grid-item>6</ysyz-grid-item>
		</ysyz-grid>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const border = ref<boolean>(false);

function handleClick(): void {
	border.value = !border.value;
}
</script>

<style>

</style>