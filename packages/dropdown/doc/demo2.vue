<template>
	<div class="demo-dropdown-bar">
		<span>顶部出现：</span>
		<ysyz-dropdown placement="top-start">
			<a href="javascript:;">左对齐</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
		<ysyz-dropdown placement="top">
			<a href="javascript:;">水平居中</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
		<ysyz-dropdown placement="top-end">
			<a href="javascript:;">右对齐</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
	</div>
	<div class="demo-dropdown-bar">
		<span>底部出现：</span>
		<ysyz-dropdown placement="bottom-start">
			<a href="javascript:;">左对齐</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
		<ysyz-dropdown>
			<a href="javascript:;">水平居中</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
		<ysyz-dropdown placement="bottom-end">
			<a href="javascript:;">右对齐</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
	</div>
	<div class="demo-dropdown-bar">
		<span>左边出现：</span>
		<ysyz-dropdown placement="left-start">
			<a href="javascript:;">顶部对齐</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
		<ysyz-dropdown placement="left">
			<a href="javascript:;">垂直居中</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
		<ysyz-dropdown placement="left-end">
			<a href="javascript:;">底部对齐</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
	</div>
	<div class="demo-dropdown-bar">
		<span>右边出现：</span>
		<ysyz-dropdown placement="right-start">
			<a href="javascript:;">顶部对齐</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
		<ysyz-dropdown placement="right">
			<a href="javascript:;">垂直居中</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
		<ysyz-dropdown placement="right-end">
			<a href="javascript:;">底部对齐</a>
			<template #list>
				<ysyz-dropdown-menu>
					<ysyz-dropdown-item>驴打滚</ysyz-dropdown-item>
					<ysyz-dropdown-item>杂酱面</ysyz-dropdown-item>
					<ysyz-dropdown-item disabled>豆汁儿</ysyz-dropdown-item>
					<ysyz-dropdown-item>冰糖葫芦</ysyz-dropdown-item>
					<ysyz-dropdown-item divided>北京烤鸭</ysyz-dropdown-item>
				</ysyz-dropdown-menu>
			</template>
		</ysyz-dropdown>
	</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
a {
	color: $primary;
	text-decoration: none;
}

.ysyz-dropdown+.ysyz-dropdown {
	margin-left: 35px;
}

.demo-dropdown-bar+.demo-dropdown-bar {
	margin-top: 20px;
}
</style>