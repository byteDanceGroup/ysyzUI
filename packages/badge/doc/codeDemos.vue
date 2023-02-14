<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const preview = defineAsyncComponent(() => import('../../../src/components/preview.vue'));
const demo1 = defineAsyncComponent(() => import('./demos/demo1.vue'));
const demo2 = defineAsyncComponent(() => import('./demos/demo2.vue'));
const demo3 = defineAsyncComponent(() => import('./demos/demo3.vue'));
const demo4 = defineAsyncComponent(() => import('./demos/demo4.vue'));
const demo5 = defineAsyncComponent(() => import('./demos/demo5.vue'));
const demo6 = defineAsyncComponent(() => import('./demos/demo6.vue'));
const demo7 = defineAsyncComponent(() => import('./demos/demo7.vue'));
const demo8 = defineAsyncComponent(() => import('./demos/demo8.vue'));
</script>

<template>
	<ysyz-card dis-hover>
		<demo1 />
		<ysyz-divider content-position="left">基础用法</ysyz-divider>
		<p>
			最简单的使用方法。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="badge" demo-name="demo1" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo2 />
		<ysyz-divider content-position="left">小红点</ysyz-divider>
		<p>
			强迫症患者慎用！
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="badge" demo-name="demo2" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo3 />
		<ysyz-divider content-position="left">封顶数字</ysyz-divider>
		<p>
			通过设置 overflow-count 属性设置一个封顶值，当超过时，会显示 ${overflowCount}+
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="badge" demo-name="demo3" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo4 />
		<ysyz-divider content-position="left">独立使用及自定义样式</ysyz-divider>
		<p>
			可以没有 slot 独立展示。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="badge" demo-name="demo4" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo5 />
		<ysyz-divider content-position="left">自定义内容</ysyz-divider>
		<p>
			设置 text 属性，可以自定义显示内容。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="badge" demo-name="demo5" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo6 />
		<ysyz-divider content-position="left">状态点</ysyz-divider>
		<p>
			用于表示状态的小圆点。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="badge" demo-name="demo6" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo7 />
		<ysyz-divider content-position="left">预设颜色</ysyz-divider>
		<p>
			使用 type 属性，可以设置不同的颜色。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="badge" demo-name="demo7" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo8 />
		<ysyz-divider content-position="left">角标偏移</ysyz-divider>
		<p>
			使用 offset 属性，可以设置不同的偏移坐标。<br />
			offset: [offsetX: number, offsetY: number]
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="badge" demo-name="demo8" />
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
