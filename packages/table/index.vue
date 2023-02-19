<template>
	<table :class="tableClassObject">
		<ysyz-thead :columns="props.columns"></ysyz-thead>
		<ysyz-tbody :columns="props.columns" :data="props.data"></ysyz-tbody>
	</table>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, computed } from 'vue';
const ysyzThead = defineAsyncComponent(() => import('./thead/index.vue'));
const ysyzTbody = defineAsyncComponent(() => import('./tbody/index.vue'));

enum Size {
	small, default, large,
}

interface Table {
	data: Record<string, string>[],
	columns: { title: string, key: string, width?: number }[],
	stripe?: boolean, // * 是否显示间隔斑马纹
	border?: boolean,
	'show-header'?: boolean, // * 是否显示表头
	width?: number | string, // * 表格宽度，单位 px
	height?: number | string, // * 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头
	'max-height'?: number | string, // * 表格最大高度，单位 px，设置后，如果表格内容大于此值，会固定表头
	'disable-hover'?: boolean, // * (此处改为，开启悬停高亮) 禁用鼠标悬停时的高亮
	'highlight-row'?: boolean, // * 是否支持高亮选中的行，即单选
	'row-class-name'?: boolean, // * 行的 className 的回调方法，传入参数：row：当前行数据 index：当前行的索引
	size?: keyof typeof Size,
	'no-data-text'?: string, // * 数据为空时显示的提示内容
}

const props = withDefaults(defineProps<Table>(), {
	data: () => [],
	columns: () => [],
	stripe: false,
	border: false,
	'show-header': true,
	width: 'auto',
	height: undefined,
	'max-height': undefined,
	'disable-hover': false,
	'highlight-row': false,
	'row-class-name': undefined,
	size: 'default',
	'no-data-text': '暂无数据',
});

const emits = defineEmits([

]);


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
