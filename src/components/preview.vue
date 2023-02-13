<template>
  <div>
    <ysyz-button @click="codeEvent">显示代码</ysyz-button>
  </div>
  <div class="code" :class="`${isShow ? 'hidden' : ' '}`">
    <pre>
            <highlightjs language="ts" :code="sourceCode" />
        </pre>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
let isShow = ref(true);

const codeEvent = () => {
  isShow.value = !isShow.value;
  console.log(isShow.value);
};
const codeShow = computed(() => {
  if (isShow) return "hidden";
  else return "1";
});
const props = defineProps({
  compName: {
    type: String,
    default: "",
    require: true,
  },
  demoName: {
    type: String,
    default: "",
    require: true,
  },
});
const sourceCode = ref("");
async function getCode() {
  sourceCode.value = (
    await import(
      /* @vite-ignore */ `../../packages/${props.compName}/doc/${props.demoName}.vue?raw`
    )
  ).default;
}
onMounted(() => {
  console.log(sourceCode.value);

  getCode();
});
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}
.code {
  margin-top: -20px;
  max-width: 1280px;
}
</style>
