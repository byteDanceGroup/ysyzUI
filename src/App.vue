<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 400px;
  // height: 80px;
  display: flex;
  flex-wrap: wrap;
}
html {
  font-size: smaller;
  color: $text;
}
</style>
