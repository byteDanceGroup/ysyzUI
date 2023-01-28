<template>
  <div style="width: 100%" class="page">
    <h2>进度条</h2>

    全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。
    <br />全局使用同一个进度条，通过全局方法对其进行操作。
    <br />在无法获得精确进度的情况下，进度条会模拟加载过程，
    <br />调用全局方法可使其切换至完成或出错的状态。
    <br />
    <h3>概述</h3>

    <demo1 />
    <br />
    <preview comp-name="loadingBar" demo-name="demo1" />
    <br />
    调用 <span>$loading.start</span> 可模拟进度，到达85%处停止。 <br />调用
    <span>$loading.finish</span> 可使进度条完成并隐藏。 <br />调用
    <span>$loading.error</span> 可使进度条显示出错并隐藏。 <br />调用
    <span>$loading.update</span>
    并传入一个介于0-100的值，可使进度条滚至对应百分比并暂停，用于精确进度。
    <br />调用
    <span>$loading.config</span>
    并传入有关颜色参数可修改进度条的加载或出错颜色，详细参数见后。 <br />调用
    <span>$loading.destroy</span>
    会销毁当前的进度条。在下次调用其余方法时，会再度生成进度条。
    <br />需要注意的是，您可能需要在main.ts中暴露app，以调用全局函数。
    <br />
    <h3>API</h3>

    <h4>全局方法介绍</h4>

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
        <th>方法</th>
        <th>说明</th>
        <th>参数类型</th>
        <th>参数说明</th>
      </tr>
      <tr>
        <td>$loading.start</td>
        <td style="text-align: left">模拟进度，到达85%处停止</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>$loading.finish</td>
        <td style="text-align: left">使进度条完成并隐藏</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>$loading.error</td>
        <td style="text-align: left">使进度条显示出错并隐藏</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>$loading.update</td>
        <td style="text-align: left">令进度条显示精确的值</td>
        <td>Number</td>
        <td>参数必须大于0、小于100</td>
      </tr>
      <tr>
        <td>$loading.config</td>
        <td style="text-align: left">令进度条显示精确的值</td>
        <td>Object</td>
        <td>有效参数见后</td>
      </tr>
      <tr>
        <td>$loading.destroy</td>
        <td style="text-align: left">
          销毁当前的进度条。在下次调用其余方法时，会再度生成进度条
        </td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>

    <h3>config参数</h3>
    注意：config提供类型为对象的参数，下表为该对象内有效的属性名。
    <br /><br />
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
        <th>属性名</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>color</td>
        <td>基础颜色，支持10进制和16进制，如 rgb(12,200,133) 和 #9116ff</td>
      </tr>
      <tr>
        <td>errorColor</td>
        <td>进度条出错颜色，支持格式同上</td>
      </tr>
    </table>
    <br /><br />
  </div>
</template>

<script setup lang="ts">
import demo1 from "./demo1.vue";
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
