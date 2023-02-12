<script lang="ts" setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import preview from '../../../src/components/preview.vue';
</script>

# Collapse 折叠面板

## 概述

将内容区域折叠/展开。

## 代码示例

<!-- demo1 -->
---

<br/>

<demo1/>

基础用法：<br/>
默认可以同时展开多个面板，可以设置默认展开第几个。

<preview comp-name='collapse' demo-name='demo1'/>

<br/>

<!-- demo2 -->
---

<br/>

<demo2/>

双向绑定：<br/>
可以使用 `v-model` 进行双向绑定，处理激活状态的 `Panel` 与v-model所绑定的数据始终一致。<br/>
 `on-change` 时间在切换面板时触发，返回当前已展开的面板的 `key`，格式为数组。

<preview comp-name='collapse' demo-name='demo2'/>

<br/>

<!-- demo3 -->
---

<br/>

<demo3/>

手风琴：<br/>
通过设置属性 `accordion` 开启手风琴模式，每次只能打开一个面板。

<preview comp-name='collapse' demo-name='demo3'/>

<br/>

<!-- demo4 -->
---

<br/>

<demo4/>

面板嵌套：<br/>
折叠面板可以进行嵌套。

<preview comp-name='collapse' demo-name='demo4'/>

<br/>

<!-- demo5 -->
---

<br/>

<demo5/>

简洁模式：<br/>
设置属性 `simple` 可以显示为不带边框和背景色的简洁模式。

<preview comp-name='collapse' demo-name='demo5'/>

<br/>