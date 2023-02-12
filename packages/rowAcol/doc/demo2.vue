<template>
    <ysyz-row :gutter="16">
        <ysyz-col span="6">
            <div class="col-box-1 col-box">col-6</div>
        </ysyz-col>
        <ysyz-col span="6">
            <div class="col-box-2 col-box">col-6</div>
        </ysyz-col>
        <ysyz-col span="6">
            <div class="col-box-1 col-box">col-6</div>
        </ysyz-col>
        <ysyz-col span="6">
            <div class="col-box-2 col-box">col-6</div>
        </ysyz-col>
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