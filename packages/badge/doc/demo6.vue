<template>
	<div class="badge-demo6-row">
		<ysyz-badge status="success" />
		<ysyz-badge status="processing" />
		<ysyz-badge status="default" />
		<ysyz-badge status="error" />
		<ysyz-badge status="warning" />
	</div>
	<div class="badge-demo6-column">
		<ysyz-badge status="success" text="Success" />
		<ysyz-badge status="error" text="Error" />
		<ysyz-badge status="default" text="Default" />
		<ysyz-badge status="processing" text="Processing" />
		<ysyz-badge status="warning" text="Warning" />
	</div>
</template>

<script>

</script>

<style>
.badge-demo6-column {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 25px;
	height: 175px;
}
</style>
