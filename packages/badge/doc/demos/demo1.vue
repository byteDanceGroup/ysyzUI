<style>
/* 注意：此处并未开启scoped，之后涉及的.demo-badge、.ysyz-badge都拥有如下的样式 */
.demo-badge {
	width: 42px;
	height: 42px;
	background: #eee;
	border-radius: 6px;
	display: inline-block;
}

.ysyz-badge {
	margin-right: 35px;
}
</style>

<template>
	<div>
		<ysyz-badge count="3">
			<a href="javascript:;" class="demo-badge"></a>
		</ysyz-badge>
		<!-- 不设置show-zero，则默认不展示0 -->
		<ysyz-badge count="0" show-zero>
			<a href="javascript:;" class="demo-badge"></a>
		</ysyz-badge>
		<ysyz-badge count="0">
			<a href="javascript:;" class="demo-badge"></a>
		</ysyz-badge>
		<ysyz-badge>
			<a href="javascript:;" class="demo-badge"></a>
			<!-- 这是自定义角标的其中一个方式 -->
			<template #count>
				hello world
			</template>
		</ysyz-badge>
	</div>
</template>

<script setup>

</script>
