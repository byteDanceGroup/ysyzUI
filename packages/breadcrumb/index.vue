<template>
    <ul class="ysyz-breadcrumb">
        <slot></slot>
    </ul>
</template>
  
<script lang="ts">
export default {
    name: "ysyz-breadcrumb",
};
</script>
  
<script setup  lang="ts">
import { provide } from 'vue';
const props = defineProps({
    // 分割符字符串
    separator: {
        type: String,
        default: '/'
    },
    separatorClass: {
        type: String,
        default: ''
    }
})
provide('breadcrumbKey', props)
</script>
  
<style lang="scss" scoped>
.ysyz-breadcrumb {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 14px;

    .ysyz-breadcrumb-item {
        display: flex;
        align-items: center;

        .ysyz-breadcrumb-item__link {
            white-space: nowrap;
            color: #17233d;
            transition: color 0.3s;
            text-decoration: none;
            cursor: pointer;

            &:hover {
                color: #409eff;
            }
        }

        .ysyz-breadcrumb-item__separator {
            margin: 0 9px;
            color: #c0c4cc;
        }

        &:last-child .ysyz-breadcrumb-item__separator {
            display: none;
        }
    }
}
</style>
