<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const preview = defineAsyncComponent(() => import('../../../src/components/preview.vue'));
const demo1 = defineAsyncComponent(() => import('./demo1.vue'));
const demo2 = defineAsyncComponent(() => import('./demo2.vue'));
const demo3 = defineAsyncComponent(() => import('./demo3.vue'));
const demo4 = defineAsyncComponent(() => import('./demo4.vue'));
const demo5 = defineAsyncComponent(() => import('./demo5.vue'));
const demo6 = defineAsyncComponent(() => import('./demo6.vue'));
const demo7 = defineAsyncComponent(() => import('./demo7.vue'));
const demo8 = defineAsyncComponent(() => import('./demo8.vue'));
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
	<ysyz-card dis-hover>
		<demo4 />
		<ysyz-divider content-position="left">隐藏表头</ysyz-divider>
		<p>
			可以设置 hide-header 的值来显示或隐藏表头。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="table" demo-name="demo4" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo5 />
		<ysyz-divider content-position="left">斑马纹</ysyz-divider>
		<p>
			设置属性 stripe ，表格会间隔显示不同颜色，用于区分不同行数据。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="table" demo-name="demo5" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo6 />
		<ysyz-divider content-position="left">空数据</ysyz-divider>
		<p>
			属性 no-data-text 的值即为数据为空时显示的提示内容
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="table" demo-name="demo6" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo7 />
		<ysyz-divider content-position="left">悬停高亮</ysyz-divider>
		<p>
			设置属性 able-hover 的值，开启或关闭悬停高亮功能
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="table" demo-name="demo7" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo8 />
		<ysyz-divider content-position="left">点击选中</ysyz-divider>
		<p>
			设置属性 highlight-row 的值，开启或关闭“点击后可选中某行”的功能
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="table" demo-name="demo8" />
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