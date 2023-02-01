<template>
	<div>
		<ysyz-button @click="handleClick()" type="primary">
			{{ text }}
		</ysyz-button>
		<ysyz-grid :border="flag">
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

const flag = ref<boolean>(false);

const text = ref<string>('显示边框');

function handleClick(): void {
	flag.value = !flag.value;
	if (flag.value) text.value = '隐藏边框';
	else text.value = '显示边框';
}
</script>