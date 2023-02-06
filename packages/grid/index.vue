<template>
	<div :class="['ysyz-grid', {
		'ysyz-grid-border': props.border,
		'ysyz-grid-hover': props.hover,
	}]" :style="styleObject">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
import { provide } from 'vue';

interface Grid {
	col?: number,
	square?: boolean,
	padding?: string,
	center?: boolean,
	border?: boolean,
	hover?: boolean
}

const props = withDefaults(defineProps<Grid>(), {
	col: 3,
	square: false,
	padding: '24px',
	center: false,
	border: true,
	hover: false,
});

const styleObject: Record<string, any> = {
	'grid-template-columns': `repeat(${props.col}, ${100 / props.col}%)`,
}

provide('GridInstance', props);
</script>

<style lang="scss">
@import "../../src/style/style.scss";

.ysyz-grid {
	display: grid;
	margin: 0 auto;
	position: relative;
}

.ysyz-grid-border {
	&>.ysyz-grid-item {
		box-shadow:
			1px 0 0 0 $border-color-split,
			0 1px 0 0 $border-color-split,
			1px 1px 0 0 $border-color-split,
			inset 1px 0 0 0 $border-color-split,
			inset 0 1px 0 0 $border-color-split;
	}
}

.ysyz-grid-hover {
	&>.ysyz-grid-item:hover {
		box-shadow:
			0 1px 6px rgb(0 0 0 / 20%);
	}
}
</style>
