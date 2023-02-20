<template>
	<table :class="tableClassObject">
		<ysyz-thead :columns="props.columns"></ysyz-thead>
		<ysyz-tbody :columns="props.columns" :data="props.data"></ysyz-tbody>
	</table>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, computed, provide } from 'vue';
const ysyzThead = defineAsyncComponent(() => import('./thead/index.vue'));
const ysyzTbody = defineAsyncComponent(() => import('./tbody/index.vue'));

enum Size {
	small, default, large,
}

interface Table {
	data: Record<string, string>[],
	columns: { title: string, key: string, width?: number }[],
	stripe?: boolean,
	border?: boolean,
	hideHeader?: boolean,
	size?: keyof typeof Size,
	noDataText?: string,
	ableHover?: boolean,
	highlightRow?: boolean,
	width?: number | string, // * 表格宽度，单位 px
	height?: number | string, // * 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头
	maxHeight?: number | string, // * 表格最大高度，单位 px，设置后，如果表格内容大于此值，会固定表头
	rowClassName?: boolean, // * 行的 className 的回调方法，传入参数：row：当前行数据 index：当前行的索引
}

const props = withDefaults(defineProps<Table>(), {
	data: () => [],
	columns: () => [],
	stripe: false,
	border: false,
	hideHeader: false,
	ableHover: false,
	highlightRow: false,
	size: 'default',
	noDataText: '暂无数据',
	width: 'auto', // *
	height: undefined, // *
	maxHeight: undefined, // *
});

const tableClassObject = computed(() => {
	if (props.size in Size === false)
		props.size = Size[Size.default] as keyof typeof Size;
	return {
		'ysyz-table': true,
		'ysyz-table-border': props.border,
		'ysyz-table-small': Size[props.size] === Size.small,
		'ysyz-table-large': Size[props.size] === Size.large,
	}
});

provide('hideHeader', props.hideHeader);
provide('stripe', props.stripe);
provide('noDataText', props.noDataText);
provide('ableHover', props.ableHover);
provide('highlightRow', props.highlightRow);
</script>

<style lang="scss">
.ysyz-table {
	width: 100%;
	margin: 0 auto;
	border-collapse: collapse;
}

.ysyz-table-small {
	font-size: 12px;
}

.ysyz-table-large {
	font-size: 16px;
}

.ysyz-table-border {

	&>.ysyz-tbody,
	&>.ysyz-thead {
		border-left: $border-width-base $border-style-base $border-color-split;
	}

	&>.ysyz-tbody>tr>td,
	&>.ysyz-thead>tr>th {
		border-right: $border-width-base $border-style-base $border-color-split;
	}
}
</style>
