<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const preview = defineAsyncComponent(() => import('../../../src/components/preview.vue'));
const demo1 = defineAsyncComponent(() => import('./demo1.vue'));
const demo2 = defineAsyncComponent(() => import('./demo2.vue'));
const demo3 = defineAsyncComponent(() => import('./demo3.vue'));
const demo4 = defineAsyncComponent(() => import('./demo4.vue'));
const demo5 = defineAsyncComponent(() => import('./demo5.vue'));
</script>

<template>
	<ysyz-card dis-hover>
		<demo1 />
		<ysyz-divider content-position="left">基础用法</ysyz-divider>
		<p>
			宫格共包含两个组件：Grid 和 GridItem。<br />
			设置Grid属性 col 可以指定最大支持的列数。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="grid" demo-name="demo1" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo2 />
		<ysyz-divider content-position="left">宽高一致</ysyz-divider>
		<p>
			属性 square 为 true，宫格的高度会与宽度一致，并会自动适应窗口的改变。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="grid" demo-name="demo2" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo3 />
		<ysyz-divider content-position="left">内容垂直居中</ysyz-divider>
		<p>
			设置属性 center 为 true，宫格的内容将垂直居中显示。<br />
			该设置需要 GridItem 具有高度，比如开启宽高一致属性 square。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="grid" demo-name="demo3" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo4 />
		<ysyz-divider content-position="left">是否显示边框</ysyz-divider>
		<p>
			设置属性 border 可以控制是否显示边框，默认为显示 true 。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="grid" demo-name="demo4" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo5 />
		<ysyz-divider content-position="left">悬停效果</ysyz-divider>
		<p>
			设置属性 hover 为 true 可以开启鼠标悬停时的效果，会有一个浮起的阴影。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="grid" demo-name="demo5" />
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