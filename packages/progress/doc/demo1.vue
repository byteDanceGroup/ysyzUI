<template>
  <div>
      <h4>Progress props参数介绍</h4>

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
          <td>percent</td>
          <td style="text-align: left">百分比</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>status</td>
          <td style="text-align: left">
            状态，可选值为normal、active、wrong、success	
          </td>
          <td>String</td>
          <td>normal</td>
        </tr>
        <tr>
          <td>stroke-width</td>
          <td style="text-align: left">进度条的线宽，单位 px</td>
          <td>Number</td>
          <td>10</td>
        </tr>
        <tr>
          <td>stroke-color</td>
          <td style="text-align: left">进度条的颜色，支持传入数组，显示为渐变色</td>
          <td>String | Array	</td>
          <td>-</td>
        </tr>
        <tr>
          <td>hide-info</td>
          <td style="text-align: left">
            隐藏数值或状态图标		
          </td>
          <td>Boolean	</td>
          <td>false</td>
        </tr>
        <tr>
          <td>vertical</td>
          <td style="text-align: left">是否在垂直方向显示	</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>success-percent</td>
          <td style="text-align: left">已完成的分段百分比</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>text-inside</td>
          <td style="text-align: left">百分比是否置于进度条内	</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>emplate