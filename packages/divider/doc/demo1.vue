<template>
  <div class="wrap">
    <h3>实线solid靠左</h3>
    <ysyz-divider  content-position="left">早上好</ysyz-divider>
    <h3>实线solid居中</h3>
    <ysyz-divider content-position="center">中午好</ysyz-divider>
    <h3>实线solid靠右</h3>
    <ysyz-divider content-position="right">下午好</ysyz-divider>
    <h3>虚线dashed靠左</h3>
    <ysyz-divider lineType="dashed" content-position="left">早上好</ysyz-divider>
    <h3>虚线dashed居中</h3>
    <ysyz-divider lineType="dashed" content-position="center">中午好</ysyz-divider>
    <h3>虚线dashed靠右</h3>
    <ysyz-divider lineType="dashed" content-position="right">下午好</ysyz-divider>
    <h3>圆点dotted靠左</h3>
    <ysyz-divider lineType="dotted" content-position="left">早上好</ysyz-divider>
    <h3>圆点dotted居中</h3>
    <ysyz-divider lineType="dotted" content-position="center">中午好</ysyz-divider>
    <h3>圆点dotted靠右</h3>
    <ysyz-divider lineType="dotted" content-position="right">下午好</ysyz-divider>
    <h3>竖向分割线</h3>
    <span>早上好</span>
    <ysyz-divider direction="vertical"></ysyz-divider>
    <span>中午好</span>
    <ysyz-divider direction="vertical"></ysyz-divider>
    <span>下午好</span>
   
  </div>
</template>

<script>
export default {
};

</script>

<style>
.wrap { padding: 24px; }
</style>
