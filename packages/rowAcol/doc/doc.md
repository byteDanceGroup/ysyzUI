<script setup lang="ts">
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import preview from '../../../src/components/preview.vue'
</script>

<style>
.ysyz-row-col {
	width: 65%;
}
</style>

# Row/Col 栅格

## 概述

我们定义了两个概念，行row和列col，具体使用方法如下：<br/>

使用row在水平方向创建一行<br/>
将一组col插入在row中<br/>
在每个col中，键入自己的内容<br/>
通过设置col的span参数，指定跨越的范围，其范围是1到24<br/>
每个row中的col总和应该为24<br/>

## 代码示例

<!-- demo1 -->
---

<br/>

<demo1/>

基础用法<br/>
水平排列的布局。<br/>
col必须放在row里面。

<preview comp-name='rowAcol' demo-name='demo1'/>

<br/>


<!-- demo2 -->
---

<br/>

<demo2/>

区块间隔<br/>
通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。
<preview comp-name='rowAcol' demo-name='demo2'/>

<br/>


<!-- demo3 -->
---

<br/>

<demo3/>

待完善<br/>
栅格顺序(Flex)<br/>
通过 Flex 布局的order来改变栅格的顺序。

<preview comp-name='rowAcol' demo-name='demo3'/>

<br/>

<!-- demo3 -->
---

<br/>

<demo4/>

左右偏移<br/>
通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。

<preview comp-name='rowAcol' demo-name='demo4'/>

<br/>