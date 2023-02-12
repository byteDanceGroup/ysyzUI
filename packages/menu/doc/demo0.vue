<template>
  <div style="width: 100%" class="page">
    <h2>菜单</h2>

    为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。
    <br />
    <h3>概述</h3>

    <demo2 />
    <br />
    <preview comp-name="menu" demo-name="demo2" />
    <br />
    使用于网页顶部时，需要令参数 <span>mode</span> 为 <span>horizontal</span> 。
    <br />规定 <span>width</span> 可令菜单根据此大小填充宽度， <br />传入
    <span>default-active</span> 可选定默认激活的菜单项。 <br />使用选项组
    <span>menuGroup</span> 对选项进行简单分类。 <br />使用
    <span>submenu</span> 设置子菜单。
    <br />
    <demo1 />
    <br />
    <preview comp-name="menu" demo-name="demo1" />
    <br />
    菜单未设置 <span>mode</span> 时，默认展示垂直左侧菜单， <br />除
    <span>default-active</span> 外，设置
    <span>default-active</span> 可规定默认状态展开的一系列折叠菜单。
    <br />置参数 <span>accordion</span> 为
    <span>true</span>
    可进入手风琴模式，此时同级子菜单最多展开一个。（展开上方两个案例感受区别）
    <br />垂直状态仍然可以通过参数 <span>width</span> 设定宽度。
    <br />
    <h3>API</h3>

    <h4>menu props参数介绍</h4>

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
        <td>mode</td>
        <td style="text-align: left">
          菜单布局类型，可选值：horizontal 、 vertical
        </td>
        <td>String</td>
        <td>vertical</td>
      </tr>
      <tr>
        <td>accordion</td>
        <td style="text-align: left">
          是否启用手风琴模式。启用后同级子菜单最多展开一个，仅在垂直模式有效。
        </td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>gutter</td>
        <td style="text-align: left">描述之间的水平间距，单位为px</td>
        <td>Number</td>
        <td>32</td>
      </tr>
      <tr>
        <td>default-active</td>
        <td style="text-align: left">默认选中的选项的name</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>default-open</td>
        <td style="text-align: left">
          默认展开的子菜单的name形成的数组，仅在垂直模式有效。
        </td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>to-auto</td>
        <td style="text-align: left">
          是否启用自动填充路由。启用后，选项已有跳转设置时，按照选项设置的内容进行跳转。其余未单独设置的选项在激活后会以push形式跳转至同名路由。
        </td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>replace-auto</td>
        <td style="text-align: left">与上一项类似，默认的跳转方式为replace</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>width</td>
        <td style="text-align: left">菜单的宽度</td>
        <td>String</td>
        <td>-</td>
      </tr>
    </table>

    <br /><br />
    <h4>menu 事件介绍</h4>
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
        <th>事件名</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>on-select</td>
        <td style="text-align: left">有选项被激活时触发</td>
        <td>被激活选项的name</td>
      </tr>
      <tr>
        <td>on-open-change</td>
        <td style="text-align: left">有子菜单被展开时触发</td>
        <td>被展开的子菜单的name</td>
      </tr>
    </table>
    <br /><br />

    <h4>menuItem props参数介绍</h4>

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
        <td>name</td>
        <td style="text-align: left">菜单选项的唯一标识，必填</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>to</td>
        <td style="text-align: left">
          路由跳转的vue-router对象，方式默认为push
        </td>
        <td>Object</td>
        <td>-</td>
      </tr>
      <tr>
        <td>replace</td>
        <td style="text-align: left">是否将路由跳转方式置为replace</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>target</td>
        <td style="text-align: left">同a标签的target，跳转链接</td>
        <td>String</td>
        <td>-</td>
      </tr>
    </table>
    <br /><br />
    <h4>submenu props参数介绍</h4>

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
        <td>name</td>
        <td style="text-align: left">子菜单的唯一标识，必填</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>title</td>
        <td style="text-align: left">子菜单的标题</td>
        <td>String</td>
        <td>-</td>
      </tr>
    </table>
    <br /><br />
    <h4>menuGroup props参数介绍</h4>

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
        <td style="text-align: left">选项组的标题</td>
        <td>String</td>
        <td>-</td>
      </tr>
    </table>
    <br /><br />
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
