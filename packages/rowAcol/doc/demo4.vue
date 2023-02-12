<template>
    <ysyz-row>
        <ysyz-col span="8"><div class="col-box-1 col-box">col-8</div></ysyz-col>
        <ysyz-col span="8" offset="8"><div class="col-box-1 col-box">col-8 | offset-8</div></ysyz-col>
    </ysyz-row>
    <br>
    <ysyz-row>
        <ysyz-col span="6" offset="8"><div class="col-box-1 col-box">col-6 | offset-8</div></ysyz-col>
        <ysyz-col span="6" offset="4"><div class="col-box-1 col-box">col-6 | offset-4</div></ysyz-col>
    </ysyz-row>
    <br>
    <ysyz-row>
        <ysyz-col span="12" offset="8"><div class="col-box-1 col-box">col-12 | offset-8</div></ysyz-col>
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
  background-color: #5185ff;
  color: #333;
}
</style>
