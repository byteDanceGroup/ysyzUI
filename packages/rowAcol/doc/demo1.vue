<template>
    <ysyz-row>
        <ysyz-col span="12"><div class="col-box-1 col-box">col-12</div></ysyz-col>
        <ysyz-col span="12"><div class="col-box-2 col-box">col-12</div></ysyz-col>
    </ysyz-row>
    <br>
    <ysyz-row>
        <ysyz-col span="8"><div class="col-box-1 col-box">col-8</div></ysyz-col>
        <ysyz-col span="8"><div class="col-box-2 col-box">col-8</div></ysyz-col>
        <ysyz-col span="8"><div class="col-box-1 col-box">col-8</div></ysyz-col>
    </ysyz-row>
    <br>
    <ysyz-row>
        <ysyz-col span="6"><div class="col-box-1 col-box">col-6</div></ysyz-col>
        <ysyz-col span="6"><div class="col-box-2 col-box">col-6</div></ysyz-col>
        <ysyz-col span="6"><div class="col-box-1 col-box">col-6</div></ysyz-col>
        <ysyz-col span="6"><div class="col-box-2 col-box">col-6</div></ysyz-col>
    </ysyz-row>
</template>

<style scoped lang="css">

.col-box {
  height: 35px;
  line-height: 35px;
  margin-bottom: 10px;
  text-align: center;
}
.col-box-1 {
  background-color: #a5c8f0;
  color: #fbfeff;
}
.col-box-2 {
  background-color: #3167e5;
  color: #fdfeff;
}
</style>