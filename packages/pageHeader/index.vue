<template>
  <div class="ysyz-pageHeader" :class="wideControl">
    <div
      class="ysyz-pageHeader-breadcrumb"
      v-if="props.breadcrumb || slots.breadcrumb"
    >
      <slot name="breadcrumb"></slot>
    </div>
    <div class="ysyz-pageHeader-box">
      <div
        class="ysyz-pageHeader-box-logo"
        v-if="props.logo || slots.logo || props.back || slots.back"
      >
        <div class="ysyz-pageHeader-back" v-if="props.back || slots.back">
          <slot name="back"
            ><span
              class="ysyz-pageHeader-back-default"
              @click="emits('on-back')"
              >返回</span
            ></slot
          >
        </div>
        <slot name="logo"
          ><img
            :src="props.logo"
            alt="logo"
            class="ysyz-pageHeader-box-logoDefault"
        /></slot>
      </div>
      <div class="ysyz-pageHeader-box-main">
        <div class="ysyz-pageHeader-header">
          <div class="ysyz-pageHeader-title">
            <slot name="title">{{ props.title }}</slot>
          </div>
          <div class="ysyz-pageHeader-action" v-if="slots.action">
            <slot name="action"></slot>
          </div>
        </div>
        <div class="ysyz-pageHeader-footer">
          <div class="ysyz-pageHeader-content">
            <slot name="content">{{ props.content }}</slot>
          </div>
          <div
            class="ysyz-pageHeader-extra"
            v-if="slots.extra"
            :class="!slots.action ? 'ysyz-pageHeader-extra-up' : ''"
          >
            <slot name="extra">{{ props.extra }}</slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, useSlots } from "@vue/runtime-core";
export default {
  name: "ysyz-pageHeader",
};
</script>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
  logo: {
    type: String,
  },
  content: {
    type: String,
  },
  extra: {
    type: String,
  },
  breadcrumb: {
    type: String,
  },
  res: {
    type: Boolean,
    default: true,
  },
  back: {
    type: Boolean,
    default: false,
  },
});
const slots = useSlots();
const emits = defineEmits(["on-back"]);
const wideControl = computed(() => [
  props.res ? "ysyz-pageHeader-responsive" : "",
]);
</script>

<style lang="scss" scoped>
.ysyz-pageHeader {
  width: 100%;
  padding: 10px;
  &-breadcrumb {
    margin-bottom: 10px;
  }
  .ysyz-pageHeader-back {
    display: inline-block;
    vertical-align: top;
    line-height: 28px;
    margin-right: 10px;

    &-default {
      &:hover {
        cursor: pointer;
        color: $default;
      }
      transition: all 0.2s;
      box-sizing: border-box;
      border-right: 1px solid #eee;
      padding: 0 10px;
    }
  }
  &-box {
    display: flex;
    flex-wrap: nowrap;
    &-logo {
      &Default {
        width: 28px;
        height: 28px;
        border-radius: 14px;
      }
      width: auto;
      margin-bottom: 5px;
      margin-right: 20px;
      padding-top: 2px;
    }
    &-main {
      flex: 1;
      .ysyz-pageHeader-header {
        display: flex;
        flex-wrap: nowrap;
        margin-bottom: 15px;
        .ysyz-pageHeader-title {
          flex: 1;
          font-size: 170%;
          margin-right: 20px;
        }
        .ysyz-pageHeader-action {
          text-align: right;
          min-width: 250px;
        }
      }
      .ysyz-pageHeader-footer {
        display: flex;
        flex-wrap: nowrap;
        .ysyz-pageHeader-content {
          margin-right: 20px;
          flex: 1;
        }
        .ysyz-pageHeader-extra {
          min-width: 100px;
          text-align: right;
          &-up {
            margin-top: -40px;
          }
        }
      }
    }
  }
}
.ysyz-pageHeader-responsive {
  @media screen and (max-width: 768px) {
    .ysyz-pageHeader-header {
      display: block;

      .ysyz-pageHeader-title {
        width: auto;
        margin-right: 0;
      }
      .ysyz-pageHeader-action {
        margin-top: 15px;
        width: 100%;
        text-align: left;
      }
    }
    .ysyz-pageHeader-footer {
      display: block;
      .ysyz-pageHeader-content {
        margin-right: 0;
        width: auto;
      }
      .ysyz-pageHeader-extra {
        margin-top: 15px;
        width: 100%;
        text-align: left;
      }
    }
  }
  @media screen and (max-width: 576px) {
    .ysyz-pageHeader-box {
      display: block;

      .ysyz-pageHeader-main {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>
