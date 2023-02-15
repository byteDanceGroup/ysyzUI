<template>
	<!-- 应仿照如下的方式定义"API Table" -->
	<h3>Collapse Props</h3>
	<ysyz-table border size="small" :columns="collapseProps.columns" :data="collapseProps.data" />
	<h3>Collapse Events</h3>
	<ysyz-table border size="small" :columns="collapseEvents.columns" :data="collapseEvents.data" />
	<h3>Panel Props</h3>
	<ysyz-table border size="small" :columns="panelProps.columns" :data="panelProps.data" />
	<h3>Panel Slots</h3>
	<ysyz-table border size="small" :columns="panelSlots.columns" :data="panelSlots.data" />
</template>

<script lang="ts" setup>
import { PropsAPI, EventsAPI, SlotsAPI } from '../../APIDoc';
// IView上"API Table"只有三类，分别是Props、Event、Slots。

// 鼠标悬浮在方法pushToData上可以查看其参数
const collapseProps = new PropsAPI();
collapseProps.pushToData('model-value', '当前激活的面板的 name，可以使用 v-model 双向绑定', 'Array', 'String');
collapseProps.pushToData('accordion', '是否开启手风琴模式，开启后每次至多展开一个面板', 'Boolean', 'false');
collapseProps.pushToData('simple', '是否开启简洁模式', 'Boolean', 'false');

const collapseEvents = new EventsAPI();
collapseEvents.pushToData('on-change', '切换面板时触发，返回当前已展开的面板的 key，格式为数组', '[]');

const panelProps = new PropsAPI();
panelProps.pushToData('name', '当前面板的 name，与 Collapse的 value 对应，不填为索引值', 'String', 'index');

const panelSlots = new SlotsAPI();
panelSlots.pushToData('无', '面板头内容');
panelSlots.pushToData('content', '描述内容');
</script>

<style>

</style>
