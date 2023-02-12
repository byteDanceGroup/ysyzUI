<template>
	<div>
		<div class="buttons" style="margin-bottom: 10px;">
			<ysyz-button @click="clickBorder()" type="primary">{{ borderText }}</ysyz-button>
			<ysyz-button @click="clickHover()" type="primary">{{ hoverText }}</ysyz-button>
		</div>
		<ysyz-grid :border="border" :hover="hover">
			<ysyz-grid-item>1</ysyz-grid-item>
			<ysyz-grid-item>2</ysyz-grid-item>
			<ysyz-grid-item>3</ysyz-grid-item>
			<ysyz-grid-item>4</ysyz-grid-item>
			<ysyz-grid-item>5</ysyz-grid-item>
			<ysyz-grid-item>6</ysyz-grid-item>
			<ysyz-grid-item>7</ysyz-grid-item>
			<ysyz-grid-item>8</ysyz-grid-item>
			<ysyz-grid-item>9</ysyz-grid-item>
		</ysyz-grid>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const border = ref<boolean>(true);

const hover = ref<boolean>(true);

const borderText = ref<string>('隐藏边框');

const hoverText = ref<string>('关闭悬停');

function clickBorder(): void {
	border.value = !border.value;
	if (border.value) borderText.value = '隐藏边框';
	else borderText.value = '显示边框';
}

function clickHover(): void {
	hover.value = !hover.value;
	if (hover.value) hoverText.value = '关闭悬停';
	else hoverText.value = '开启悬停';
}
</script>