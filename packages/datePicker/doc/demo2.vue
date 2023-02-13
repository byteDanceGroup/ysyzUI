<template>
  <div class="container">
    <ysyz-datePicker
      v-model="dateData"
      :multiple="true"
      format="yyyy/MM/dd"
      :start-date="new Date('December 17, 1995 03:24:00')"
    ></ysyz-datePicker>
    <ysyz-datePicker
      style="margin-left: 200px"
      v-model="dateData2"
      type="daterange"
      format="yyyy/MM/dd-hh:mm"
      :time="true"
    ></ysyz-datePicker>
    <ysyz-datePicker
      style="margin-left: 200px"
      v-model="dateData3"
      :multiple="true"
      :footer="true"
    ></ysyz-datePicker>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dateData = ref<Date[]>([]);
const dateData2 = ref<Date[]>([]);
const dateData3 = ref<Date[]>([]);
</script>

<style scoped1q lang="scss">
.container {
  padding: 10px 0 10px 10px;
  width: auto;
}
</style>
