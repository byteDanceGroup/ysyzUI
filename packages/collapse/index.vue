<template>
	<div :class="['ysyz-collapse', {
		'ysyz-collapse-simple': props.simple
	}]">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
import { provide } from 'vue';

interface Collapse {
	modelValue?: string | string[],
	accordion?: boolean,
	simple?: boolean,
}

const props = withDefaults(defineProps<Collapse>(), {
	modelValue: () => [],
	accordion: false,
	simple: false,
});

const emits = defineEmits(['update:modelValue', 'on-change']);

function getActiveKey(): string[] {
	let list: string[];
	if (typeof props.modelValue === 'object')
		list = props.modelValue.slice();
	else list = [props.modelValue];
	return list;
}

function toggle(name: string): void {
	let list: string[] = getActiveKey();
	let idx = list.indexOf(name);
	if (props.accordion) {
		if (idx > -1) list = [];
		else list = [name];
	} else {
		if (idx > -1) list.splice(idx, 1);
		else list.push(name);
	}
	emits('update:modelValue', list);
	emits('on-change', list);
}

provide('toggle', toggle);
provide('getActiveKey', getActiveKey);
</script>

<style lang="scss">
.ysyz-collapse {
	margin: 0 auto;
	background-color: $background-color-base;
	border: $border-width-base $border-style-base $border-color-base;
	border-radius: 3px;
}

.ysyz-collapse-simple {
	background-color: transparent;
	border: none;

	&>.ysyz-panel {
		border-top: $border-width-base $border-style-base $border-color-base;
		border-bottom: $border-width-base $border-style-base $border-color-base;

		&>.ysyz-collapse-header {
			border-bottom: none !important;
		}

		&>.ysyz-collapse-content {
			background-color: transparent;
			padding-top: 0 !important;
		}
	}
}
</style>
