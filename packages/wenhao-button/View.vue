<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const WenHaoButton = defineAsyncComponent(() => import('./WenHaoButton.vue'));
</script>

<template>
	<!-- 第一列按钮 -->
	<div class="WenHao-Button-Bar">
		<div>
			<WenHaoButton content="default" />
		</div>
		<div>
			<WenHaoButton content="primary" type="primary" />
		</div>
		<div>
			<WenHaoButton content="dashed" type="dashed" />
		</div>
		<div>
			<WenHaoButton content="text" type="text" />
		</div>
		<div>
			<WenHaoButton content="info" type="info" />
		</div>
		<div>
			<WenHaoButton content="success" type="success" />
		</div>
		<div>
			<WenHaoButton content="warning" type="warning" />
		</div>
		<div>
			<WenHaoButton content="error" type="error" />
		</div>
	</div>
	<!-- 第二列按钮 -->
	<div class="WenHao-Button-Bar">
		<div>
			<WenHaoButton type="primary" size="large" content="large" />
		</div>
		<div>
			<WenHaoButton type="success" size="small" content="samll" />
		</div>
		<div>
			<WenHaoButton :ghost="true" type="error" content="ghost+别的，有bug" />
		</div>
		<div>
			<WenHaoButton :long="true" type="info" content="Long Button" />
		</div>
		<div>
			<WenHaoButton :circle="true" type="warning" content="circle" />
		</div>
		<div>
			<WenHaoButton size="small" :circle="true" content="S circle" />
		</div>
		<div>
			<WenHaoButton type="error" size="large" :circle="true" content="L circle" />
		</div>
		<div>
			<WenHaoButton :circle="true" :ghost="true" content="ghost + circle" />
		</div>
	</div>
</template>

<style scoped lang="scss">
div {
	margin-bottom: 25px;
}

.WenHao-Button-Bar {
	float: left;
	margin-left: 35px;
	margin-top: 15px;
}
</style>
