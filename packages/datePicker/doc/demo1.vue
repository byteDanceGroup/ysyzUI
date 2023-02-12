<template>
  <div class="container">
    <ysyz-datePicker v-model="dateData"></ysyz-datePicker>
    <ysyz-datePicker
      v-model="dateData2"
      type="daterange"
      style="margin-left: 200px"
    ></ysyz-datePicker>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dateData = ref<Date[]>([]);
const dateData2 = ref<Date[]>([]);
</script>

<style scoped1q lang="scss">
.container {
  padding: 10px 0 10px 10px;
  width: auto;
}
</style>
