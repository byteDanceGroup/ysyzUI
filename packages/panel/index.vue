<template>
	<li :class="['ysyz-panel', {
		'ysyz-panel-show': isActive,
	}]">
		<div class="ysyz-collapse-header" @click="toggle(props.name);">
			<span class="ysyz-collapse-header-icon">{{ icon }}</span>
			<span class="ysyz-collapse-header-title">
				<slot></slot>
			</span>
		</div>
		<div ref="panelContent" class="ysyz-collapse-content" :style="{ height: height }">
			<slot name="content"></slot>
		</div>
</li>
</template>
<script lang="ts" setup>
import { ref, inject, computed, onMounted } from 'vue';

interface Panel {
	name: string,
}

const toggle = inject('toggle') as (name: string) => void;
const getActiveKey = inject('getActiveKey') as () => string[];

const props = withDefaults(defineProps<Panel>(), {
	name: undefined,
});

const panelContent = ref();
const icon = ref<string>('→');
const mounted = ref<boolean>(false);
const height = ref<string>('0px');

const isActive = computed(() => {
	let list = getActiveKey(); // 每次重新渲染，该计算属性亦将重新执行一次
	if (!mounted.value) return false;
	if (list.includes(props.name)) {
		if (height.value === 'auto') return true;
		// 在激活列表中，且当前高度为0，则需更新高度
		height.value = panelContent.value.scrollHeight + 'px';
		setTimeout(() => { height.value = 'auto' }, 300);
	} else {
		if (height.value !== 'auto') return false;
		// 不在激活列表中，但高度不为0，则需要更新高度
		height.value = (panelContent.value.scrollHeight - 32) + 'px';
		setTimeout(() => { height.value = '0px' }, 10);
	}
	return list.includes(props.name);
});

onMounted(() => {
	mounted.value = true;
});
</script>

<style lang="scss" scoped>
.ysyz-panel {
	line-height: 21px;

	&>.ysyz-collapse-header {
		color: #666;
		line-height: 38px;
		padding-left: $padding-md;
		position: relative;
		border-bottom: $border-width-base $border-style-base $border-color-base;
		cursor: pointer;

		.ysyz-collapse-header-icon {
			position: absolute;
			top: -1px;
		}

		.ysyz-collapse-header-title {
			margin-left: $padding-lg;
		}
	}

	&>.ysyz-collapse-content {
		overflow: hidden;
		background-color: $white;
		padding: 0 $padding-md;
		transition: height .3s ease-in-out, padding .3s ease-in-out;
	}
}

.ysyz-panel-show {
	&>.ysyz-collapse-content {
		padding: $padding-md;
	}

	// .ysyz-collapse-header-icon {
	// 	transform: rotateY(90deg);
	// }
}
</style>