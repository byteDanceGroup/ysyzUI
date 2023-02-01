<script setup lang="ts">
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import preview from '../../../src/components/preview.vue'
</script>
<style>
.ysyz-grid {
	width: 65%;
}
</style>

# Grid宫格

## 概述

宫格组件（Grid）与 24 列栅格布局不同的是，栅格组件（Row、Col）可以自定义一行内的列数，及各列所占比例，宫格组件则是将每行等分为宽度相等的列，甚至可以将单元格设置为正方形，并支持动态适应屏幕，就像九宫格一样。

## 代码示例

<!-- demo1 -->
---

<br/>

<demo1/>

基础用法：<br/>
宫格共包含两个组件：`Grid` 和 `GridItem`。<br/>
设置Grid属性 `col` 可以指定最大支持的列数。

<preview comp-name='grid' demo-name='demo1'/>

<br/>

<!-- demo2 -->
---

<br/>

<demo2/>

宽高一致：<br/>
属性 `square` 为 `true`，宫格的高度会与宽度一致，并会自动适应窗口的改变。<br/>

<preview comp-name='grid' demo-name='demo2'/>

<br/>

<!-- demo3 -->
---

<br/>

<demo3/>

内容垂直居中：<br/>
设置属性 `center` 为 `true`，宫格的内容将垂直居中显示。<br/>
该设置需要 `GridItem` 具有高度，比如开启宽高一致属性 `square`。

<preview comp-name='grid' demo-name='demo3'/>

<br/>

<!-- demo4 -->

---

<br/>

<demo4/>

是否显示边框<br/>
设置属性 `border` 可以控制是否显示边框，默认为显示 `true` 。<br/>

<preview comp-name='grid' demo-name='demo4'/>

<br/>

<!-- demo5 -->

---

<br/>

<demo5/>

悬停效果<br/>
设置属性 `hover` 为 `true` 可以开启鼠标悬停时的效果，会有一个浮起的阴影。

<preview comp-name='grid' demo-name='demo5'/>

<br/>
