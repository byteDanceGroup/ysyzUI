<script setup lang="ts">

import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import preview from '../../../src/components/preview.vue'
</script>

### Button 组件代码示例

<demo1/>

<preview comp-name='button' demo-name='demo1'/>

按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。
通过设置`type`为`primary`、`dashed`、`text`、`info`、`success`、`warning`创建不同样式的按钮，不设置则为默认样式。指定`color`即可自定义按钮颜色，组件将自动计算悬浮颜色。指定`color`且将`whiteMode`设置为`true`即可切换按钮风格为白底，悬浮式显示指定的颜色。设置颜色无效时，将显示为默认按钮。
***
<demo2/>

幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。
***
<demo3/>
<preview comp-name='button' demo-name='demo3'/>

将按钮的`disabled`设置为`true`即可禁用按钮，此时将不会触发点击事件。