<template>
	<div>
		<div class="buttons" style="margin-bottom: 10px;">
			显示边框
			<ysyz-switch :model-value="border" @click="clickBorder()" />
			开启悬停
			<ysyz-switch :model-value="hover" @click="clickHover()" />
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

function clickBorder(): void {
	border.value = !border.value;
}

function clickHover(): void {
	hover.value = !hover.value;
}
</script>

<style>

</style>
