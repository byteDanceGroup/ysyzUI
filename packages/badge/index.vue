<template>
	<div class="ysyz-badge">
		<div v-show="statusShow">
			<span class="ysyz-badge-status"></span>
			{{ props.text }}
		</div>
		<div v-show="!statusShow">
			<span v-show="slotIndex === 3" :class="[props.className, 'ysyz-badge-tip']" :style="{ position: pos }">
				{{ content }}
			</span>
			<span v-show="slotIndex === 2" :class="{ 'ysyz-badge-content': slots.count }" :style="{ position: pos }">
				<slot name="count"></slot>
			</span>
			<span v-show="slotIndex === 1" class="ysyz-badge-dot"></span>
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots, onMounted } from 'vue';

enum Status {
	success,
	processing,
	default,
	error,
	warning
}

enum Type {
	success,
	primary,
	normal,
	error,
	warning,
	info,
}

interface Badge {
	count?: number | string,
	overflowCount?: number | string,
	dot?: boolean,
	className?: string,
	type?: Type, //
	showZero?: boolean,
	status?: Status,
	text?: string,
	offset?: [left: number, right: number], //
	color?: string, //
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
	color: undefined,
});

const slots = useSlots();

const statusShow = computed(() => {
	if (props.status)
		return props.status in Status;
	return false;
});

const pos = computed(() => {
	if (!slots.default)
		return 'unset';
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

	.ysyz-badge-dot {
		height: 8px;
		width: 8px;
		top: -4px;
		right: -4px;
	}

	.ysyz-badge-tip {
		color: white;
		height: 20px;
		line-height: 20px;
		padding: 0 6px;
		right: -10px;
		top: -10px;
	}

	.ysyz-badge-content {
		position: absolute;
		top: -15%;
		left: 65%;
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
}
</style>
