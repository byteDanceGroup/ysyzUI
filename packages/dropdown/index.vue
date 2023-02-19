<template>
	<div class="ysyz-dropdown" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="handleFirstClick">
		<div class="ysyz-dropdown-title">
			<slot></slot>
		</div>
		<div class="ysyz-dropdown-list">
			<slot name="list"></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { provide, onMounted, ref, onBeforeUnmount } from 'vue';

enum Trigger {
	hover, click,
}

enum Placement {
	'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'
}

interface Dropdown {
	trigger?: keyof typeof Trigger,
	placement?: keyof typeof Placement,
}

const props = withDefaults(defineProps<Dropdown>(), {
	trigger: 'hover',
	placement: 'bottom',
});

const opened = ref<boolean>(false);
provide('opened', opened);
provide('placement', props.placement);

function handleMouseEnter() {
	if (Trigger[props.trigger] === Trigger.hover)
		opened.value = true;
}

function handleMouseLeave() {
	if (Trigger[props.trigger] === Trigger.hover)
		opened.value = false;
}

function handleFirstClick() {
	if (Trigger[props.trigger] === Trigger.click && !opened.value)
		setTimeout(() => opened.value = true, 0);
}

function handleSecondClick() {
	if (Trigger[props.trigger] === Trigger.click && opened.value)
		opened.value = false;
}

onMounted(() => {
	document.addEventListener('click', handleSecondClick);
});

onBeforeUnmount(() => {
	document.removeEventListener('click', handleSecondClick);
});
</script>

<style lang="scss" scoped>
.ysyz-dropdown {
	display: inline-block;
	position: relative;

	&>.ysyz-dropdown-title {
		color: $primary;
		font-size: $font-size-base;
		padding-bottom: 6px;
	}
}
</style>
