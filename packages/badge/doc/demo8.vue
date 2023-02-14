<template>
	<ysyz-badge count="3" :offset="[10, 10]">
		<a href="javascript:;" class="demo-badge"></a>
	</ysyz-badge>
	<ysyz-badge dot :offset="[10, 10]">
		<a href="javascript:;" class="demo-badge"></a>
	</ysyz-badge>
	<ysyz-badge :offset="[10, 10]">
		<a href="javascript:;" class="demo-badge"></a>
		<template #count>offset</template>
	</ysyz-badge>
</template>

<script setup>

</script>

<style>

</style>
