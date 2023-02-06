<template>
    <div>
        <ysyz-card :padding="30">这里是基础Card
            <template #title>
                <ysyz-icon type="success"></ysyz-icon>
            Classic film
        </template>
        </ysyz-card>
        <ysyz-card :bordered="false">这里是无边界Card
            <template #title>
            Classic film
        </template>
        <template #extra>
            点击
        </template>
        </ysyz-card>
        <ysyz-card dis-hover>这里是禁用悬浮Card
            <template #title>
            Classic film
        </template>
        <template #extra>
            点击
        </template>
        </ysyz-card>
        
        <ysyz-card shadow>这里是显示shadow的Card
            <template #title>
            Classic film
        </template>
        <template #extra>
            点击
        </template>
        </ysyz-card>
        <ysyz-card >这里是简洁版的Card
            123
        </ysyz-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>