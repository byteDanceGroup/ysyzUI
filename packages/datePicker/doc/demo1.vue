<template>
  <div class="container">
    <ysyz-datePicker v-model="dateData" :time="true"></ysyz-datePicker>
    <ysyz-datePicker
      v-model="dateData2"
      type="daterange"
      style="margin-top: 500px"
      :time="true"
    ></ysyz-datePicker>
    <ysyz-datePicker
      v-model="dateData3"
      type="year"
      :time="true"
      :multiple="true"
    ></ysyz-datePicker>
    <ysyz-datePicker
      v-model="dateData4"
      style="margin-top: 500px"
      type="month"
      :multiple="true"
    ></ysyz-datePicker>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dateData = ref<Date[]>([]);
const dateData2 = ref<Date[]>([]);
const dateData4 = ref<Date[]>([]);
const dateData3 = ref<Date[]>([]);
</script>

<style scoped1q lang="scss">
.container {
  padding: 10px 0 10px 10px;
}
</style>
