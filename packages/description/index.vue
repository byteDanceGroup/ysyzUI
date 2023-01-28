<template>
  <div class="ysyz-description">
    <div class="ysyz-description-titleBox" v-if="props.term || slots.term">
      <slot name="term">{{ props.term }}</slot>
    </div>
    <div class="ysyz-description-contentBox">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { useSlots } from "@vue/runtime-core";
export default {
  name: "ysyz-description",
};
</script>

<script setup lang="ts">
const props = defineProps({
  term: {
    type: String,
    default: "",
  },
});

const slots = useSlots();
</script>

<style lang="scss" scoped>
.ysyz-description {
  display: flex;
  box-sizing: border-box;
  &-titleBox {
    margin-right: 5px;
    color: $text;
  }
  &-contentBox {
    color: lighten($text, 20%);
    flex: 1;
  }
}
</style>
