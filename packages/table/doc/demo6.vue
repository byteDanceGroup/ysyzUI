<template>
	<ysyz-table :columns="columns" :data="data" no-data-text="这里什么都没有"></ysyz-table>
</template>

<script lang="ts" setup>
const columns = [
	{ // 下标为0，表示第一列。
		title: 'Name', // 第一列的表头标题为“Name”
		key: 'name', // 第一列的key为“name”
	},
	{
		title: 'Age',
		key: 'age',
	},
	{
		title: 'Adress',
		key: 'address',
	},
];
const data = [
	{ // 下标为0，表示第一行
		name: 'John Brown', // “John Brown”将插在key为“name”的那一列
		age: 18,
		address: 'New York No. 1 Lake Park',
		date: '2016-10-03' // “2016-10-03”将插在key为“date”的那一列，但不存在key为“date”的列，故不显示
	},
	{
		name: 'Jim Green',
		age: 24,
		address: '',
		date: '2016-10-01'
	},
	{
		name: 'Joe Black',
		age: 30,
		address: 'Sydney No. 1 Lake Park',
		date: undefined,
	},
	{
		name: 'Jon Snow',
		address: 'Ottawa No. 2 Lake Park',
		date: '2016-10-04'
	}
];
</script>

<style></style>
