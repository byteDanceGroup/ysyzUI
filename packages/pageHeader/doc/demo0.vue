<template>
  <div style="width: 100%" class="page">
    <h2>页头-等待面包屑和tabs开发完毕</h2>

    页头组件常放置在页面顶端，用于展示当前页面主体信息（如图标、标题等），并承载与当前页相关的操作（如面包屑导航、操作等）。
    <h3>概述</h3>

    <demo1></demo1>
    <br />
    <preview comp-name="pageHeader" demo-name="demo1" />
    <br />
    页头主要由<span>标题title</span>、<span>图标logo</span>、<span>操作action</span>、<span>内容content</span>、
    <span>附加信息extra</span
    >、<span>面包屑</span>、<span>选项卡</span>构成，其中<span>title</span>、<span>logo</span>、<span>content</span>可通过<span>props</span>参数或同名插槽设置内容。
    <br />其余可使用同名插槽进行内容设置。调整窗口大小可响应式变化（设置<span>res</span>参数可阻止响应）。
    <br />
    <br />
    <demo2></demo2>
    <br />
    <preview comp-name="pageHeader" demo-name="demo2" />
    <br />
    设置<span>back</span>为<span>true</span>或自定义同名插槽，可添加返回按钮。事件触发详见API。
    <br />
    <br />
    <demo3></demo3>
    <br />
    <preview comp-name="pageHeader" demo-name="demo3" />
    <br />
    弃用部分插槽以设置更加简洁的页头。
    <br />当弃用action且使用extra时，extra的垂直位置会上移以顶替action留下的空缺。

    <br />
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
        <td style="text-align: left">
          页头标题，亦可在插槽中设置自定义显示内容
        </td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>content</td>
        <td style="text-align: left">
          内容文本，亦可在插槽中设置自定义显示内容
        </td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>logo</td>
        <td style="text-align: left">
          logo图片链接，亦可在插槽中设置自定义显示内容
        </td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>extra</td>
        <td style="text-align: left">
          额外显示的内容，亦可在插槽中设置自定义显示内容
        </td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>back</td>
        <td style="text-align: left">
          是否显示返回按钮，亦可在插槽中设置自定义显示内容
        </td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>res</td>
        <td style="text-align: left">是否允许响应式变化</td>
        <td>Boolean</td>
        <td>true</td>
      </tr>
    </table>

    <h4>事件</h4>

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
        <th>事件</th>
        <th>说明</th>
        <th>返回参数</th>
      </tr>
      <tr>
        <td>on-back</td>
        <td style="text-align: left">点击默认的返回按钮时触发</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
import demo1 from "./demo1.vue";
import preview from "../../../src/components/preview.vue";
import demo2 from "./demo2.vue";
import demo3 from "./demo3.vue";
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
