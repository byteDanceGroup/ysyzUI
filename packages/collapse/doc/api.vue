<template>
	<h3>Collapse Props</h3>
	<ysyz-table :columns="collapseProps.columns" :data="collapseProps.data" />
	<h3>Collapse Events</h3>
	<ysyz-table :columns="collapseEvents.columns" :data="collapseEvents.data" />
	<h3>Panel Props</h3>
	<ysyz-table :columns="panelProps.columns" :data="panelProps.data" />
</template>

<script lang="ts" setup>
interface apiTable {
	columns: Record<string, any>[],
	data: Record<string, any>[],
}

const propsCol: Record<string, any>[] = [
	{
		title: '属性',
		key: 'attribute',
	},
	{
		title: '说明',
		key: 'explaination',
	},
	{
		title: '类型',
		key: 'type',
	},
	{
		title: '默认值',
		key: 'default',
	}
];

const eventsCol = [
	{
		title: '事件名',
		key: 'eventName',
	},
	{
		title: '说明',
		key: 'explaination',
	},
	{
		title: '返回值',
		key: 'returnValue',
	}
];

const collapseProps: apiTable = {
	columns: propsCol,
	data: [
		{
			attribute: 'model-value',
			explaination: '当前激活的面板的 name，可以使用 v-model 双向绑定',
			type: 'Array',
			default: 'String',
		},
		{
			attribute: 'accordion',
			explaination: '是否开启手风琴模式，开启后每次至多展开一个面板',
			type: 'Boolean',
			default: 'false',
		},
		{
			attribute: 'simple',
			explaination: '是否开启简洁模式',
			type: 'Boolean',
			default: 'false',
		},
	]
}

const collapseEvents: apiTable = {
	columns: eventsCol,
	data: [
		{
			eventName: 'on-change',
			explaination: '切换面板时触发，返回当前已展开的面板的 key，格式为数组',
			returnValue: '[]',
		}
	],
}

const panelProps: apiTable = {
	columns: propsCol,
	data: [
		{
			attribute: 'name',
			explaination: '当前面板的 name，与 Collapse的 value 对应，不填为索引值',
			type: 'String',
			default: 'index',
		}
	],
}
</script>

<style scoped>
h3 {
	margin: 30px auto;
}
</style>
