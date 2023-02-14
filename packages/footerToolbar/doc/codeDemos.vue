<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const preview = defineAsyncComponent(() => import('../../../src/components/preview.vue'));
const demo1 = defineAsyncComponent(() => import('./demo1.vue'));
</script>

<template>
	<ysyz-card dis-hover>
		<demo1 />
		<ysyz-divider content-position="left">基础用法</ysyz-divider>
		<p>
			浮动固定页脚。（请看当前页脚）
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="footerToolbar" demo-name="demo1" />
	</ysyz-card>
</template>

<style>
.ysyz-card-disHover:not(:last-child) {
	margin-bottom: 30px;
}

.horizontal.solid {
	margin: 25px 0;
}
</style>
