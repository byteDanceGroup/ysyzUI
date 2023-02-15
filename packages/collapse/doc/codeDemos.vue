<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const preview = defineAsyncComponent(() => import('../../../src/components/preview.vue'))
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
			默认可以同时展开多个面板，可以设置默认展开第几个。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="collapse" demo-name="demo1" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo2 />
		<ysyz-divider content-position="left">双向绑定</ysyz-divider>
		<p>
			可以使用 v-model 进行双向绑定，处理激活状态的 Panel 与v-model所绑定的数据始终一致。<br />
			on-change 时间在切换面板时触发，返回当前已展开的面板的 key，格式为数组。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="collapse" demo-name="demo2" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo3 />
		<ysyz-divider content-position="left">手风琴</ysyz-divider>
		<p>
			通过设置属性 accordion 开启手风琴模式，每次只能打开一个面板。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="collapse" demo-name="demo3" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo4 />
		<ysyz-divider content-position="left">面板嵌套</ysyz-divider>
		<p>
			折叠面板可以进行嵌套。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="collapse" demo-name="demo4" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo5 />
		<ysyz-divider content-position="left">简洁模式</ysyz-divider>
		<p>
			设置属性 simple 可以显示为不带边框和背景色的简洁模式。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="collapse" demo-name="demo5" />
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