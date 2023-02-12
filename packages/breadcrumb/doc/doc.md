<script setup lang="ts">
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import preview from '../../../src/components/preview.vue'
</script>

# Breadcrumb 面包屑

## 概述

显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。

## 代码示例

<!-- demo1 -->
---

<br/>

<demo1/>

基础用法<br/>
最基础的用法，通过设置to属性添加链接。

<preview comp-name='breadcrumb' demo-name='demo1'/>


<br/>

<!-- demo2 -->
---

<br/>

<demo2/>

带图标的<br/>
可自定义每项的内容，比如带有一个图标。

<preview comp-name='breadcrumb' demo-name='demo2'/>

<br/>

<!-- demo3 -->
---

<br/>

<demo3/>

分隔符<br/>
通过设置separator属性来自定义分隔符，比如 > ，也可以接受自定义的HTML字符串。

<preview comp-name='breadcrumb' demo-name='demo3'/>

