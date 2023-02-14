<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const preview = defineAsyncComponent(() => import('../../../src/components/preview.vue'));
const demo1 = defineAsyncComponent(() => import('./demo1.vue'));
const demo2 = defineAsyncComponent(() => import('./demo2.vue'));
const demo3 = defineAsyncComponent(() => import('./demo3.vue'));
</script>

<template>
	<ysyz-card dis-hover>
		<demo1 />
		<ysyz-divider content-position="left">基础用法</ysyz-divider>
		<p>
			表格的最简单用法。（详细使用方法见“显示代码”。）
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="table" demo-name="demo1" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo2 />
		<ysyz-divider content-position="left">尺寸</ysyz-divider>
		<p>
			通过设置属性 size 为 large 或 small 可以调整表格尺寸为大或小，默认不填或填写 default 为中。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="table" demo-name="demo2" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo3 />
		<ysyz-divider content-position="left">带边框</ysyz-divider>
		<p>
			添加表格的边框线。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="table" demo-name="demo3" />
	</ysyz-card>
</template>

<style scoped>
.ysyz-card-disHover:not(:last-child) {
	margin-bottom: 30px;
}

.horizontal.solid {
	margin: 25px 0;
}
</style>