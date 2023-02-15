<template>
	<h3>Grid Props</h3>
	<ysyz-table border size="small" :columns="gridProps.columns" :data="gridProps.data" />
	<h3>GridItem Slots</h3>
	<ysyz-table border size="small" :columns="gridItemSlots.columns" :data="gridItemSlots.data" />
</template>

<script lang="ts" setup>
import { PropsAPI, SlotsAPI } from '../../APIDoc';

const gridProps = new PropsAPI();
gridProps.pushToData('col', '最大支持的列数', 'Number', '3');
gridProps.pushToData('square', '是否宽高一致', 'Boolean', 'false');
gridProps.pushToData('padding', '内容的间距', 'String', '24px');
gridProps.pushToData('center', '内容是否垂直居中，GridItem 需有高度', 'Boolean', 'false');
gridProps.pushToData('border', '是否显示边框', 'Boolean', 'true');
gridProps.pushToData('hover', '是否开启鼠标悬停效果', 'Boolean', 'false');

const gridItemSlots = new SlotsAPI();
gridItemSlots.pushToData('default', '默认插槽内容');
</script>

<style>

</style>
