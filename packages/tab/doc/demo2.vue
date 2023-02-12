<template>
    <div>
      <ysyz-tabs v-model="activeName2" :before-leave="beforeLeave">
        <ysyz-tab-content label="武松" name="wusong">武松内容</ysyz-tab-content>
        <ysyz-tab-content label="宋江" name="songjiang">松江内容</ysyz-tab-content>
        <ysyz-tab-content label="林冲" name="linchong">林冲内容</ysyz-tab-content>
        <ysyz-tab-content disabled label="吴用" name="wuyong">吴用内容</ysyz-tab-content>
      </ysyz-tabs>
    </div>
</template>

<script lang="js">

export default {
  data() {
    return {
      activeName2: "wusong",
    };
  },
  methods: {
    tabClick(tabItem) {
      console.log("外层点击", tabItem);
    },
    beforeLeave(newTabName, oldTabName) {
      console.log("外层", newTabName, oldTabName);
      // 判断是否有disabled 如果没有 返回true
      return true
    },
  },
};
</script>