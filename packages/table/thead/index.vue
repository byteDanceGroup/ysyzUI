<!-- 此文件只被其他组件依赖，不直接导出为组件 -->
<template>
	<thead v-show="!hideHeader" class="ysyz-thead">
		<tr>
			<th v-for="column in props.columns" :key="column.key" :style="{ width: getWidth(column, columns.length) }">
				<div>{{ column.title }}</div>
			</th>
		</tr>
	</thead>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
interface Column {
	title: string,
	key: string | number,
	width?: number,
	notAverage?: boolean,
}

interface Thead {
	columns: Column[],
}

const hideHeader = inject('hideHeader') as boolean;

const props = withDefaults(defineProps<Thead>(), {
	columns: () => [],
});

function getWidth(item: Column, length: number) {
	if (item.width)
		return item.width + 'px';
	if (!item.notAverage) return (100 / length) + '%';
}
</script>

<style lang="scss" scoped>
.ysyz-thead {
	background-color: $table-thead-bg;

	tr {
		text-align: left;
	}

	th {
		box-sizing: border-box;
		border-bottom: $border-width-base $border-style-base $border-color-split;
		height: 48px;
		padding: 8px 0;

		div {
			padding: 0 18px;
		}
	}
}
</style>