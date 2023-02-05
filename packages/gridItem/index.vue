<template>
	<div :class="classObject" :style="{ height: height }" ref="gridItem">
		<div :class="classObjectForMain" :style="styleObjectForMain">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>

import { inject, ref, onMounted } from 'vue';

interface GridItem {
	padding: string,
	center: boolean,
	square: boolean,
}

const GridInstance = inject('GridInstance') as GridItem;

const classObject: Record<string, boolean> = {
	'ysyz-grid-item-square': GridInstance.square,
	'ysyz-grid-item': true,
}

const classObjectForMain: Record<string, boolean> = {
	'ysyz-grid-item-center': GridInstance.center,
	'ysyz-grid-item-main': true,
}

const styleObjectForMain: Record<string, any> = {
	padding: GridInstance.padding,
}

const height = ref<string>('');

const gridItem = ref();

let timer: any = null;
function handleResize() {
	if (timer) return;
	timer = setTimeout(() => {
		height.value = gridItem.value.clientWidth + 'px';
		timer = null;
	}, 200);
}

onMounted(() => {
	if (GridInstance.square)
		height.value = gridItem.value.clientWidth + 'px';
	window.addEventListener('resize', handleResize);
});
</script>

<style lang="scss" scoped>
.ysyz-grid-item {
	position: relative;
	transition: box-shadow 0.3s;
}

.ysyz-grid-item-center {
	width: 100%;
	box-sizing: border-box;
	text-align: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
</style>
