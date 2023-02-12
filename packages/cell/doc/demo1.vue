<template>
  <div>
      <h4>Cell props参数介绍</h4>

      <table
        border="1"
        cellpadding="10"
        style="
          border-collapse: collapse;
          width: 650px;
          border: 1px solid #ccc;
          text-align: center;">
        <tr style="background-color: #f3f3f3">
          <th>参数名</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>name</td>
          <td style="text-align: left">用来标识这一项	</td>
          <td>String | Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td style="text-align: left">
            禁用该项	
          </td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>selected</td>
          <td style="text-align: left">标记该项为选中状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>stroke-color</td>
          <td style="text-align: left">进度条的颜色，支持传入数组，显示为渐变色</td>
          <td>String | Array	</td>
          <td>-</td>
        </tr>
        <tr>
          <td>to</td>
          <td style="text-align: left">
            跳转的链接，支持 vue-router 对象		
          </td>
          <td>String | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>replace</td>
          <td style="text-align: left">路由跳转时，开启 replace 将不会向 history 添加新记录</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>target</td>
          <td style="text-align: left">相当于 a 链接的 target 属性</td>
          <td>String</td>
          <td>_self</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>