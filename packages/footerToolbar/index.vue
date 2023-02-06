<template>
	<div class="ysyz-footer-toolbar">
		<span class="ysyz-footer-toolbar-left">{{ props.extra }}</span>
		<span class="ysyz-footer-toolbar-right">
			<slot></slot>
		</span>
	</div>
</template>

<script lang="ts" setup>
interface FooterToolbar {
	extra?: string,
}
const props = withDefaults(defineProps<FooterToolbar>(), {
	extra: '',
});
</script>

<style lang="scss" scoped>
@import "../../src/style/style.scss";

.ysyz-footer-toolbar {
	box-sizing: border-box;
	width: 100%;
	height: 56px;
	padding: 0 $padding-lg;
	position: fixed;
	bottom: 0;
	right: 0;
	border-top: $border-width-base $border-style-base $border-color-split;
	background-color: #fff;

	&>span {
		line-height: 56px;
	}

	.ysyz-footer-toolbar-left {
		float: left;
	}

	.ysyz-footer-toolbar-right {
		float: right;
	}
}
</style>
