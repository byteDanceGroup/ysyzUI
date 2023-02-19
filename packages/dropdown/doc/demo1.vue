<template>
	<ysyz-dropdown>
		<a href="javascript:;">下拉菜单</a>
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
		<ysyz-button type="primary">下拉菜单</ysyz-button>
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
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
a {
	color: $primary;
	text-decoration: none;
}

.ysyz-dropdown+.ysyz-dropdown {
	margin-left: 25px;
}
</style>

