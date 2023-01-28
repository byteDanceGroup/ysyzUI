<template>
  <button class="q-button" :class="qClass">
    <span><slot></slot></span>
  </button>
</template>
<script lang="ts">
export default {
  name: "ysyz-button",
};
</script>
<script setup lang="ts">
import { computed, ref } from "vue";
import { colorValidator, darken, lighten } from "../../src/utils/color";

const props = defineProps({
  type: {
    type: String,
    default: "default",
    //无效时，vue将进行警告。样式将遵循默认
    validator(value: string) {
      return (
        [
          "default",
          "primary",
          "dashed",
          "text",
          "info",
          "success",
          "warning",
          "error",
        ].indexOf(value) > -1
      );
    },
  },
  disabled: Boolean,
  round: Boolean,
  ghost: Boolean,
  color: {
    type: String,
    validator(value: string) {
      return colorValidator(value) !== 0;
    },
  },
  whiteMode: {
    //color有效时，此变量有效。为真时自定义色应用于边框和文字，为假则应用于背景色
    type: Boolean,
    default: false,
  },
});

const customizeColor = computed(() => {
  return props.color;
});

const customizeColorAppend = computed(() => {
  if (props.color && !props.whiteMode) return lighten(props.color, 0.25);
  return "";
});

const customizeClass = computed(() => {
  if (props.color && colorValidator(props.color)) {
    if (props.whiteMode) return "q-button-customize-light";
    return "q-button-customize-dark";
  }
  return "";
});

const qClass = computed(() => {
  return [
    `q-button-${props.type}`,
    props.disabled ? "q-button-disabled" : "",
    props.round ? "q-button-round" : "",
    props.ghost ? "q-button-ghost" : "",
    customizeClass.value,
  ];
});
</script>

<style lang="scss" scoped>
.q-button {
  margin-right: 5px;
  border: 0;
  outline: 0;
  background: none;
  line-height: 1.5;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  user-select: none;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid transparent;
  margin: 2px;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear, -webkit-box-shadow 0.2s linear;
  &:hover,
  &:focus {
    color: $default;
    background-color: #fff;
    border-color: $default;
  }
  &-disabled {
    cursor: not-allowed;
  }
}
.q-button::before {
  position: absolute;
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
  background: #fff;
  opacity: 0.35;
  content: "";
  border-radius: inherit;
  z-index: 1;
  transition: opacity 0.2s;
  pointer-events: none;
  display: none;
}
.q-button-default {
  color: $text;
  border-color: #dcdee2;
  background-color: $white;
  &.q-button-disabled {
    color: lighten($text, 30%);
    border-color: #dcdee2;
    background-color: $white;
  }
}

.q-button-primary {
  color: $white;
  background-color: $primary;
  border-color: $primary;
  &:hover,
  &:focus,
  &.q-button-disabled {
    color: $white;
    background-color: lighten($primary, 10%);
    border-color: lighten($primary, 10%);
  }
}
.q-button-dashed {
  color: $text;
  border-color: #dcdee2;
  background-color: $white;
  border-style: dashed;
  &:hover,
  &:focus {
    border-color: $default;
    border-style: dashed;
  }
  &.q-button-disabled {
    border-color: #dcdee2;
    color: lighten($text, 30%);
  }
}
.q-button-text {
  &:hover,
  &:focus {
    color: $default;
    border-color: $white;
  }

  &.q-button-disabled {
    color: lighten($text, 30%);
  }
}
.q-button-info {
  color: $white;
  background-color: $info;
  border-color: $info;
  &:hover,
  &:focus,
  &.q-button-disabled {
    color: $white;
    background-color: lighten($info, 10%);
    border-color: lighten($info, 10%);
  }
}
.q-button-success {
  color: $white;
  background-color: $success;
  border-color: $success;
  &:hover,
  &:focus,
  &.q-button-disabled {
    color: $white;
    background-color: lighten($success, 10%);
    border-color: lighten($success, 10%);
  }
}
.q-button-warning {
  color: $white;
  background-color: $warning;
  border-color: $warning;
  &:hover,
  &:focus,
  &.q-button-disabled {
    color: $white;
    background-color: lighten($warning, 10%);
    border-color: lighten($warning, 10%);
  }
}
.q-button-error {
  color: $white;
  background-color: $error;
  border-color: $error;
  &:hover,
  &:focus,
  &.q-button-disabled {
    color: $white;
    background-color: lighten($error, 10%);
    border-color: lighten($error, 10%);
  }
}
.q-button-ghost {
  color: $primary;
  background: transparent;
  &:hover,
  &:focus {
    color: $default;
    background: rgba(245, 249, 254, 0.5);
  }
}

//自定义颜色
.q-button-customize-dark {
  $color: v-bind(customizeColor);
  $color2: v-bind(customizeColorAppend);
  background-color: $color;
  border-color: $color;
  color: $white;
  &:hover,
  &:focus,
  &.q-button-disabled {
    color: $white;
    background-color: $color2;
    border-color: $color2;
  }
}

.q-button-customize-light {
  $color: v-bind(customizeColor);
  color: $text;
  border-color: #dcdee2;
  background-color: $white;
  &:hover,
  &:focus {
    color: $color;
    border-color: $color;
    background-color: $white;
  }
  &.q-button-disabled {
    color: lighten($text, 30%);
    border-color: #dcdee2;
    background-color: $white;
  }
}
</style>
