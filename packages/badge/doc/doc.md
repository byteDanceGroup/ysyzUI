<script lang="ts" setup>
import preview from '../../../src/components/preview.vue';
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import demo7 from './demo7.vue';
import demo8 from './demo8.vue';
</script>

# Badge 徽标数

## 概述

主要用于通知未读数的角标，提醒用户点击。

## 代码示例

<!-- demo1 -->
---

<br/>

<demo1/>

基础用法：<br/>
最简单的使用方法。

<preview comp-name='badge' demo-name='demo1'/>

<br/>

<!-- demo2 -->
---

<br/>

<demo2/>

小红点：<br/>
强迫症患者慎用！

<preview comp-name='badge' demo-name='demo2'/>

<br/>

<!-- demo3 -->
---

<br/>

<demo3/>

封顶数字：<br/>
通过设置 `overflow-count` 属性设置一个封顶值，当超过时，会显示 `${overflowCount}+` 

<preview comp-name='badge' demo-name='demo3'/>

<br/>


<!-- demo4 -->
---

<br/>

<demo4/>

独立使用及自定义样式：<br/>
可以没有 `slot` 独立展示。

<preview comp-name='badge' demo-name='demo4'/>

<br/>

<!-- demo5 -->
---

<br/>

<demo5/>

自定义内容：<br/>
设置 `text` 属性，可以自定义显示内容。

<preview comp-name='badge' demo-name='demo5'/>

<br/>

<!-- demo6 -->
---

<br/>

<demo6/>

状态点：<br/>
用于表示状态的小圆点。

<preview comp-name='badge' demo-name='demo6'/>

<br/>

<!-- demo7 -->
---

<br/>

<demo7/>

预设颜色：<br/>
使用 `type` 属性，可以设置不同的颜色。

<preview comp-name='badge' demo-name='demo7'/>

<br/>

<!-- demo8 -->
---

<br/>

<demo8/>

角标偏移：<br/>
使用 `offset` 属性，可以设置不同的偏移坐标。<br/>
` offset: [offsetX: number, offsetY: number] `

<preview comp-name='badge' demo-name='demo8'/>

<br/>
