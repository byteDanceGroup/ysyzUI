<template>
	<h3>Table Props</h3>
	<ysyz-table border size="small" :columns="tableProps.columns" :data="tableProps.data" />
</template>

<script lang="ts" setup>
import { PropsAPI } from '../../APIDoc';

const tableProps = new PropsAPI();
tableProps.pushToData('data', '显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例特定样式。', 'Array', '[]');
tableProps.pushToData('columns', '表格列的配置描述，具体项见后文', 'Array', '[]');
tableProps.pushToData('stripe', '是否显示间隔斑马纹', 'Boolean', 'false');
tableProps.pushToData('border', '是否显示纵向边框', 'Boolean', 'false');
tableProps.pushToData('hide-header', '是否隐藏表头', 'Boolean', 'false');
tableProps.pushToData('able-hover', '开启鼠标悬停时的高亮', 'Boolean', 'false');
tableProps.pushToData('highlight-row', '是否支持高亮选中的行，即单选', 'Boolean', 'false');
tableProps.pushToData('size', '表格尺寸，可选值为 large、small、default 或者不填', 'String', 'default');
tableProps.pushToData('no-data-text', '数据为空时显示的提示内容', 'String', '暂无数据');

</script>

<style></style>
