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

interface Table {
	data: Record<string | number, any>[],
	columns: { title: string, key: string | number }[],
	stripe?: boolean, // 是否显示间隔斑马纹
	border?: boolean,
	'show-header'?: boolean, // 是否显示表头
	width?: number | string, // 表格宽度，单位 px
	height?: number | string, // 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头
	'max-height'?: number | string, // 表格最大高度，单位 px，设置后，如果表格内容大于此值，会固定表头
	loading?: boolean, // 表格是否加载中
	'disable-hover'?: boolean, // 禁用鼠标悬停时的高亮
	'highlight-row'?: boolean, // 是否支持高亮选中的行，即单选
	'row-class-name'?: boolean, // 行的 className 的回调方法，传入参数：row：当前行数据 index：当前行的索引
	size?: 'large' | 'small' | 'default', // 表格尺寸，可选值为 large、small、default 或者不填
	'no-data-text'?: string, // 数据为空时显示的提示内容
	'no-filtered-data-text'?: string, // 筛选数据为空时显示的提示内容
	draggable?: false, // 是否开启拖拽调整行顺序，需配合 @on-drag-drop 事件使用
	'tooltip-theme'?: 'dark' | 'light', // 列使用 tooltip 时，配置它的主题，可选值为 dark 或 light
	'tooltip-max-width'?: number, // 列使用 tooltip 时，配置 Tooltip 的最大宽，默认是 300
	'row-key'?: boolean | string, // 是否强制使用内置的 row-key，开启后可能会影响性能
	'span-method'?: () => any, // 合并行或列的计算方法
	'show-summary'?: boolean, // 是否在表尾显示合计行
	'sum-text'?: string, // 合计行第一列的文本
	'summary-method'?: () => any, // 自定义的合计计算方法
	'indent-size'?: number, // 树形数据缩进宽度，单位 px
	'load-data'?: () => any, // 异步加载树形数据的方法，详见示例
	'update-show-children'?: boolean, // 展开树形数据时，是否需要更新 _showChildren 字段，使用异步树形数据时建议开启
	'context-menu'?: boolean, // 当前行点击右键是否会阻止默认行为
	'show-context-menu'?: boolean, // 点击右键弹出菜单，需配合 slot contextMenu 一起使用，详见示例
	'fixed-shadow'?: 'auto' | 'show' | 'hide', // 列固定时，阴影显示规则，可选值为 auto、show、hide
	'auto-close-contextmenu'?: boolean, // 点击右键菜单项是否自动关闭右键菜单
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
	loading: false,
	'disable-hover': false,
	'highlight-row': false,
	'row-class-name': undefined,
	size: 'default',
	'no-data-text': '暂无数据',
	'no-filtered-data-text': '暂无筛选结果',
	draggable: false,
	'tooltip-theme': 'dark',
	'tooltip-max-width': 300,
	'row-key': false,
	'span-method': undefined,
	'show-summary': false,
	'sum-text': '合计',
	'summary-method': undefined,
	'indent-size': 16,
	'load-data': undefined,
	'update-show-children': false,
	'context-menu': false,
	'show-context-menu': false,
	'fixed-shadow': 'show',
	'auto-close-contextmenu': true,
});

const emits = defineEmits([

]);

const tableClassObject = computed(() => {
	if (!props.size) props.size = 'default';
	return {
		'ysyz-table': true,
		'ysyz-table-border': props.border,
		'ysyz-table-small': props.size === 'small',
		'ysyz-table-large': props.size === 'large',
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
