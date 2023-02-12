<template>
	<ysyz-badge count="10" />
	<ysyz-badge count="20" class-name="demo-badge-alone" />
	<ysyz-badge>
		<template #count>hhh</template>
	</ysyz-badge>
</template>

<script>

</script>

<style>
.demo-badge-alone {
	background: #5cb85c !important;
}
</style>
