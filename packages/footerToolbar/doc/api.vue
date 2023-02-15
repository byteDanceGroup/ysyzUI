<template>
	<h3>FooterToolbar Props</h3>
	<ysyz-table border size="small" :columns="footerToolbarProps.columns" :data="footerToolbarProps.data" />
</template>

<script lang="ts" setup>
import { PropsAPI } from '../../APIDoc';

const footerToolbarProps = new PropsAPI();
footerToolbarProps.pushToData('extra', '额外信息，向左对齐', 'String', '-');
</script>

<style>

</style>