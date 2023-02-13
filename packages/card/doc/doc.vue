<template>
  <h1>Button 按钮</h1>
  <h2>概述</h2>
  <p>基础组件，触发业务逻辑时使用。</p>
  <h2>代码示例</h2>
  <ysyz-card dis-hover>
    <demo1></demo1>
    <ysyz-divider content-position="left">基本用法</ysyz-divider>
    <p>
        自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。
      <br />
      可以通过设置属性 title 和 icon 快速设置标题栏。
      <br />
    </p>
    <ysyz-divider lineType="dashed"></ysyz-divider>
    <preview comp-name="card" demo-name="demo1" />
  </ysyz-card>
  <ysyz-card dis-hover>
    <demo2></demo2>
    <ysyz-divider content-position="left">无边框</ysyz-divider>
    <p>
        通过设置属性bordered为 false ，可以不添加边框，建议在灰色背景下使用。
     
    </p>
    <ysyz-divider lineType="dashed"></ysyz-divider>
    <preview comp-name="card" demo-name="demo2" />
  </ysyz-card>
  <ysyz-card dis-hover>
    <demo3></demo3>
    <ysyz-divider content-position="left">禁用悬停阴影</ysyz-divider>
    <p>
        通过设置属性dis-hover来禁用鼠标悬停显示阴影的效果。
     
    </p>
    <ysyz-divider lineType="dashed"></ysyz-divider>
    <preview comp-name="card" demo-name="demo3" />
  </ysyz-card>

  <ysyz-card dis-hover>
    <demo4></demo4>
    <ysyz-divider content-position="left">卡片阴影</ysyz-divider>
    <p>
        通过设置属性shadow来显示卡片阴影，使用该属性后，bordered和dis-hover将无效，建议在灰色背景下使用。
     
    </p>
    <ysyz-divider lineType="dashed"></ysyz-divider>
    <preview comp-name="card" demo-name="demo4" />
  </ysyz-card>

  <ysyz-card dis-hover>
    <demo5></demo5>
    <ysyz-divider content-position="left">简介卡片</ysyz-divider>
    <p>
        只包含内容区域，没有标题。
    </p>
    <ysyz-divider lineType="dashed"></ysyz-divider>
    <preview comp-name="card" demo-name="demo5" />
  </ysyz-card>

  <h2>API</h2>
    <h3>Card Props</h3>
    <ysyz-table :columns="props" :data="cardData"></ysyz-table>
    
    <h3>Card Slots</h3>
    <ysyz-table :columns="slots" :data="cardSlots"></ysyz-table>
</template>

<script setup lang="ts">
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import preview from "../../../src/components/preview.vue";

const props = [
{ title: "参数名", key: "name" },
  {
    title: "说明",
    key: "introduction",
  },
  {
    title: "类型",
    key: "type",
  },
  {
    title: "默认值",
    key: "default",
  },
]
const cardData = [
  {
    name:'bordered',
    introduction:'是否显示边框，建议在灰色背景下使用',
    type:'Boolean',
    default:'true'
  },
  {
    name:'dis-hover',
    introduction:'禁用鼠标悬停显示阴影',
    type:'Boolean',
    default:'false'
  },
  {
    name:'shadow',
    introduction:'卡片阴影，建议在灰色背景下使用',
    type:'Boolean',
    default:'false'
  },
  {
    name:'padding',
    introduction:'卡片内部间距，单位 px',
    type:'Number',
    default:'16'
  },
  {
    name:'title',
    introduction:'标题',
    type:'String',
    default:'-'
  },
  {
    name:'icon',
    introduction:'标题前的图标',
    type:'String',
    default:'-'
  },
  {
    name:'target',
    introduction:'相当于 a 链接的 target 属性',
    type:'String',
    default:'_self'
  },
  

]
const slots = [
  {
    title:'名称',
    key:'name'
  },
  {
    title:'说明',
    key:'introduction'
  }
]
const cardSlots = [
  {
    name:'title',
    introduction:'自定义卡片标题，如果是简单文字，可以使用<p>标签包裹',
  },
  {
    name:'extra',
    introduction:'额外显示的内容，默认位置在右上角',
  },
  {
    name:'无',
    introduction:'卡片主内容',
  },
]
</script>

<style scoped lang="scss">
.ysyz-card {
  margin-bottom: 30px;
}
</style>