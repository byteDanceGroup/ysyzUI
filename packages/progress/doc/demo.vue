<template>
  <div>
    <h5>percentage百分比，status三种自带颜色，默认normal</h5>
    <h4><ysyz-progress :percentage="30"></ysyz-progress></h4>
    <h4><ysyz-progress :percentage="40" status="normal"></ysyz-progress></h4>
    <h4><ysyz-progress :percentage="50" status="success"></ysyz-progress></h4>
    <h4><ysyz-progress :percentage="60" status="fail"></ysyz-progress></h4>
    <br>
    <h5>自定义颜色（字符串）</h5>
    <h4><ysyz-progress color="pink" :percentage="70"></ysyz-progress></h4>
    <br>
    <h5>自定义颜色（函数，可根据百分比设置不同的颜色）</h5>
    <h4><ysyz-progress :color="colorFn" :percentage="60"></ysyz-progress></h4>
    <h4><ysyz-progress :color="colorFn" :percentage="50"></ysyz-progress></h4>
    <br>
    <h5>进度条右侧文本区域插槽</h5>
    <h4>
      <ysyz-progress :percentage="40">
        <span slot="text">₍ᐢ..ᐢ₎</span>
      </ysyz-progress>
    </h4>
    <h4>
      <ysyz-progress :percentage="100">
        <span slot="text">满</span>
      </ysyz-progress>
    </h4>
    <br />
    <h5>隐藏右侧文本区域插槽</h5>
    <h4>
      <ysyz-progress :percentage="100" :showText="false"></ysyz-progress>
    </h4>
    <br>
    <h5>百分比增加减少，需要控制一下增加和减少的边界值0和100</h5>
    <h4>
      <ysyz-progress :percentage="percentage" :color="diffColor"></ysyz-progress>
      <button @click="add">增加</button>
      <button @click="subtra">减少</button>
    </h4>
    <br />
    <h5>开启动画，默认动画关闭的</h5>
    <h4><ysyz-progress :percentage="70" showDongHua></ysyz-progress></h4>
  </div>


</template>
<script>
export default {
  name: "myProgress1Name",
  data() {
    return {
      percentage: 15,
    };
  },
  methods: {
    colorFn(val) {
      // console.log("不同百分比区间显示不同颜色", val);
      if (val <= 50) {
        return "green";
      }
      if (val <= 100) {
        return "purple";
      }
    },
    add() {
      if (this.percentage + 10 >= 100) {
        this.percentage = 100;
      } else {
        this.percentage = this.percentage + 10;
      }
    },
    subtra() {
      if (this.percentage - 10 <= 0) {
        this.percentage = 0;
      } else {
        this.percentage = this.percentage - 10;
      }
    },
    diffColor(val) {
      if (val <= 10) {
        return "red";
      }
      if (val <= 20) {
        return "orange";
      }
      if (val <= 30) {
        return "yellow";
      }
      if (val <= 40) {
        return "green";
      }
      if (val <= 50) {
        return "cyan";
      }
      if (val <= 60) {
        return "blue";
      }
      if (val <= 70) {
        return "purple";
      }
      if (val <= 80) {
        return "pink";
      }
      if (val <= 90) {
        return "#baf";
      }
      if (val <= 100) {
        return "#F24E1E";
      }
    },
  },
};
</script>