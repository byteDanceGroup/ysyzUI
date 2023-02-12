<template>
  <h1>Button 按钮</h1>
  <h2>概述</h2>
  <p>这里写概述内容</p>
  <h2>代码示例</h2>
  <ysyz-card dis-hover>
    <demo1></demo1>
    
    <ysyz-divider  content-position="left">按钮类型</ysyz-divider>
    <p>
      按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。
      通过设置`type`为`primary`、`dashed`、`text`、`info`、`success`、`warning`
      创建不同样式的按钮，不设置则为默认样式。指定`color`即可自定义按钮颜色，
      组件将自动计算悬浮颜色。指定`color`且将`whiteMode`设置为`true`即可切换按钮风格为白底，
      悬浮式显示指定的颜色。设置颜色无效时，将显示为默认按钮。
    </p>
    <ysyz-divider lineType="dashed" ></ysyz-divider>
    <preview comp-name="button" demo-name="demo1" />
  </ysyz-card>

  <ysyz-card dis-hover>
    <demo2></demo2>
    <ysyz-divider  content-position="left">幽灵按钮</ysyz-divider>
    <p>幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</p>
    <ysyz-divider lineType="dashed" ></ysyz-divider>
    <preview comp-name="button" demo-name="demo2" />

  </ysyz-card>


  <ysyz-card dis-hover>
    <demo3></demo3>
    <ysyz-divider  content-position="left">不可选状态</ysyz-divider>
    <p>将按钮的`disabled`设置为`true`即可禁用按钮，此时将不会触发点击事件。</p>
    <ysyz-divider lineType="dashed" ></ysyz-divider>
    <preview comp-name="button" demo-name="demo3" />

  </ysyz-card>
</template>
  
  <script setup lang="ts">
import demo1 from "./demo1.vue";
import demo2 from "./demo2.vue";
import demo3 from "./demo3.vue";
import preview from "../../../src/components/preview.vue";
</script>
  
  <style scoped lang="scss">
.container {
  padding: 10px 0 10px 10px;
}
.ysyz-card {
  margin-bottom: 30px;
}
</style>
  