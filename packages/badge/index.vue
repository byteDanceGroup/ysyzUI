<template>
	<div class="ysyz-badge">
		<div v-show="statusShow">
			<span :class="['ysyz-badge-status', statusClassName]"></span>
			{{ props.text }}
		</div>
		<div v-show="!statusShow">
			<span v-show="slotIndex === 3" :class="[props.className, typeClassName, 'ysyz-badge-tip']" :style="slotStyle">
				{{ content }}
			</span>
			<span v-show="slotIndex === 2" :class="{ 'ysyz-badge-content': slots.count }" :style="slotStyle">
				<slot name="count"></slot>
			</span>
			<span v-show="slotIndex === 1" class="ysyz-badge-dot" :style="slotStyle"></span>
			<slot></slot>
		</div>
</div>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots, onMounted } from 'vue';

enum Status {
	success, processing, default, error, warning
}

enum Type {
	success, primary, normal, error, warning, info,
}

interface Badge {
	count?: number | string,
	overflowCount?: number | string,
	dot?: boolean,
	className?: string,
	type?: keyof typeof Type,
	status?: keyof typeof Status,
	showZero?: boolean,
	text?: string,
	offset?: [left: number, right: number],
}

const props = withDefaults(defineProps<Badge>(), {
	count: undefined,
	overflowCount: 99,
	dot: false,
	className: undefined,
	type: undefined,
	showZero: false,
	status: undefined,
	text: undefined,
	offset: undefined,
});

const slots = useSlots();

const statusClassName = ref<string>();

const typeClassName = computed(() => {
	if (props.type && props.type in Type)
		return 'ysyz-badge-tip-' + props.type;
	return '';
});

const statusShow = computed(() => {
	if (props.status && props.status in Status) {
		statusClassName.value = 'ysyz-badge-status-' + props.status;
		return true;
	}
	return false;
});

const slotIndex = ref<number>(0);

const content = computed(() => {
	if (statusShow.value || props.dot || slots.count) return "";
	if (props.text) return props.text;
	let cnt = props.count, ovf = props.overflowCount;
	if (typeof cnt === 'string') cnt = parseInt(cnt);
	if (typeof ovf === 'string') ovf = parseInt(ovf);
	if (!cnt) {
		if (cnt === 0 && props.showZero) return "0";
		return "";
	}
	if (!ovf) return '' + cnt;
	return cnt <= ovf ? '' + cnt : ovf + '+';
});

const slotStyle = computed(() => {
	let translateX = 0, translateY = 0;
	if (props.offset) {
		translateX = props.offset[0];
		translateY = props.offset[1];
	}
	let rnt = {
		transform:
			`translateX(calc(50% + ${translateX}px)) translateY(${translateY}px)`
	}
	if (slotIndex.value > 1 && !slots.default) rnt['position'] = 'unset';
	return rnt;
});

onMounted(() => {
	if (props.dot) slotIndex.value = 1;
	else if (slots.count) slotIndex.value = 2;
	else if (content.value !== "") slotIndex.value = 3;
	else slotIndex.value = 0;  // dot优先级最高，<template #count>次之，count的优先级最低
});
</script>

<style lang="scss" scoped>
.ysyz-badge {
	display: inline-block;
	position: relative;
	white-space: nowrap;

	.ysyz-badge-dot,
	.ysyz-badge-tip {
		display: inline-block;
		position: absolute;
		border: $border-width-base $border-style-base white;
		border-radius: 999em;
		background-color: $error;
	}

	.ysyz-badge-tip-primary {
		background-color: $primary;
	}

	.ysyz-badge-tip-normal {
		background-color: $normal-color;
	}

	.ysyz-badge-tip-success {
		background-color: $success;
	}

	.ysyz-badge-tip-warning {
		background-color: $warning;
	}

	.ysyz-badge-tip-error {
		background-color: $error;
	}

	.ysyz-badge-tip-info {
		background-color: $info;
	}



	.ysyz-badge-dot {
		height: 8px;
		width: 8px;
		top: -4px;
		right: 0px;
		transform: translateX(50%);
	}

	.ysyz-badge-tip {
		color: white;
		height: 20px;
		line-height: 20px;
		padding: 0 6px;
		top: -10px;
		right: 0px;
		transform: translateX(50%);
	}

	.ysyz-badge-content {
		position: absolute;
		top: -15%;
		right: 0px;
		transform: translateX(50%);
	}

	.ysyz-badge-status {
		width: 6px;
		height: 6px;
		display: inline-block;
		border-radius: 999em;
		vertical-align: middle;
		position: relative;
		top: -1px;
		background-color: $success;
	}

	.ysyz-badge-status-success {
		background-color: $success;
	}

	.ysyz-badge-status-error {
		background-color: $error;
	}

	.ysyz-badge-status-default {
		background-color: $default;
	}

	.ysyz-badge-status-processing {
		background-color: $processing;
	}

	.ysyz-badge-status-warning {
		background-color: $warning;
	}
}
</style>
