<template>
    <ysyz-row>
        <ysyz-col span="6" order="4"><div class="col-box-1 col-box">1 | order-4</div></ysyz-col>
        <ysyz-col span="6" order="3"><div class="col-box-2 col-box">2 | order-3</div></ysyz-col>
        <ysyz-col span="6" order="2"><div class="col-box-1 col-box">3 | order-2</div></ysyz-col>
        <ysyz-col span="6" order="1"><div class="col-box-2 col-box">4 | order-1</div></ysyz-col>
    </ysyz-row>
</template>

<style scoped lang="scss">
.col-box {
  height: 35px;
  line-height: 35px;
  margin-bottom: 10px;
  text-align: center;
}
.col-box-1 {
  background-color: #a4ceff;
  color: #333;
}
.col-box-2 {
  background-color: #5185ff;
  color: #333;
}
</style>