<template>
  <div style="width: 100%" class="page">
    <h2>描述列表</h2>

    成组展示多个只读字段，常见于详情页的信息展示。
    <h3>概述</h3>

    <demo1 />
    <br />
    <preview comp-name="descriptionList" demo-name="demo1" />
    <br />
    对于整个描述列表，可用参数<span>title</span>或同名插槽填写列表标题。<br />
    对于单个描述，可用参数<span>term</span>或同名插槽填写描述标题。<span></span>
    <br />
    <br />
    <demo2 />
    <br />
    <preview comp-name="descriptionList" demo-name="demo2" />
    <br />
    设置描述列表的<span>layout</span>为<span>vertical</span>可令描述的标题和内容垂直显示。<br />
    设置<span>gutter</span>可调整描述之间的横向间距。<br />
    设置<span>col</span>属性可调整单行可显示的最大列数（最大为4）。<br />
    <br /><br />
    <h3>API</h3>

    <h4>props参数介绍</h4>

    <table
      border="1"
      cellpadding="10"
      style="
        border-collapse: collapse;
        width: 650px;
        border: 1px solid #ccc;
        text-align: center;
      "
    >
      <tr style="background-color: #f3f3f3">
        <th>参数名</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>title</td>
        <td style="text-align: left">描述列表的标题，亦可在插槽中设置</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>col</td>
        <td style="text-align: left">
          描述列表一行允许显示的最大列数，可选值为1、2、3、4
        </td>
        <td>Number | String</td>
        <td>3</td>
      </tr>
      <tr>
        <td>gutter</td>
        <td style="text-align: left">描述之间的水平间距，单位为px</td>
        <td>Number</td>
        <td>32</td>
      </tr>
      <tr>
        <td>layout</td>
        <td style="text-align: left">
          布局方式，可选值为 horizontal 或 vertical
        </td>
        <td>String</td>
        <td>horizontal</td>
      </tr>
    </table>

    <h3>响应规则</h3>

    <table
      border="1"
      cellpadding="10"
      style="
        border-collapse: collapse;
        width: 600px;
        border: 1px solid #ccc;
        text-align: center;
      "
    >
      <tr style="background-color: #f3f3f3">
        <th>窗口宽度</th>
        <th>展示列数</th>
      </tr>
      <tr>
        <td>≥768px</td>
        <td>col</td>
      </tr>
      <tr>
        <td>≥576px</td>
        <td>col &lt; 2 ? col : 2</td>
      </tr>
      <tr>
        <td>&lt;576px</td>
        <td>1</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import demo1 from "./demo1.vue";
import demo2 from "./demo2.vue";
import preview from "../../../src/components/preview.vue";
</script>

<style lang="scss" scoped>
.page > span {
  display: inline-block;
  background-color: #f3f3f3;
  padding: 2px 5px;
  border-radius: 5px;
  border: 1px solid #eee;
}
</style>
