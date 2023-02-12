<!-- 此文件只被其他组件依赖，不直接导出为组件 -->
<template>
	<tbody class="ysyz-tbody">
		<tr v-for="(item, key) in props.data" :key="key">
			<td :style="{ width: `${100 / props.columns.length}%` }" v-for="column in props.columns" :key="column.key">
				<div>{{ item[column.key] }}</div>
			</td>
		</tr>
	</tbody>
</template>

<script lang="ts" setup>
interface Tbody {
	columns: { title: string, key: string | number }[],
	data?: Record<string, any>[],
}
const props = withDefaults(defineProps<Tbody>(), {
	columns: () => [],
	data: () => [],
});
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
</style>