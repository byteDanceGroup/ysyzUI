<template>
    <ysyz-globalfooter :links="links" :copyright="copyright"></ysyz-globalfooter>
</template>

<script setup lang="ts">
    const links = [
        {
            key: '帮助',
            title: '帮助',
            href: 'https://www.iviewui.com',
            blankTarget: true
        },
        {
            key: 'github',
            icon: 'logo-github',
            href: 'https://github.com/view-design/ViewUIPlus',
            blankTarget: true
        },
        {
            key: '条款',
            title: '条款',
            href: '',
            blankTarget: true
        }
    ]
    const copyright= 'Copyright © 2023 YouShiYouZhong9960 All Rights Reserved'
</script>

<style scoped lang="scss">

</style>