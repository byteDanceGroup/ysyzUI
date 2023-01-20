<script setup lang="ts">

import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import preview from '../../../src/components/preview.vue'
</script>

### Button 组件代码示例

<demo1/>

<preview comp-name='button' demo-name='demo1'/>

按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。
通过设置`type`为`primary`、`dashed`、`text`、`info`、`success`、`warning`创建不同样式的按钮，不设置为默认样式。
***
<demo2/>

幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。
***
