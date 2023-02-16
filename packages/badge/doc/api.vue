<template>
	<h3>Badge Props</h3>
	<ysyz-table border size="small" :columns="badgeProps.columns" :data="badgeProps.data" />
	<h3>Badge Slots</h3>
	<ysyz-table border size="small" :columns="badgeSlots.columns" :data="badgeSlots.data" />
</template>

<script setup lang="ts">
import { PropsAPI, SlotsAPI } from '../../APIDoc';

const badgeProps = new PropsAPI();
badgeProps.pushToData('count', '显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏', 'Number', '-');
badgeProps.pushToData('overflow-count', '展示封顶的数字值', 'Number | String', '99');
badgeProps.pushToData('dot', '不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0', '	Boolean', 'false');

const badgeSlots = new SlotsAPI();
badgeSlots.pushToData('count', '自定义角标显示内容（去角标背景），数值 count 将无效。');
</script>

<style>

</style>
