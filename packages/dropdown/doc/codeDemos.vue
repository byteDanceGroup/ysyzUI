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
			需要配合 DropdownMenu 和 DropdownItem 两个组件来使用，并且给列表设置具名 slot 为 list。<br />
			触发对象可以是链接、按钮等各种元素。<br />
			本例还展示了禁用项和分隔线。<br />
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="dropdown" demo-name="demo1" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo2 />
		<ysyz-divider content-position="left">对齐方向</ysyz-divider>
		<p>
			通过设置属性 placement 可以更改下拉菜单出现的方向，支持 12 个方向，详见 API。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="dropdown" demo-name="demo2" />
	</ysyz-card>
	<ysyz-card dis-hover>
		<demo3 />
		<ysyz-divider content-position="left">触发方式</ysyz-divider>
		<p>
			通过设置属性 trigger 可以更改触发方式，可选项为 click 、 hover(默认)。<br />
			触发方式设置为 custom 自定义时，需手动设置 visible 属性来控制下拉框的显示。
		</p>
		<ysyz-divider lineType="dashed"></ysyz-divider>
		<preview comp-name="dropdown" demo-name="demo3" />
	</ysyz-card>
</template>

<style lang="scss">
.ysyz-card-disHover:not(:last-child) {
	margin-bottom: 30px;
}

.horizontal.solid {
	margin: 25px 0;
}
</style>
