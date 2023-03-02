<template>
	<li :class="dropdownItemClassObject">
		<slot></slot>
	</li>
</template>

<script lang="ts" setup>
interface DropdownItem {
	name?: string,
	disabled?: boolean,
	divided?: boolean,
	selected?: boolean,
}

const props = withDefaults(defineProps<DropdownItem>(), {
	name: undefined,
	disabled: false,
	divided: false,
	selected: false,
});

const dropdownItemClassObject: Record<string, boolean> = {
	'ysyz-dropdown-item': true,
	'ysyz-dropdown-item-disabled': props.disabled,
	'ysyz-dropdown-item-divided': props.divided,
	'ysyz-dropdown-selected': props.selected,
}
</script>

<style lang="scss" scoped>
.ysyz-dropdown-item {
	padding: 7px 16px;
	font-size: $font-size-base;
	transition: background-color 0.5s;
	cursor: pointer;

	&:hover {
		background-color: #f3f3f3;
	}
}

.ysyz-dropdown-item-disabled {
	color: $btn-disable-color;

	&:hover {
		cursor: no-drop;
		background-color: unset;
	}
}

.ysyz-dropdown-item-divided {
	border-top: $border-width-base $border-style-base $border-color-split;
	margin-top: 5px;
}
</style>
