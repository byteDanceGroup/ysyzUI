<script setup lang="tsx">// 此处使用了tsx语法
import { defineProps } from 'vue';
import { ButtonSize, ButtonType, HTMLtype } from './PropertyTypes';

interface Button { // 定义按钮接口
	content?: string | number, // 按钮内的文字内容，此外并未使用slot
	onClick?: (event?: MouseEvent) => void,
	ghost?: boolean,
	long?: boolean,
	circle?: boolean,
	disable?: boolean,
	loading?: boolean,
	type?: string,
	html_type?: string,
	size?: string,
}

const props = withDefaults(defineProps<Button>(), { // 定义props，并给出默认值
	content: '　', // 全角空格，防止高度塌陷
	onClick: () => { },
	ghost: false,
	long: false,
	circle: false,
	disable: false,
	loading: false,
	type: 'default',
	size: 'default',
	html_type: 'button'
});

// 生成特殊类名、属性。若给定字段不在联合类型中，则选择“默认”
const typeClass = 'button-type-' + (props.type in ButtonType ? props.type : 'default');
const sizeClass = 'button-size-' + (props.size in ButtonSize ? props.size : 'default');
const html_type = props.html_type in HTMLtype ? props.html_type : 'button';

const render = () => ( // TSX render 函数

	<button
		class={[
			typeClass,
			sizeClass,
			props.long && 'long-button',
			props.loading && 'loading-button',
			props.ghost && 'ghost-button',
			props.circle && 'circle-button'
		]}
		disabled={props.disable}
		onClick={props.onClick}
		type={html_type as 'button' | 'submit' | 'reset'}
	>
		{props.content}
	</button>

);

</script>

<template>
	<render />
</template>

<style scoped lang="scss">
button {
	border: none;
	outline: none;
	border-radius: 6px;
	color: #fff;
	cursor: pointer;
	background-color: #fff;
}

button:hover {
	outline: 1px solid #0f96dc;
}

.button-type-default {
	color: #000;
	outline: 1px black solid;
}

.button-type-primary {
	background-color: #409eff;
}

.button-type-dashed {
	border: 1px black dashed;
	color: black;
}

.button-type-dashed:hover {
	outline: 1px black dashed;
}

.button-type-text {
	background-color: transparent;
	color: black;
}

.button-type-text:hover {
	outline: none;
	color: #409eff
}

.button-type-info {
	background-color: #909399;
}

.button-type-success {
	background-color: #67c23a;
}

.button-type-warning {
	background-color: #e6a23c;
}

.button-type-error {
	background-color: #f56c6c;
}

.button-size-default {
	width: 90px;
	height: 35px;
}

.button-size-small {
	width: 60px;
	height: 23px;
	border-radius: 3px;
	font-size: xx-small;
}

.button-size-large {
	width: 125px;
	height: 49px;
	border-radius: 7px;
	font-size: large;
}

.ghost-button {
	background-color: transparent;
	color: #ffffff;
	outline: 1px solid #fff;
}

.ghost-button:hover {
	background-color: #d9e2e0;
	color: #0f96dc;
	outline: 1px solide #0f96dc;
}

.long-button {
	width: 100%;
}

.circle-button {
	border-radius: 999em;
}
</style>
