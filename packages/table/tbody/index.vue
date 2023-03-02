<!-- 此文件只被其他组件依赖，不直接导出为组件 -->
<template>
	<tbody :class="tbodyClassObject">
		<tr v-for="(item, key) in props.data" :key="key" @click="handleClick(key)"
			:class="{ 'ysyz-tr-selected': judgeSelected(key) }">
			<td v-for="column in props.columns" :key="column.key">
				<div>{{ getContent(item, column.key) }}</div>
			</td>
		</tr>
	</tbody>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue';

interface Tbody {
	columns: { title: string, key: string | number }[],
	data?: Record<string, any>[],
}

const props = withDefaults(defineProps<Tbody>(), {
	columns: () => [],
	data: () => [],
});

const tbodyClassObject: Record<string, boolean> = {
	'ysyz-tbody': true,
	'ysyz-tbody-stripe': inject('stripe') as boolean,
	'ysyz-tbody-hover': inject('ableHover') as boolean,
}

const selectedNum = ref<number>(-1);

const highlightRow = inject('highlightRow') as boolean;

function judgeSelected(key: number) {
	return key === selectedNum.value;
}

function getContent(item: Record<string, any>, key: string | number) {
	if (!item[key] || item[key] === '') return inject('noDataText');
	return item[key];
}

function handleClick(key: number) {
	if (highlightRow)
		selectedNum.value = key;
}
</script>

<style lang="scss" scoped>
.ysyz-tbody {
	tr {
		text-align: left;
	}

	td {
		box-sizing: border-box;
		border-bottom: $border-width-base $border-style-base $border-color-split;
		height: 48px;
		padding: 8px 0;

		div {
			padding: 0 18px;
		}
	}
}

.ysyz-tbody-stripe {
	tr:nth-child(even) {
		background-color: $table-thead-bg;
	}
}

.ysyz-tbody-hover {
	tr:hover {
		background-color: $table-td-hover-bg;
	}
}

.ysyz-tr-selected {
	background-color: $table-td-hover-bg;
}
</style>