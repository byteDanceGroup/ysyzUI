<template>
    <div class="my-tab-content-item" v-show="isActiveToShowContent">
      <slot></slot>
    </div>
</template>
  
<script lang="ts">
import { computed, onMounted } from "@vue/runtime-core";
import { getCurrentInstance } from 'vue'
  export default {
    name: "ysyz-tab-content",
  };
</script>

<script setup lang="ts">
  const props = defineProps({
    label: String, // 标签名
    name: String, // 每个下方内容区都有自己的name名字
    disabled: {
      // 是否禁用这一项
      type: Boolean,
      default: false, // 默认不禁用
    },
  });


  // const type = getCurrentInstance()?.parent?.props.type;
  // console.log("type",getCurrentInstance()?.parent.data.activeName)

  onMounted(() => {

  })
  const isActiveToShowContent = computed(() => {
    let activeName = getCurrentInstance()?.parent.data.activeName

    // let activeName = this.$parent.value; // 比如当前高亮的是 sunwukong
    console.log("activeName",activeName)
    let currentName = props.name; // this.name的值有很多个，有：sunwukong、zhubajie、shaheshang...
    console.log("currentName", props.name)
    // 谁等于，就显示谁
    return activeName === currentName;
  });

  defineExpose()

</script>
<style>
  .my-tab-content-item { padding: 12px;}
</style>