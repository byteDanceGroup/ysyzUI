<template>
    <li class="ysyz-breadcrumb-item">
      <a class="ysyz-breadcrumb-item__link" :href="to" @click="handleClick" v-if="to">
        <slot></slot>
      </a>
      <span class="ysyz-breadcrumb-item__span" v-else>
        <slot/>
      </span>
      <span>
        <i class="ysyz-breadcrumb-item__separator iconfont" :class="separatorClass" v-if="separatorClass"></i>
        <span class="ysyz-breadcrumb-item__separator" v-else> {{ separator }} </span>
      </span>
    </li>
  </template>
  
  <script >
  export default {
    name: "ysyz-breadcrumb-item"
  };
  </script>
  
  <script setup>
  import { inject } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
    to: {
      type: [String, Object],
    }
  })
  
  const router = useRouter()
  const breadcrumbKey = inject('breadcrumbKey')
  const { separator,separatorClass } = breadcrumbKey
  
  const handleClick = (e) => {
    event.preventDefault();
    router.push(props.to)
  }
  </script>
  
  <style lang="scss" scoped>
  .ysyz-breadcrumb {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 14px;
  .ysyz-breadcrumb-item{
    display: flex;
    align-items: center;
    .ysyz-breadcrumb-item__link{
      white-space: nowrap;
      color: #17233d;
      transition: color 0.3s;
      text-decoration: none;
      cursor: pointer;
      &:hover{
        color: #409eff;
      }
    }
    .ysyz-breadcrumb-item__separator{
      margin: 0 9px;
      color: #c0c4cc;
    }
    &:last-child .ysyz-breadcrumb-item__separator {
      display: none;
    }
  }
}
  </style>
  