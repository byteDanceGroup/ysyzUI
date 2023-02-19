<template>
	<ul ref="dropdownMenu" v-show="showed" :style="{ height: height, opacity: opacity }" :class="dropdownMenuClassObject">
		<slot></slot>
	</ul>
</template>

<script lang="ts" setup>
import { inject, computed, ref, onMounted, Ref } from 'vue';

enum Placement {
	'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'
}

const opened = inject('opened') as Ref;

const placement = inject('placement') as keyof typeof Placement;

const dropdownMenu = ref();

const mounted = ref<boolean>(false);

const dropdownMenuClassObject: Record<string, boolean> = {
	'ysyz-dropdown-menu': true,
	'ysyz-dropdown-menu-top': Placement[placement] === Placement['top'],
	'ysyz-dropdown-menu-top-start': Placement[placement] === Placement['top-start'],
	'ysyz-dropdown-menu-top-end': Placement[placement] === Placement['top-end'],
	'ysyz-dropdown-menu-bottom': Placement[placement] === Placement['bottom'],
	'ysyz-dropdown-menu-bottom-start': Placement[placement] === Placement['bottom-start'],
	'ysyz-dropdown-menu-bottom-end': Placement[placement] === Placement['bottom-end'],
	'ysyz-dropdown-menu-left': Placement[placement] === Placement['left'],
	'ysyz-dropdown-menu-left-start': Placement[placement] === Placement['left-start'],
	'ysyz-dropdown-menu-left-end': Placement[placement] === Placement['left-end'],
	'ysyz-dropdown-menu-right': Placement[placement] === Placement['right'],
	'ysyz-dropdown-menu-right-start': Placement[placement] === Placement['right-start'],
	'ysyz-dropdown-menu-right-end': Placement[placement] === Placement['right-end'],
}

const height = ref<string>();

const opacity = ref<string>();

const padding = ref<string>();

const showed = computed(() => {
	if (opened.value && mounted) {
		height.value = dropdownMenu.value.scrollHeight + 'px';
		opacity.value = '100%';
		padding.value = '5px 0';
	} else {
		height.value = '0px';
		opacity.value = '0';
		padding.value = '0';
	}
	return true;
});

onMounted(() => {
	mounted.value = true;
});
</script>

<style lang="scss" scoped>
.ysyz-dropdown-menu {
	position: absolute;
	min-width: 100px;
	background-color: #fff;
	z-index: $zindex-select;
	border-radius: 4px;
	box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
	overflow: hidden;
	transition: height 0.3s, opacity, 0.3s, top 0.3s;
}

.ysyz-dropdown-menu-top {
	bottom: 100%;
	transform: translateX(-50%);
	left: 50%;
}

.ysyz-dropdown-menu-top-start {
	bottom: 100%;
	left: 0;
}

.ysyz-dropdown-menu-top-end {
	bottom: 100%;
	right: 0;
}

.ysyz-dropdown-menu-bottom {
	transform: translateX(-50%);
	left: 50%;
}

.ysyz-dropdown-menu-bottom-start {
	left: 0;
}

.ysyz-dropdown-menu-bottom-end {
	right: 0;
}

.ysyz-dropdown-menu-left {
	top: 50%;
	right: 100%;
	transform: translateY(-50%);
}

.ysyz-dropdown-menu-left-start {
	top: 0;
	right: 100%;
}

.ysyz-dropdown-menu-left-end {
	bottom: 0;
	right: 100%;
}

.ysyz-dropdown-menu-right {
	top: 50%;
	left: 100%;
	transform: translateY(-50%);
}

.ysyz-dropdown-menu-right-start {
	top: 0;
	left: 100%;
}

.ysyz-dropdown-menu-right-end {
	bottom: 0;
	left: 100%;
}
</style>
