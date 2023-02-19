<template>
	<h3>Dropdown Props </h3>
	<ysyz-table border size="small" :columns="dropdownProps.columns" :data="dropdownProps.data" />
	<h3>DropdownItem Props </h3>
	<ysyz-table border size="small" :columns="dropdownSlots.columns" :data="dropdownSlots.data" />
	<h3>DropdownMenu Slots</h3>
	<ysyz-table border size="small" :columns="dropdownItemProps.columns" :data="dropdownItemProps.data" />
	<h3>DropdownMenu Slots</h3>
	<ysyz-table border size="small" :columns="dropdownMenuSlots.columns" :data="dropdownMenuSlots.data" />
</template>

<script lang="ts" setup>
import { PropsAPI, SlotsAPI } from '../../APIDoc';

const dropdownProps = new PropsAPI();
dropdownProps.pushToData('trigger', '触发方式，可选值为 hover（悬停）click（点击）contextMenu（右键）custom（自定义），使用 custom 时，需配合 visible 一起使用', 'String', 'hover')
dropdownProps.pushToData('placement', '下拉菜单出现的位置，可选值为top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end', 'String', 'bottom');

const dropdownSlots = new SlotsAPI();
dropdownSlots.pushToData('无', '主体内容');
dropdownSlots.pushToData('list', '列表内容，一般由 DropdownMenu 承担');

const dropdownItemProps = new PropsAPI();
dropdownItemProps.pushToData('name', '用来标识这一项', 'String', '-');
dropdownItemProps.pushToData('disabled', '禁用该项', 'Boolean', 'false');
dropdownItemProps.pushToData('divided', '显示分割线', 'Boolean', 'false');

const dropdownMenuSlots = new SlotsAPI();
dropdownMenuSlots.pushToData('default', '默认插槽内容'); 
</script>

<style lang="scss" scoped></style>
